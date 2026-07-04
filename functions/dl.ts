// Cloudflare Pages Function: /dl
//
// 報告 PDF 下載代理。報告已上傳到 Trello 看板「產業報告資料庫」，卡片名 = PDF 檔名去副檔名。
// 使用者瀏覽 layx.uk 時已通過 Cloudflare Access 登入，點頁面上的 /dl 連結即由本 Function 以
// 伺服器端 Trello token 取回附件並串流回傳 —— 免 Trello 登入、免看板成員身分。
//
// 連結介面（欄位式，authoring 不需知道 card id）：
//   個股：/dl?t={代碼}&b={券商}&d={YYYYMMDD}
//   產業：/dl?g=產業&b={券商}&d={YYYYMMDD}&h={主題hint}
//   拆分件（>10MB 多附件卡）：加 &part=N 指定第 N 份
//
// 安全：Trello 憑證為 Pages secret（伺服器端）；驗證 Cloudflare Access JWT，缺少/無效即 403，
//       擋掉不受 Access 保護的 *.pages.dev / *.workers.dev 後門。

interface Env {
  TRELLO_KEY: string
  TRELLO_TOKEN: string
  TRELLO_BOARD_ID: string
  ACCESS_TEAM_DOMAIN?: string // 例 steep-violet-e3db.cloudflareaccess.com（設了才做完整驗簽）
  ACCESS_AUD?: string // Access 應用的 Audience tag
}

const API = "https://api.trello.com/1"

// 券商正規化：連結一律帶短碼，這裡再兜底把常見全名/變體轉短碼，對齊卡片名內的 _{券商}_ token
const BROKER_ALIAS: Record<string, string> = {
  "morgan stanley": "MS", ms: "MS",
  "goldman sachs": "GS", goldman: "GS", gs: "GS",
  ubs: "UBS",
  daiwa: "Daiwa",
  nomura: "Nomura", nmr: "Nomura",
  citi: "Citi", citigroup: "Citi",
  jpmorgan: "JPM", "j.p. morgan": "JPM", jpm: "JPM",
  "bank of america": "BofA", bofa: "BofA", merrill: "BofA",
  hsbc: "HSBC",
  macquarie: "MQ", mq: "MQ",
  bernstein: "Bernstein",
  semianalysis: "SemiAnalysis",
  aletheia: "Aletheia",
  clsa: "CLSA",
}

function normBroker(b: string): string {
  const key = b.trim().toLowerCase()
  return BROKER_ALIAS[key] ?? b.trim()
}

// ── 卡片索引 cache（isolate 記憶體，TTL 5 分鐘）──────────────────────
interface Card { id: string; name: string }
let cardCache: { at: number; cards: Card[] } | null = null
const CARD_TTL = 5 * 60 * 1000

async function getCards(env: Env): Promise<Card[]> {
  if (cardCache && Date.now() - cardCache.at < CARD_TTL) return cardCache.cards
  const u = `${API}/boards/${env.TRELLO_BOARD_ID}/cards?fields=name&key=${env.TRELLO_KEY}&token=${env.TRELLO_TOKEN}`
  const r = await fetch(u)
  if (!r.ok) throw new Error(`Trello cards ${r.status}`)
  const cards = (await r.json()) as Card[]
  cardCache = { at: Date.now(), cards }
  return cards
}

// 依欄位找卡片：個股 name 以 {t}_ 開頭；產業 name 以 產業_/産業_ 開頭。皆須含 _{券商}_ 且以 {日期} 結尾。
function matchCard(cards: Card[], p: URLSearchParams): Card | null {
  const broker = normBroker(p.get("b") || "")
  const date = (p.get("d") || "").trim()
  const ticker = (p.get("t") || "").trim()
  const isIndustry = (p.get("g") || "").trim() !== "" && !ticker
  const hint = (p.get("h") || "").trim().toLowerCase()
  if (!broker || !date) return null

  const brokerTok = `_${broker}_`
  let hits = cards.filter((c) => {
    const n = c.name
    if (!n.endsWith(date)) return false
    if (!n.includes(brokerTok)) return false
    if (isIndustry) return n.startsWith("產業_") || n.startsWith("産業_")
    // 台股：name 以 {代碼}_ 開頭；美股：name 為 美股_名({代碼})_… → 用 ({代碼}) 比對
    return ticker ? n.startsWith(`${ticker}_`) || n.includes(`(${ticker})`) : false
  })
  if (hits.length <= 1) return hits[0] ?? null
  // 多筆（產業同日同券商）→ 用主題 hint 做 contains 消歧
  if (hint) {
    const norm = (s: string) => s.toLowerCase().replace(/[-_\s]/g, "")
    const h = norm(hint)
    const byHint = hits.filter((c) => norm(c.name).includes(h))
    if (byHint.length >= 1) hits = byHint
  }
  return hits[0] ?? null
}

interface Att { id: string; name: string; url: string; mimeType?: string; isUpload?: boolean }

async function getPdfAttachments(cardId: string, env: Env): Promise<Att[]> {
  const u = `${API}/cards/${cardId}/attachments?key=${env.TRELLO_KEY}&token=${env.TRELLO_TOKEN}`
  const r = await fetch(u)
  if (!r.ok) throw new Error(`Trello attachments ${r.status}`)
  const atts = (await r.json()) as Att[]
  return atts
    .filter((a) => a.isUpload !== false && /\.pdf$/i.test(a.name))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
}

function contentDisposition(filename: string): string {
  // 中文檔名用 RFC5987 filename*，另給 ASCII fallback
  const ascii = filename.replace(/[^\x20-\x7e]/g, "_").replace(/"/g, "")
  return `attachment; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(filename)}`
}

async function streamAttachment(att: Att, env: Env): Promise<Response> {
  const r = await fetch(att.url, {
    headers: {
      Authorization: `OAuth oauth_consumer_key="${env.TRELLO_KEY}", oauth_token="${env.TRELLO_TOKEN}"`,
    },
  })
  if (!r.ok) return new Response(`附件取回失敗 ${r.status}`, { status: 502 })
  const h = new Headers()
  h.set("Content-Type", "application/pdf")
  h.set("Content-Disposition", contentDisposition(att.name))
  h.set("Cache-Control", "private, no-store")
  const len = r.headers.get("Content-Length")
  if (len) h.set("Content-Length", len)
  return new Response(r.body, { status: 200, headers: h })
}

// ── Cloudflare Access JWT 驗證 ──────────────────────────────────────
let jwks: { at: number; keys: Record<string, CryptoKey> } | null = null

async function getKeys(team: string): Promise<Record<string, CryptoKey>> {
  if (jwks && Date.now() - jwks.at < 60 * 60 * 1000) return jwks.keys
  const r = await fetch(`https://${team}/cdn-cgi/access/certs`)
  const data = (await r.json()) as { keys: JsonWebKey[] }
  const keys: Record<string, CryptoKey> = {}
  for (const jwk of data.keys) {
    if (!jwk.kid) continue
    keys[jwk.kid] = await crypto.subtle.importKey(
      "jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"],
    )
  }
  jwks = { at: Date.now(), keys }
  return keys
}

function b64urlToBytes(s: string): Uint8Array {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4))
  const bin = atob(s.replace(/-/g, "+").replace(/_/g, "/") + pad)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

async function verifyAccess(request: Request, env: Env): Promise<boolean> {
  const token =
    request.headers.get("Cf-Access-Jwt-Assertion") ||
    (request.headers.get("Cookie") || "").match(/CF_Authorization=([^;]+)/)?.[1] ||
    ""
  if (!token) return false
  // 未設定 team/aud → 只做「header 存在」檢查（pages.dev 後門不會被注入此 header）
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD) return true
  try {
    const [h, p, s] = token.split(".")
    if (!h || !p || !s) return false
    const header = JSON.parse(new TextDecoder().decode(b64urlToBytes(h)))
    const keys = await getKeys(env.ACCESS_TEAM_DOMAIN)
    const key = keys[header.kid]
    if (!key) return false
    const ok = await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5", key,
      b64urlToBytes(s), new TextEncoder().encode(`${h}.${p}`),
    )
    if (!ok) return false
    const payload = JSON.parse(new TextDecoder().decode(b64urlToBytes(p)))
    const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud]
    if (!aud.includes(env.ACCESS_AUD)) return false
    if (payload.exp && Date.now() / 1000 > payload.exp) return false
    return true
  } catch {
    return false
  }
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context

  if (!(await verifyAccess(request, env))) {
    return new Response("Forbidden（需經 Cloudflare Access）", { status: 403 })
  }
  if (!env.TRELLO_KEY || !env.TRELLO_TOKEN || !env.TRELLO_BOARD_ID) {
    return new Response("伺服器未設定 Trello 憑證", { status: 500 })
  }

  const p = new URL(request.url).searchParams
  let card: Card | null
  try {
    card = matchCard(await getCards(env), p)
  } catch (e) {
    return new Response(`Trello 查詢失敗：${(e as Error).message}`, { status: 502 })
  }
  if (!card) return new Response("找不到對應的報告卡片", { status: 404 })

  const atts = await getPdfAttachments(card.id, env)
  if (atts.length === 0) return new Response("卡片沒有 PDF 附件", { status: 404 })

  const partParam = p.get("part")
  if (atts.length > 1 && !partParam) {
    // 拆分件卡：回選擇頁
    const base = new URL(request.url)
    const links = atts
      .map((a, i) => {
        const u = new URL(base)
        u.searchParams.set("part", String(i + 1))
        return `<li><a href="${u.pathname}${u.search}">${a.name}</a></li>`
      })
      .join("")
    return new Response(
      `<!doctype html><meta charset="utf-8"><title>${card.name}</title>` +
        `<h3>${card.name}（分 ${atts.length} 份）</h3><ul>${links}</ul>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } },
    )
  }

  const idx = partParam ? Math.max(1, Math.min(atts.length, parseInt(partParam, 10))) - 1 : 0
  return streamAttachment(atts[idx], env)
}

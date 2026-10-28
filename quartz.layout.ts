import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { FileTrieNode } from "./quartz/util/fileTrie"
import type { QuartzPluginData } from "./quartz/plugins/vfile"

// 左側導覽列排序（兩個 layout 共用）。Quartz 會把這個函式 toString() 後送到瀏覽器用 new Function 重建，
// 所以函式內不能引用外部變數，常數都要寫在函式裡面。
const explorerSortFn = (a: FileTrieNode, b: FileTrieNode) => {
  // 置頂項目：券商行程日曆、公司Memo、史萊姆的聊天室 固定排在最前（依此順序）
  const pinned = ["券商行程日曆", "公司Memo", "史萊姆的聊天室"]
  const rankA = pinned.indexOf(a.displayName)
  const rankB = pinned.indexOf(b.displayName)
  if (rankA !== -1 || rankB !== -1) {
    if (rankA === -1) return 1
    if (rankB === -1) return -1
    return rankA - rankB
  }
  if (!a.isFolder && !b.isFolder) {
    var dateA = (a.slugSegment.match(/\d{8}/) || [""])[0]
    var dateB = (b.slugSegment.match(/\d{8}/) || [""])[0]
    if (dateA && dateB && dateA !== dateB) return dateB.localeCompare(dateA)
    // 外資券商個股卡（台股／美股，檔名沒有日期）：改用報告發表日（frontmatter date，由 contentIndex 的
    // sortDate 帶進來）。有日期的排前面、新到舊；沒有的排最後；同一天的往下走，用名稱排。
    // 只限這兩個資料夾：其他資料夾檔名本來就帶日期，混進來會讓「有日期比日期、沒日期比名稱」前後矛盾。
    if (/^(台股|美股)\//.test(a.slug)) {
      var sortA = a.data && a.data.sortDate
      var sortB = b.data && b.data.sortDate
      if (sortA && sortB) {
        if (sortA !== sortB) return sortB.localeCompare(sortA)
      } else if (sortA || sortB) {
        return sortA ? -1 : 1
      }
    }
  }
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    // 緊跟在某項正下方：網路文章分享 → 外資券商。中文 localeCompare 隨瀏覽器語系（筆畫／拼音）而變，
    // 外資券商的位置不固定，所以借用它的排序鍵、同鍵時排在它後面，而不是寫死第幾個。
    const followAfter: Record<string, string> = { 網路文章分享: "外資券商" }
    const keyA = followAfter[a.displayName] ?? a.displayName
    const keyB = followAfter[b.displayName] ?? b.displayName
    if (keyA === keyB) {
      return (a.displayName in followAfter ? 1 : 0) - (b.displayName in followAfter ? 1 : 0)
    }
    return keyA.localeCompare(keyB, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }
  return a.isFolder ? -1 : 1
}

// 左側導覽列名稱（兩個 layout 共用）。同樣會被 toString() 送到瀏覽器，函式內不能引用外部變數。
// 外資券商（台股／美股）個股卡的檔名沒有日期，名稱後面補上報告發表日，看得出為什麼這樣排。
// 國內券商頁的標題本來就帶日期，產業／公司Memo 的檔名也帶，所以只動台股、美股。
const explorerMapFn = (node: FileTrieNode) => {
  if (node.isFolder || !node.data || !node.data.sortDate) return
  if (!/^(台股|美股)\//.test(node.slug)) return
  const m = node.data.sortDate.match(/^\d{4}-(\d{2})-(\d{2})$/)
  if (m) node.displayName = node.displayName + "｜" + Number(m[1]) + "/" + Number(m[2])
}

// 首頁「今日更新」的標題：外資與國內券商的頁面名稱太像，前面標來源。
// 外資個股卡補上報告發表日；國內券商頁的標題本來就有日期。其餘頁面維持原標題。
const recentTitleFormat = (page: QuartzPluginData, title: string): string => {
  const slug = page.slug ?? ""
  if (/^(台股|美股)\//.test(slug)) {
    const date = page.frontmatter?.date
    const m = typeof date === "string" ? date.match(/^\d{4}-(\d{2})-(\d{2})/) : null
    return "外資｜" + title + (m ? "｜" + Number(m[1]) + "/" + Number(m[2]) : "")
  }
  const broker = slug.match(/^國內券商\/([^/]+)\//)
  return broker ? broker[1] + "｜" + title : title
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "今日更新",
        limit: 50,
        showTags: false,
        titleFormat: recentTitleFormat,
        filter: (f) => {
          if (!f.dates?.modified) return false
          // 只列真正的報告：排除首頁、工具頁(行程日曆)、爬蟲頁(史萊姆的聊天室)
          const excludedSlugs = ["index", "calendar", "史萊姆的聊天室"]
          if (excludedSlugs.includes(f.slug)) return false
          // 排除產業地圖整個資料夾：這些頁由 build_industry_map.py 產生、無 modified
          // frontmatter，Cloudflare 上會 fallback 到 filesystem=build 時間，天天誤判為今天
          if (f.slug?.startsWith("產業地圖/")) return false
          const today = new Date()
          const m = f.dates.modified
          return (
            m.getFullYear() === today.getFullYear() &&
            m.getMonth() === today.getMonth() &&
            m.getDate() === today.getDate()
          )
        },
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.GraphLink(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      sortFn: explorerSortFn,
      mapFn: explorerMapFn,
    }),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.GraphLink(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: explorerSortFn,
      mapFn: explorerMapFn,
    }),
  ],
  right: [],
}

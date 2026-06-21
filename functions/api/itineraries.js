// Cloudflare Pages Function — /api/itineraries
// 同源（layx.uk）、受 Cloudflare Access 保護，直接讀 D1 回 JSON 給日曆用。
// D1 binding「DB」在 repo 根的 wrangler.toml 宣告。
export async function onRequestGet({ env }) {
  const { results } = await env.DB.prepare(
    `SELECT id, event_date, event_time, broker, company, ticker, meeting_type, topic, location, signup_url
     FROM itineraries
     ORDER BY event_date IS NULL, event_date, event_time`
  ).all();
  return Response.json({ count: results.length, itineraries: results });
}

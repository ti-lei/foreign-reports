// 探針：確認 Cloudflare Pages 有沒有把 functions/ 部署成 Function。
// 開 https://layx.uk/ping 應該回 "pong"。確認 Functions 正常後可刪。
export function onRequestGet() {
  return new Response("pong\n", { headers: { "content-type": "text/plain; charset=utf-8" } });
}

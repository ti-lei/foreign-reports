// 在每個報告下載連結（/dl?...）旁補一個「👁 預覽」：新分頁用 view=1 開，
// Worker（worker/index.ts）回 Content-Disposition: inline，瀏覽器直接用內建檢視器顯示 PDF。
// 連結由 inject_trello_links.py / domestic_report_sync.py 寫進筆記，這裡統一補，不必改筆記。
function addPreviewLinks() {
  document.querySelectorAll<HTMLAnchorElement>('a[href*="/dl?"]').forEach((a) => {
    if (a.classList.contains("pdf-preview")) return
    if (a.nextElementSibling?.classList.contains("pdf-preview")) return

    let url: URL
    try {
      url = new URL(a.href, location.href)
    } catch {
      return
    }
    if (url.pathname !== "/dl" || url.searchParams.get("view") === "1") return

    url.searchParams.set("view", "1")
    const preview = document.createElement("a")
    preview.className = "pdf-preview"
    preview.href = url.href
    preview.target = "_blank"
    preview.rel = "noopener"
    preview.textContent = "👁 預覽"
    a.after(preview)
  })
}

// Quartz 是 SPA：換頁不會重新載入腳本，每次換頁（含首次載入）都會觸發 nav
document.addEventListener("nav", addPreviewLinks)

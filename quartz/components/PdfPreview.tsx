// @ts-ignore
import script from "./scripts/pdfpreview.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

// 不畫任何東西，只帶腳本與樣式：在「📎 下載 PDF」旁補「👁 預覽」
const PdfPreview: QuartzComponent = () => null

PdfPreview.afterDOMLoaded = script
PdfPreview.css = `
a.pdf-preview {
  margin-left: 0.9em;
  white-space: nowrap;
}
`

export default (() => PdfPreview) satisfies QuartzComponentConstructor

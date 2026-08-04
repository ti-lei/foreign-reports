---
modified: 2026-08-04
type: 產業報告
broker: SemiAnalysis
date: 2026-07-29
sectors: [記憶體]
---
# SemiAnalysis｜Rubin Ultra HBM 下修至 192GB

**券商**：SemiAnalysis  
**分析師**：Myron Xie  
**日期**：2026-07-29  
**主題**：Rubin Ultra 規格意外下修——HBM 降至 8-Hi 192GB、主流功率降至 1,800W  
**評級**：N/A（SemiAnalysis 為獨立研究機構，無傳統評等）  
<a href="https://layx.uk/dl?g=產業&b=SemiAnalysis&d=20260729&h=Rubin-Ultra-HBM-192GB">📎 下載 PDF</a>

> ⚠️ SemiAnalysis 無對應 Exhibit locator，本報告為純文字摘要（無圖片裁切）。

---

## 報告總結

SemiAnalysis 引述產業消息指出，Nvidia 正以「低於先前預期」的規格向重點客戶預覽 Rubin「Ultra」——主流 SKU 維持相同峰值理論 FLOPs、仍用 HBM4，但記憶體從 Rubin 的 12-Hi 288GB **反向下修**至 8-Hi 192GB，晶片功率約 1,800W（與初代 Rubin 出貨相同、低於 2,300W 雙片式 lid 版本）。這延續自 GTC 2025 首次預覽的 4-die 1TB HBM4E 16-Hi 以來的一連串規格降級：HBM4E 先降至 12-Hi、4-die MCM 取消（Rubin Ultra 維持與 Rubin 相同的 2-die 封裝）。與過去因製造難度被動降級不同，這次是 Nvidia 的「主動選擇」。

SemiAnalysis 判斷降規背後是「記憶體與資料中心供給雙重瓶頸」的交集：記憶體端在 rationing 有限的 HBM 供給、平衡相對寬鬆的 TSMC 前段與相對吃緊的 HBM，同時大幅降低 BOM 以抵銷明年 HBM 漲價（即便 Nvidia 已用 GPU 配額換到 SK Hynix 的 \$/GB 折扣）；功率端則因資料中心持續電力赤字，降低功率規格讓客戶更易部署。結論是：在電力受限的世界，1,800W Max-Q SKU（最佳 FLOPs/Watt）才是最優解，Nvidia 藉此同時降低電力交付 BOM 並提高晶圓良率。

---

## SemiAnalysis 完整投資邏輯鏈

| 論點層次 | 內容 |
|---|---|
| 規格意外 | Rubin Ultra 主流 SKU HBM 降至 8-Hi 192GB（低於 Rubin 12-Hi 288GB），功率 ~1,800W |
| 降級趨勢 | 自 GTC 2025 的 4-die 1TB HBM4E 16-Hi 一路降：HBM4E→12-Hi、4-die MCM 取消（維持 2-die） |
| 性質判斷 | 這次比 Rubin 更低規，屬 Nvidia「主動選擇」而非製造被動 |
| 記憶體動機 | rationing 有限 HBM 供給、平衡 TSMC 前段 vs 吃緊 HBM；BOM 下降抵銷明年 HBM 漲價 |
| 功率動機 | 資料中心電力赤字下，降規讓客戶易部署；多數客戶用不到額外功率預算 |
| **結論** | **1,800W Max-Q（最佳 FLOPs/Watt）為電力受限世界的最優解；Nvidia 同步降 BOM、提良率** |

> **報告最大邏輯缺口**：全文建立在「industry chatter（產業傳聞）」與 SemiAnalysis 的 AI Datacenter 電力模型之上，Rubin Ultra 最終規格仍可能變動；且 192GB vs 288GB 對記憶體供應商（SK Hynix 等）的 HBM 出貨量含意，報告未量化——降規對「HBM 位元需求」是利空還是只是 mix 調整，尚待驗證。

---

## 報告核心觀點

| 主題 | SemiAnalysis 觀點 | 先前預期 | 是否 Contra-Consensus |
|---|---|---|---|
| Rubin Ultra HBM | 8-Hi 192GB（HBM4） | 12-Hi 288GB 或更高 | 是（下修） |
| 主流功率 | 1,800W（Max-Q） | 2,300-2,800W | 是（下修） |
| 降規性質 | Nvidia 主動選擇 | 製造被動 | 是 |
| 動機 | 記憶體＋DC 供給瓶頸、BOM 下降 | 純技術/良率 | 補充視角 |

**SKU 分層**：
| SKU | 功率 | 定位 |
|---|---|---|
| Max-P | 2,600-2,800W | 高 TDP、高絕對 FLOPs |
| Max-Q（主流） | 1,800W | 最佳 FLOPs/Watt，電力受限最優 |
| 低功率 | 1,200W | token decode 等低運算負載 |

**系統形態**：Rubin Ultra 於現行 roadmap 為 NVL576 scale-up world size；達成 NVL576 的規劃形態之一是 8× 72-GPU 機櫃互連，機櫃間 switch-to-switch 採 NPO。

---

## 投資意涵（延伸推導）

| 面向 | 含意 |
|---|---|
| HBM 供應商 | 每 GPU HBM 容量降（288→192GB）→ 單卡 HBM 用量下降，但 Nvidia 意在 rationing 有限供給；對 HBM 位元需求是 mix 調整而非單純利空 |
| 電力/BOM | 功率降至 1,800W → 電力交付 BOM 減少，對電源/散熱含量是逆風（vs 高功率 SKU） |
| 封裝 | 維持 2-die（4-die MCM 取消）→ 先進封裝複雜度低於原預期 |
| 台廠關聯 | 本報告聚焦 Nvidia roadmap 與 HBM/記憶體，台廠關聯為間接（電源 BOM、封裝複雜度）；無直接個股推薦 |

> 本報告為產業/技術趨勢分析，無特定台股評等；上表為依報告論點延伸的投資含意，非報告明列標的。

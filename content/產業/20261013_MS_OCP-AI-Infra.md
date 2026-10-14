---
modified: 2026-10-14
type: 產業報告
broker: Morgan Stanley
date: 2026-10-13
sectors: [光通訊-CPO, 半導體封測, 記憶體, 800VDC, 散熱]
---
# MS｜OCP Kick-off – Optical, Packaging, Memory and Power in Focus

**券商**：Morgan Stanley  
**分析師**：Daniel Yen CFA、Charlie Chan、Daisy Dai CFA、Lucas Wang、Henry Zhao、Ethan Jia（RA）  
**日期**：2026-10-13  
**主題**：OCP Summit 四大主題——CPO / 先進封裝 / 記憶體架構 / 電源散熱  
**評級**：Industry View Attractive  
<a href="https://layx.uk/dl?g=產業&b=MS&d=20261013&h=OCP-AI-Infra">📎 下載 PDF</a>

---

## 報告總結

MS 出席 OCP Summit 2026 kick-off 後發布本快報，記錄四大 AI 基礎設施主題的最新進展：CPO 光互連、3.5D 先進封裝、異質記憶體架構、電源散熱。核心訊號是 AI 算力推進已從元件層優化升至**機架層級協同最佳化**（rack-level co-optimization），64-XPU CPO 機架 demo 確認 scale-up 光通訊潛力，MediaTek 宣示 3.5D 封裝能效 +10x，SK Hynix 的 MARS / HBF 回應 inference 容量瓶頸，而 800V DC + 液冷成為超過 200kW 機架的標準配備方向。

台灣供應鏈四個方向均有直接受益機會；MS 論點在於短期 pluggables 仍是量的主體，CPO 則是 XPU 定制化的方向性選擇，兩者並存而非取代。

---

## Morgan Stanley 完整投資邏輯鏈

| 論點層次 | 內容 |
|---|---|
| 推進主軸 | 機架層級協同最佳化取代元件層優化，agentic AI 驅動 inference 需求升溫 |
| CPO / 光通訊 | 64-XPU CPO rack demo 確認 scale-up 潛力；pluggables 保住 scale-out 量（serviceability + cost 優勢） |
| 先進封裝 | MediaTek 3.5D vs 2.5D：die-to-die 能效約 +10x；管理層預期 3-5 年內滲透率上升 |
| 記憶體架構 | SK Hynix MARS 共享 KV-cache → time-to-first-token 改善 3-5x；HBF = 容量 14x（樣品 2028E） |
| 電源 / 散熱 | 800V DC 降低轉換損耗；6kW 雙面冷板 + 微通道液冷；AMD Helion 強化 CPU 增量需求 |
| **結論** | **AI Infra 供應鏈四個方向同步受益；CPO 方向性確立，封裝複雜度持續上升為結構性機會** |

> **報告最大邏輯缺口**：本文為事件快報，未附任何 Exhibit 或財務模型；所有論點（3.5D 10x 能效、MARS 3-5x TTfT 改善）均為廠商 demo 數據，未經 MS 獨立建模驗證，可信度取決於後續產品量產驗證。

---

## 報告核心觀點

| 主題 | MS 觀點 | 市場共識 | 是否 Contra-Consensus |
|---|---|---|---|
| CPO vs pluggables | 並存：CPO 主攻 XPU scale-up，pluggables 保住 scale-out 量體 | 部分市場認為 CPO 將逐步取代 pluggables | 是，MS 明確不看 CPO 全面替代 |
| 3.5D 封裝時程 | 3-5 年漸進滲透（非立即量產） | 市場期待更快落地 | 偏保守，屬中期方向 |
| 記憶體需求 | 異質架構（HBM+DRAM+NAND）三層並存，容量與頻寬同等重要 | 市場焦點主要在 HBM 頻寬 | 是，強調容量瓶頸同樣關鍵 |
| 800V DC 轉換 | 積極方向確認，6kW 冷板 + 垂直電源架構成型 | 仍在討論時程落地 | 相對樂觀，確認方向明確 |
| AMD Helion | 增量 CPU 需求（與 GPU 並存） | 市場較集中討論 GPU only | Neutral，資訊量有限 |

**主題偏好排序**：光通訊-CPO（方向確立）> 先進封裝（3.5D 多年機會）≥ 電源/散熱（800VDC 轉換）> 記憶體（2028 才有 HBF 樣品，短期以 MARS 架構為主）

---

## 四大主題詳析

### CPO / 光互連

OCP Summit 展示 64-XPU CPO-enabled 計算機架，確認直接光互連（accelerator 之間）的技術可行性。200G/lane 電氣通道接近物理極限後，光 scale-up 將尤其重要——特別是針對定制化 XPU（非 GPU 標準架構）。

MS 維持 pluggable optics 保有 scale-out 量的觀點（serviceability 與成本優勢），CPO 主要在機架內 scale-up 場景佔優。商業化關鍵挑戰：封裝良率、光纖對準、可靠性。

### 先進封裝（3.5D）

MediaTek 展示自定義 ASIC 設計接近 10x 光罩尺寸（reticle size），主張 3.5D 整合可提供約 10x die-to-die 能效改善（相對傳統 2.5D 互連）。管理層預期 3-5 年內採用率上升，並強調自定義 HBM、專有 die-to-die 互連、DTCO 優化為配套發展方向。MS 認為封裝複雜度提升為先進封測與自定義 ASIC 設計服務的結構性機會（link 指向既有 ASIC 報告）。

### 記憶體架構（MARS + HBF）

**SK Hynix MARS**（Memory Architecture for Real-time Service）：解聚式記憶體架構，透過共享 KV-cache（避免重複計算）改善 time-to-first-token 達 3-5x。

**SK Hynix HBF**（High Bandwidth and capacity Fuse）：目標頻寬約為 HBM 一半，但容量達 14x；樣品預計 2028 年初交付。MS 認為 inference 工作負載將推動異質記憶體架構（HBM + DRAM + NAND 三層），記憶體 content 有機會超越傳統 GPU 附掛 HBM 的邊界。

### 電源 / 散熱

OCP Summit 展示 6kW 級雙面冷板、垂直電源架，以及先進微通道液冷，確認 >200kW 機架的熱管理問題持續升溫。800V DC 架構降低轉換損耗並提升功率密度，MS 視此為方向性轉換（非問號）。AMD Helion agentic AI 機架架構強調 CPU 需求的增量空間（與 GPU 並存），電源交付、先進冷卻、系統整合能力成為差異化關鍵。

---

## 相關個股清單（報告隱含受益，未列正式評等）

| 類別 | 主題 | 台灣受益方向 |
|---|---|---|
| CPO / 光互連 | 光通訊-CPO | 信驊（5388）、光聖（6198）、光鋐（4956）等 CPO 組件 |
| 先進封裝 | 半導體封測 | ASE（3711）、日月光、TSMC CoWoS、欣興（3037）ABF |
| 記憶體 | 記憶體 | SK Hynix（韓）、南亞科（2408）等 |
| 電源 / 散熱 | 800VDC, 散熱 | 旭隼（6409）、Delta（2308）、奇鋐（3017）等 |

> 本報告為事件快報，未附個股正式評等或目標價調整。各受益個股追蹤建議參照對應個股整理卡。

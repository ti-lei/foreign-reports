---
modified: 2026-06-09
---
# SemiAnalysis｜800VDC Pushout & CPO Delays

**券商**：SemiAnalysis LLC（原始檔名誤標為 Bernstein，請注意）  
**分析師**：Konrad Wang、Nigel Chiang、Nick Doyle、Doug OLaughlin、Daniel Nikolauk  
**日期**：2026-06-09  
**主題**：800VDC Pushout & Scale-out CPO Delays — Multi-Vertical Note  
**評級**：N/A（獨立研究機構，無正式評等系統）  
<button type="button" onclick="fetch('https://ti-lei.github.io/foreign-reports/static/downloads/產業/20260610_Bernstein_800VDC-CPO-Delays.md').then(r=>r.text()).then(t=>{let a=document.createElement('a');a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(t);a.download='20260610_Bernstein_800VDC-CPO-Delays.md';a.click()})">⬇ 下載 MD</button>

---

## SemiAnalysis 完整投資邏輯鏈

| 論點層次 | Exhibit | 內容 |
|---|---|---|
| 需求結構確認 | 封面 | Nvidia 原生單端 800VDC 設計出貨量推遲至 2028+；超大規模資料中心對 Rubin 不需要 800VDC，認為在 compute tray 以更高電壓饋電再降壓效率低下 |
| 供給上限 | p.2-3 | +400VDC 仍如期於 2H26 推出；超大規模自研 ASIC（Trainium、TPU）部署維持 +400VDC 架構，800VDC hyperscaler 訂單預計年底落地，量產推至 2027 Q1 |
| CPO 瓶頸確認 | p.4-5 | Scale-out CPO 系統良率受制：Spectrum X ASIC 有 32 個 COUPE，95% attach yield → 整模組良率 ~18%，造成量產延期；Scale-up CPO（自研 ASIC 用）進展正常 |
| 受益排序 | p.3-4、6 | 銅纜連接器（APH、SMTC、MTSI）受益延伸；Vertiv / Delta / Lite-On 對 800VDC 轉換屬中性；CPO 測試主題長期正面（Lumentum、Coherent、Hino、AAOI），但 Scale-out 量產時間線往後推 |
| 估值與定位 | p.2 | CPO 和 800VDC 概念股定位已極度擁擠，多數處於高點、高風險承受度；不對稱機會在做空過度延伸的動能股 |
| **結論** | 封面 | **800VDC 為 2028+ 事件（非 2026-27）；Scale-out CPO 量產時間線 2029+；短期贏家翻轉為輸家，銅纜受益延長** |

> **報告最大邏輯缺口**：800VDC hyperscaler sidecars 訂單「年底落地」的具體客戶未明確揭露，量產時間線依賴此數據；CPO 良率 95% 假設為外推，若實際良率不同結論影響較大。

---

## 報告核心觀點

| 主題 | SemiAnalysis 觀點 | 市場共識 | 是否 Contra-Consensus |
|---|---|---|---|
| 800VDC 時間線 | 推遲至 2028+（Nvidia 單端設計），+400VDC 仍 2H26 | 市場普遍期待 800VDC 2026-27 量產 | ✅ 明確反共識 |
| CPO Scale-out 時間線 | 2029 才有量產規模，良率瓶頸仍未解決 | 市場假設 2027-2028 量產，過度樂觀 | ✅ 明確反共識 |
| CPO Scale-up（自研 ASIC） | 維持正向，2029 為主要放量節點 | 市場混淆 Scale-up 與 Scale-out，整體 CPO 期望過高 | 部分反共識 |
| 銅纜連接器需求 | 因 CPO 延遲受益，需求窗口延長至 2028+ | 銅纜視為 CPO 的短期過渡，快速消亡 | ✅ 反共識 |
| Vertiv / 機架電源 | 800VDC 延遲對其中性，+400VDC 仍推進 | 市場視 Vertiv 為 800VDC 主要受益者 | 中性修正 |

**偏好排序**：銅纜（APH > SMTC > MTSI）> 灰色空間電力設備（FPS、Legrand、Schneider、ABB）> 電力機架（中性：Vertiv、Delta、Lite-On）> Scale-out CPO（短期負向：LITE、COHR 等）

**零件/個股偏好**：
- 正向：APH（Amphenol）、SMTC（Semtech）、MTSI（Macom）、Forgent Power Solutions、Legrand、Schneider、ABB
- 長期正向（但短期時間線往後）：Lumentum（LITE）、Coherent（COHR）、Hino（HNMU）、AAOI
- 短期負向：Lummentum（近期）、Himax、Navitas、Wolfspeed

---

## 一、800VDC 路線圖：±400VDC 仍如期，800VDC 延至 2028+

### 核心觀點

Nvidia 的原生單端 800VDC 設計（為 Rubin 世代設計）出貨量推遲至 2028+，主要原因是業界 channel 反映超大規模資料中心對 Rubin 世代並不需要 800VDC——他們認為在 350-450V 接收電力、再升至 800VDC 餵入 compute tray 的方式效率低，更傾向在更高電壓饋電後再降壓至 compute tray。

Rubin Ultra/Kyber 設計仍可能採用 800VDC，但目前只有 Nvidia 自身設計方案對此有明確需求。

**+400VDC 進展**：
- +400VDC 機架電力架構按計畫於 2H26 推進
- 超大規模自研 ASIC（Trainium、Google TPU）部署維持 +400VDC 架構
- 800VDC hyperscaler sidecar 訂單預計年底落地，量產推至 2027 Q1

### 供應鏈讀穿

| 類別 | 代表公司 | 觀點 | 理由 |
|---|---|---|---|
| 電力機架供應商 | Vertiv（VRT）、Delta（2308 TT）、Lite-On（2301 TT） | 中性 | 800VDC/單端架構差異對這些公司中性，+400VDC 仍推進 |
| 灰色空間電力設備 | FPS、Legrand（LR FP）、Schneider（SU FP）、ABB（ABBN SW） | 正向 | 800VDC 延遲延長灰色空間電力設備的成長跑道 |
| 板卡 VRM/電源半導體 | Murata（6981 JP）、SEMCO（009150 KS）、Yageo（2327 TT）、FOX GR（6752 JP）、Infineon（IFX GR）等 | 中性偏正 | Board/compute 層級電源鏈不受匯流排電壓影響，4.8V→sub-1V 轉換邏輯不變 |
| 寬帶隙 pure-play | Wolfspeed（WOLF）、Navitas（NVTS） | 負向 | 寬帶隙應用假設 +400VDC 機架廣泛部署，800VDC 延遲不利近期拉貨 |

---

## 二、CPO：物理與成本比預期更具挑戰性

### Scale-out CPO（Networking 用）

Scale-out CPO 量產時間線大幅延後，2029 才有實質規模。核心瓶頸是良率物理限制：

- **Nvidia Spectrum X ASIC** 每個 ASIC 有 **32 個 COUPE 插入點**；以 95% 系統級 attach yield（Street 假設），32 個 COUPE 全部合格的機率約 18%，使整模組良率極低。
- **Nvidia Quantum X3450**（IB CPO）：每模組僅 **3 個 COUPE**，缺陷模組可被篩選，良率狀況相對可管理。
- 整體 Scale-out CPO 量產最可能的進入點是 2029 年，SemiAnalysis 一貫維持此觀點（2025/4 即持此立場）。

### Scale-up CPO（自研 ASIC 用）

- Broadcom、Amazon、Google 等自研 ASIC 的 CPO 部署仍在進行，為 **in-house** 努力，與第三方/公開市場供應鏈不同。
- 這個部分會從 2029 年開始出現有意義的 transceiver vendor 商機，但規模相對有限，且主要受益者可能是整合式光收發器廠而非分立元件供應商。

### 良率機制補充

| 場景 | COUPE 數量/模組 | 良率壓力 |
|---|---|---|
| Spectrum X ASIC | 32 | 極高——整模組良率 ~18%（95%^32） |
| Quantum X3450 (IB) | 3 | 可管理——缺陷模組可篩選 |
| Hyperscaler Scale-up（自研） | 少量 | 可接受——in-house 良率控制 |

> **洞察一**：市場混淆 Scale-up（hyperscaler 自研 ASIC in-house CPO）與 Scale-out（開放市場 Networking CPO）的時間線，導致對 Lumentum、Coherent 等公司 2027-28 的收入預估系統性過高。核心差異在 32 vs 3 個 COUPE 的物理良率限制。

> **值得驗證**：95% attach yield 假設是否為業界公認數字。若實際 yield 進步至 99%，Spectrum X 整模組良率將從 ~18% 升至 ~72%，時間線預測將大幅改變。

---

## 三、定位分析：近期贏家成為輸家

本報告最重要的 investment timing 觀點：CPO 和 800VDC 概念股定位已極度擁擠（高點、高動能、高風險承受度）。這種不對稱性使得：當最延伸、最多頭、風險容忍度最高的部位得到負面確認時，下行幅度遠大於上行幅度。

**Computex 2026 後觀察（SemiAnalysis 走訪後更新）**：
- 對銅纜正向程度**增加**：APH、SMTC、MACOM（因 CPO 延遲使銅纜需求窗口延長）
- 對以下**正向程度降低**（Computex 後增量負向）：Lummentum、Himax、Navitas、Wolfspeed
- 對 CPO 測試主題**持續正向**：Lumentum（LITE）、Coherent（COHR）、Hino（HNMU）、AAOI，但承認 2027 Volume 數字過高

> **洞察二**：800VDC 延遲對 Vertiv 影響不如市場恐懼的大（中性），因為 +400VDC 架構仍按計畫推進，且 Vertiv 在 800VDC 延遲的環境下因灰色空間電力設備需求延伸反而受益。真正受傷的是以「800VDC 2026 量產」為核心假設的寬帶隙半導體廠商。

---

## 相關個股清單

| 類別 | 公司 | Ticker | 觀點 | 備註 |
|---|---|---|---|---|
| 銅纜連接器 | Amphenol | APH | 正向 ↑ | CPO 延遲使銅纜窗口延長 |
| 銅纜連接器 | Semtech | SMTC | 正向 ↑ | 同上 |
| 銅纜連接器 | Macom | MTSI | 正向 ↑ | 同上 |
| 電力機架 | Vertiv | VRT | 中性 | 800VDC 延遲影響中性，+400VDC 仍進行 |
| 電力機架 | 台達電 | 2308 TT | 中性 | 同上 |
| 電力機架 | 光寶科 | 2301 TT | 中性 | 同上 |
| 灰色空間電力 | Forgent Power Solutions | FPS | 正向 | 800VDC 延遲受益 |
| 灰色空間電力 | Legrand | LR FP | 正向 | 同上 |
| 灰色空間電力 | Schneider Electric | SU FP | 正向 | 同上 |
| 灰色空間電力 | ABB | ABBN SW | 正向 | 同上 |
| CPO 測試（長期） | Lumentum | LITE | 長期正向，短期負向 | Scale-out 量產推遲至 2029+ |
| CPO 測試（長期） | Coherent | COHR | 長期正向 | 同上 |
| CPO 測試（長期） | Applied Optoelectronics | AAOI | 長期正向 | 同上 |
| 寬帶隙半導體 | Wolfspeed | WOLF | 負向 ↓ | 800VDC 延遲直接衝擊假設 |
| 寬帶隙半導體 | Navitas | NVTS | 負向 ↓ | 同上 |
| 顯示 IC | Himax | HIMX | 負向 ↓ | Computex 後 SemiAnalysis 觀點轉負 |
| 板卡電源 | Murata | 6981 JP | 中性偏正 | Board-level 需求不受匯流排電壓影響 |
| 被動元件 | Yageo | 2327 TT | 中性偏正 | 同上 |

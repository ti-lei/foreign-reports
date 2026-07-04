---
modified: 2026-06-02
type: 產業報告
broker: HSBC
date: 2026-06-02
sectors: [AI伺服器]
---
# HSBC｜韓國科技巡迴：AI 供應鏈高速成長，Physical AI 等待轉折

**券商**：HSBC  
**分析師**：Ricky Seo（Head of Korea Research）、Han Kil Chang  
**日期**：2026-06-02  
**主題**：Korea tech tour – booming agentic AI supply chain while physical AI waits in the wings  
**評級**：N/A（個股評等見下）  
<a href="/dl?g=產業&b=HSBC&d=20260602&h=Korea-AI-Supply-Chain">📎 下載 PDF</a>

> **注意**：本報告為 HSBC，目前無對應 Exhibit 裁切工具，圖片未裁切。以下分析基於文字層資料。

---

## HSBC 完整投資邏輯鏈

| 論點層次 | 資料來源 | 內容 |
|---|---|---|
| AI 算力需求確認 | Exhibit 12/20/21 | AI server +28% YoY 2026E；US CSP capex +70% YoY = US\$738bn（含中國 CSP） |
| Memory 結構性成長 | Exhibit 13/17/18 | HBM GB200→Rubin Ultra 增量 +256%（80→1,024GB）；HBM 市場規模 2027E US\$163bn |
| FC-BGA 供不應求 | Exhibit 24/25 | 高端 FC-BGA 需求持續超過供給；LTA + 共投資需求上升；多年成長週期啟動 |
| 半導體設備/材料機會 | Exhibit 26/27/28 | DRAM capex +67% YoY 2026E；1cnm 達 42% total DRAM by 2027；EO Technics、HPSP、Park Systems、Hansol Chemical 各有成長催化劑 |
| 估值偏低 | Exhibit 1/32/33 | Samsung 26E P/E 8.4x（vs. 歷史高點 2.9x P/B 目標），EO Technics 47.5x 但 EPS +104% YoY |
| **結論** | 封面 | **偏好 Samsung（記憶體技術差距縮小）+ EO Technics（雷射設備多元應用擴張）** |

> **報告最大邏輯缺口**：Physical AI（機器人）分析較簡略，僅提及「IT hardware is starting to encompass the robotic momentum」，缺乏具體數字支撐。

---

## 報告核心觀點

| 主題 | HSBC 觀點 | 市場共識 | 是否 Contra-Consensus |
|---|---|---|---|
| HBM 成長 | 2027E 市場達 US\$163bn，CAGR 117% 2022-2027；HBM3e 價格將上漲 | 市場看多 HBM | 否（方向一致，但規模更激進） |
| Samsung vs. SK Hynix | 偏好 Samsung（HBM4 + commodity DRAM 技術差距縮小） | 多數偏好 SK Hynix | Yes（逆市偏好） |
| Agentic AI server 需求 | CPU 客戶成為需求新動能（x86 + ARM），server +20% YoY 2026E | 市場亦看好 | 否 |
| FC-BGA | 高端需求跑贏供給，LTA 趨勢加速，玻璃基板導入進行中 | 市場樂觀 | 否 |
| 半導體設備/材料 | EO Technics 雷射全切取代機械切割，應用擴展 HBM + PCB | 市場較低估 | 稍偏 contra-consensus |

**偏好排序**：Samsung Electronics > EO Technics > HPSP > Park Systems > Hansol Chemical  
**零件偏好**：記憶體（HBM + DRAM/NAND）> FC-BGA 基板 > 半導體設備材料（EO Technics、HPSP）

---

## 總體數據彙整（取自 Exhibit 文字層）

### AI 算力 & CSP 投資

| 指標 | 2024 | 2025E | 2026E | 2027E |
|---|---|---|---|---|
| US CSP capex（bn USD，Exhibit 20） | — | — | 738（+70% YoY） | — |
| AI server 出貨量（mn units，Exhibit 12） | 1.5 | 2.4 | 3.1 | — |
| 整體 server 出貨量 YoY（Exhibit 10） | -9% | 11% | 20% | 21% |
| Neo-CSP capex（bn USD，Exhibit 23） | — | — | +95% YoY | -8% YoY |

### HBM 內容量提升（取自 Exhibit 13）

| 平台 | HBM per GPU（GB） | vs. 前代 |
|---|---|---|
| DGX H100 | 80 | — |
| GB200 NVL72 | 192 | +140% |
| GB300 NVL72 | 288 | +50% |
| Rubin NVL72（Vera Rubin） | 288 | 持平 |
| Rubin Ultra NVL576 | 1,024 | +256% |

### DRAM 內容量 & HBM 市場（取自 Exhibit 8/14/17/18）

| 指標 | 數據 |
|---|---|
| Vera Rubin SO-CAMM2 需求 2026E | 佔全球 DRAM 需求 6% |
| Vera Rubin SO-CAMM2 需求 2027E | 佔全球 DRAM 需求 10% |
| DRAM server content 2026-27E YoY | +17% |
| HBM 市場規模 2025 | US\$40bn |
| HBM 市場規模 2026E | US\$78bn |
| HBM 市場規模 2027E | US\$163bn（CAGR 117% 2022-2027E） |
| HBM bit demand CAGR 2024-27E | 67% |

### GB300 NVL72 BOM（取自 Exhibit 15，US\$2.9M 總計）

| 零件 | 佔比 |
|---|---|
| GPU（不含 HBM） | 74% |
| HBM | 10% |
| DRAM | 8% |
| NVLink | 2% |
| 散熱系統 | 2% |
| NAND | 0.4% |
| CPU | 1% |
| 電源 | 1% |
| 其他 | 1% |

> **洞察一**：GB300 NVL72 系統成本 US\$2.9M 中 HBM 佔 10% = US\$290K；Rubin Ultra NVL576 的 HBM 含量達到 GB200 的 5.3x（1,024GB vs. 192GB），若 per-GB 價格持穩，HBM 零件成本絕對值將大幅躍升。

### 記憶體廠商 Capex（取自 Exhibit 26）

| 年份 | DRAM capex（bn USD） | YoY |
|---|---|---|
| 2023 | 22 | — |
| 2024 | 36 | +64% |
| 2025 | 52 | +44% |
| 2026E | 87 | +67% |
| 2027E | 107 | +23% |
| 2028E | 117 | +10% |

### 1cnm 製程滲透（取自 Exhibit 29）

| 年份 | 1cnm 佔總 DRAM 產能 |
|---|---|
| 2024 | 0% |
| 2025 | 0% |
| 2026E | 8% |
| 2027E | 28% |
| 2028E（隱含） | 42% |

---

## 韓國科技巡迴個股重點（2026-05-27至29）

### Samsung Electronics (005930.KS; Buy, TP KRW450,000)

- CSP capex 持續飆升，需求動能從 GPU 客戶轉向 CPU 客戶（Agentic AI 更易管理 AI agents）
- HBM3e 價格預計上漲，縮短與商用 DRAM 的差距
- x86 + ARM CPU 強勁需求帶動 server 和 mobile DRAM 漲價
- 2H26 將享受產量增加 + 毛利率擴張；更多 LTA 協議穩定獲利趨勢
- **HSBC 偏好 Samsung 的原因**：預計在 HBM4 及商用 DRAM 縮短與競爭對手的技術差距

### SK Hynix (000660.KS; Buy, TP KRW2,900,000)

- 同 Samsung 受惠記憶體上行週期
- 2026E P/E 8.2x，ROE 91%；2027E EPS +47% YoY

### EO Technics (039030.KQ; Buy, TP KRW550,000)

- 雷射全切（laser full-cut）開始取代 HBM 中的機械切割
- PCB 鑽孔業務快速拉升
- 與主要晶圓代工廠共同開發 debonder
- **HSBC 偏好 EO Technics 的原因**：雷射設備需求持續強勁，應用擴展（前端 + 後端 + 新客戶）

### HPSP (403870.KQ; Buy, TP KRW65,000)

- 3Q26 預期加入新 DRAM 客戶
- NAND 客戶接觸進行中
- 26E P/E 28.3x，EPS +83% YoY

### Park Systems (140860.KQ; Buy, TP KRW360,000)

- AFM（原子力顯微鏡）在 hybrid bonding 及先進封裝量測獲得牽引力
- 26E P/E 35.4x，EPS +59% YoY

### Hansol Chemical (014680.KS; Buy, TP KRW400,000)

- 前驅體技術持續進展
- 2026 年底鉿基（hafnium-based）高 K 前驅體專利到期 → 潛在市場進入機會
- 26E P/E 14.6x（最低估值），目標價 54% 上漲空間

### FC-BGA 基板廠商（訪談摘要）

- 高端 FC-BGA 需求持續超過供給，稼動率高，交期延長
- 客戶主動尋求 LTA 及共投資以確保產能
- 結構性驅動力：更大/更多層基板 body、矽電容嵌入、玻璃核心基板（glass core substrates）
- 多年成長故事確立

---

## 相關個股清單

| 類別 | 公司 | Ticker | 評等 | 目標價 | 備註 |
|---|---|---|---|---|---|
| 記憶體 | Samsung Electronics | 005930.KS | Buy | KRW450,000 | HBM4 + commodity 技術差距縮小 |
| 記憶體 | SK Hynix | 000660.KS | Buy | KRW2,900,000 | HBM 龍頭，ROE 91% 2026E |
| 雷射設備 | EO Technics | 039030.KQ | Buy | KRW550,000 | 雷射全切取代機械切割，多應用擴展 |
| 高壓退火設備 | HPSP | 403870.KQ | Buy | KRW65,000 | 新 DRAM 客戶 3Q26；NAND 接觸中 |
| AFM 量測設備 | Park Systems | 140860.KQ | Buy | KRW360,000 | Hybrid bonding 量測牽引力 |
| 半導體材料 | Hansol Chemical | 014680.KS | Buy | KRW400,000 | 最低估值；高 K 前驅體專利機會 |
| 記憶體（美國） | Micron | MU.US | Buy | USD1,100 | 26E P/E 15.7x；EPS +715% YoY |
| 晶圓代工 | TSMC | 2330.TW | Buy | TWD2,800 | 26E P/E 24.3x |
| AI 加速器 | NVIDIA | NVDA.US | Buy | USD325 | 26E P/E 24.2x |

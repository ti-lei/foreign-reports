---
modified: 2026-07-22
type: 產業報告
broker: Jefferies
date: 2026-07-21
sectors: [半導體封測, 光通訊-CPO]
---

# Jefferies｜半導體後端製程與封裝趨勢：CPO 非銅換光，而是系統架構革命

**券商**：Jefferies Japan Company Limited  
**分析師**：Masahiro Nakanomyo、Hisako Furusumi  
**嘉賓**：Professor Fumihiro Inoue（橫濱國立大學，日本頂尖先進封裝研究者）  
**日期**：2026-07-21  
**主題**：半導體後端製程與封裝技術趨勢研討會紀要  
**評級**：無個股評等（研討會紀要）  
<a href="https://layx.uk/dl?g=產業&b=Jefferies&d=20260721&h=Japan-Tech-BE-PKG">📎 下載 PDF</a>

---

## 報告總結

Jefferies 邀請橫濱國立大學 Inoue 教授就 AI 時代封裝技術趨勢進行研討。核心觀點：AI 系統競爭正從「計算速度」轉向「通訊系統」，CPO 的真正意義不是「以光換銅」而是重新定義 I/O 的位置與功耗結構；Chiplets 的商業化瓶頸已從技術轉向「標準化 / 生態系 / 量產壁壘」；Huawei 提出的 Tau Scaling Law 代表中國在 EUV 受限下的第三條路（系統維度而非製程節點）。日本材料廠商全球頂尖，但系統整合與量產能力明顯落後，须建立海外（尤其美國）後端製程共創基地。

---

## 完整投資邏輯鏈

| 論點層次 | 內容 |
|---|---|
| AI 系統架構轉型 | AI 從 CPU 中心→加速器+HBM 配置，Chiplets 成為核心因應方式 |
| 雲端 AI 瓶頸 | GPU 算力每年穩增，但 GPU 間/GPU-HBM/機架間互連成為瓶頸 |
| CPO 真實意義 | 不是「銅換光」，而是減少 SerDes/I/O/re-timer 功耗；重新定義 I/O 在系統架構中的角色 |
| NVIDIA/TSMC 壁壘 | 軟生態（CUDA）+ 先進製程+封裝（CoWoS/COUPE），其他難以超越 |
| Chiplets 商業壁壘 | 標準化不互通、EDA 未成熟、責任歸屬不清、量產壁壘高（技術優先不等於商業成功） |
| Edge AI 崛起 | 雲端 AI 的電力/安全/延遲限制驅動 Edge AI；2025 AI 半導體 TAM US\$236bn，Edge AI 佔 US\$80bn |
| 封裝技術轉折點 | 玻璃基板+有機 RDL 挑戰矽中介板（2030 後影響 carrier glass/厚膜光阻市場） |
| 日本缺口 | 材料全球頂尖，但系統整合/量產弱；須建立美國後端製程協作基地 |
| Huawei Tau Scaling | EUV 受限下的新 Scaling 策略：以封裝維度（3D 堆疊）補製程節點限制 |
| **結論** | **關注：TSMC CoWoS/COUPE、CPO 生態（Broadcom/Marvell/Ayar Labs）、Resonac 玻璃基板協作、Qualcomm HBC Gen1** |

---

## 報告核心觀點

| 主題 | Inoue 教授觀點 | 業界普遍認知 | 是否 Contra-Consensus |
|---|---|---|---|
| CPO 定義 | 功耗優化（SerDes/I/O），非速度提升 | 多數視為「銅換光」提速 | 是，重新框架 |
| Chiplets 瓶頸 | 已進入「技術優先不等於商業成功」時代，規則/生態/夥伴關係決定成敗 | 多數聚焦技術規格 | 是 |
| Edge AI vs Cloud AI | 非替代關係，而是互補的必要架構 | 多視 Edge AI 為 Cloud AI 次選 | 是 |
| 矽中介板地位 | 面臨有機 RDL + 玻璃基板競爭，長期有被淡化風險（2030 後） | 矽中介板仍是主流 | 是，較長線看法 |
| 日本競爭力 | 材料全球頂尖，但系統整合弱，須移師美國共創 | 普遍高估日本整合能力 | 是 |

---

## 關鍵技術觀察

### CPO（共封裝光學）的正確框架
- 錯誤框架：「光比銅快，所以用光換銅」
- 正確框架：功耗的大頭不在信號傳輸速度，而在 SerDes、I/O、re-timer 組件的轉換功耗
- CPO 的核心價值：把 I/O 搬進封裝內，大幅降低這些組件的功耗
- 未來 I/O 驅動時代的關注標的：Broadcom、Marvell、Ayar Labs

### TSMC COUPE（Co-Packaged Optics Using PERC/SoIC Embedding）
- 使用 TSMC-SoIC bonding 連接 EIC（電子集成電路）和 PIC（光子集成電路）
- 2025 ECTC 成果：chip-chip 界面低阻抗、bonding 密度 ≥16x、雜散電容 -85%
- 同功耗下速度 +170% 或降低功耗 40%

### Huawei Tau Scaling Law（ISCAS2026）
- 背景：EUV 受限下，製程節點演進受阻
- 內容：提出超越摩爾定律的新 Scaling 策略，以封裝/系統維度的 3D 堆疊替代製程節點躍升
- 意義：為中國晶片生態（無先進製程）提供合理的技術路線圖，與東方算象 DF1000 的 3D 堆疊路線相互印證

### Qualcomm HBC Gen1（AI250 推論晶片）
- 替代 CoWoS：在 2D 有機基板上做多層結構，不使用 TSMC CoWoS
- 有效記憶體頻寬：133TB/s（不靠 HBM 支援的頻寬規格）
- 相較 AI200 LPDDR5：有效頻寬 ×18，代表一種「無 HBM 的高頻寬推論架構」

### AI 半導體市場規模

| 類別 | 2025 | 2028E |
|---|---|---|
| 雲端 AI | US\$160bn | US\$250bn |
| Edge AI | US\$80bn | US\$120bn |
| **合計** | **US\$236bn** | **US\$371bn** |

*來源：VLSI 預測，Inoue 教授引用*

> **洞察一**：Edge AI 2025-2028 CAGR 14%（US\$80bn→US\$120bn），低於雲端 AI 16%（US\$160bn→US\$250bn）。但 Edge AI 的記憶體需求不同——DDR x 3D 堆疊為主（非 HBM），意味著記憶體供應鏈需要對這兩個市場分別配置，美光/SK 海力士的 LPDDR5 和 3D DRAM 比重將愈來愈重要。
>
> **值得驗證**：矽中介板替代（玻璃基板/有機 RDL）時間表落在 2030 年後，影響 carrier glass、TMV resist 等材料市場。但有機 RDL 的 I/O 密度是否真能趕上矽中介板——這是 Inoue 教授的研判，若有機材料推進速度不及預期，矽中介板的地位可延長至 2030 後。

---

## 相關個股清單

| 類別 | 公司 | 備註 |
|---|---|---|
| 先進封裝龍頭 | TSMC（2330）| CoWoS、SoIC、COUPE；CPO 整合的核心節點 |
| CPO 晶片 | Broadcom、Marvell、Ayar Labs | I/O 驅動時代的關鍵技術供應商 |
| 玻璃基板/材料 | Resonac（日本）| US-JOINT + JOINT3 consortia；面板級有機中介板佈局 |
| 推論晶片 | Qualcomm | HBC Gen1 替代 CoWoS 的低功耗推論架構 |
| 日本材料廠 | — | 材料具競爭力，但需建立美國後端製程整合能力 |

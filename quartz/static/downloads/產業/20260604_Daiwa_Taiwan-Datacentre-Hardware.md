---
modified: 2026-06-04
type: 產業報告
broker: Daiwa
date: 2026-06-04
sectors: [AI伺服器]
---
# Daiwa｜Taiwan Datacentre Hardware

**券商**：Daiwa  
**分析師**：Sheng Cheng、Allan Wang  
**日期**：2026-06-04  
**主題**：Taiwan Datacentre Hardware — Key Takeaways from Computex 2026  
**評級**：Positive  
<a href="https://layx.uk/dl?g=產業&b=Daiwa&d=20260604&h=Taiwan-Datacentre-Hardware">📎 下載 PDF</a>

---

## Daiwa 完整投資邏輯鏈

| 論點層次 | 公司 | 內容 |
|---|---|---|
| 技術轉型信號 | 全產業 | Computex 2026 重心：CPU 在 agentic AI 生態的協調角色、CPO 架構、CPC 連接器、HVDC 800VDC、微電網；多數廠商展示 Vera Rubin 供應鏈試產品 |
| 需求結構確認 | Aspeed | 2026 BMC 出貨量估 850 萬顆；2027 傳統伺服器 BMC +30% YoY，CPU 伺服器受惠 agentic AI |
| 新產品帶動毛利提升 | Chenbro | 機架方案 GM 預估達 25-30%（前估 15-20%），帶動長期 GM 指引 28-29%（↑ 從 25-26%） |
| 連接器高速升級機會 | Hon Hai/FIT | CPC 224 Gbps/lane、12.8 Tbps/connector；Paladin 連接器取代 Amphenol flyover cable，Kyber 架構下新一代方案開發中 |
| **結論** | 偏好排序 | **維持 Buy：Aspeed、Lotes、Wiwynn、Delta、TUC、EMC、Accton** |

---

## 報告核心觀點

| 主題              | Daiwa 觀點                                        | 市場共識               | 是否 Contra-Consensus |
| --------------- | ----------------------------------------------- | ------------------ | ------------------- |
| Vera Rubin 量產時程 | 4Q26 開始量產；目前展示為試產                               | 市場預期 2H26          | 一致                  |
| Chenbro GM 提升   | 機架客製化程度高，GM 可達 25-30%（前估 15-20%）                | 市場尚未充分反映           | 是 — 毛利率上修幅度明顯       |
| Aspeed BMC 成長   | 2027 傳統伺服器 BMC +30% YoY，agentic AI 帶動 CPU 伺服器需求 | 多數關注 AI server BMC | 補充觀點：傳統伺服器復甦亦為驅動力   |
| CPO 商業化時程       | Wiwynn CPO rack 仍為 pilot 階段，合作在開發中              | 市場對 CPO 時程較樂觀      | 是 — Daiwa 確認商業化仍早   |
| Delta HVDC 策略   | 800VDC 為核心；SST/SOFC 微電網為 1-2 年以上的長期機會           | 市場聚焦近期 HVDC 訂單     | 一致，並強調微電網非短期催化劑     |

**偏好排序**：Aspeed > Lotes > Wiwynn > Delta > TUC > EMC > Accton  
**技術主題偏好**：CPU 投資主題 + 高速傳輸規格升級（CPC、UALink、高速連接器）

---

## 個股重點摘要

### Wiwynn (6669)｜Buy [1]｜TWD5,570

- **CPO computing rack**（與 Ayar Labs + GUC 合作）：光引擎為 Ayar Labs（ELSFP 技術），XPU 為 GUC；目前仍為 pilot 階段，Wiwynn 聚焦 computing tray，scale-out/up switch rack 由其他夥伴提供
- **AMD Helios 平台**：18 個 computing unit，每 rack 4 GPU + 1 CPU；MI450 GPU 佈局底部以優化連接速度；scale-up 用 UALink，scale-out 用 Ethernet（UALink over Ethernet）

### Aspeed (5274)｜Buy [1]｜TWD18,265

- 從純 BMC 供應商進化為平台管理與基礎設施控制：BMC + SMC + I/O expansion + 安全 IC
- RISC-V 架構採用 Caliptra root-of-trust，將推廣至多數產品線
- **AST1840**：AST1800 系列新一代，FPGA 改由 Lattice Semiconductor 外包，重新設計 SoC
- 2026 BMC 出貨量預估約 850 萬顆；第二 OSAT 夥伴認證完成，4Q26 起有望再次步升
- T-glass → E-glass substrate 轉型順利，初批 AST2700 為混合版本，長期只保留 E-glass

### Delta Electronics (2308)｜Buy [1]｜TWD2,425

- **800VDC 為核心**：800VDC in-row power system（98%+ 效率，480kW BBU）、90kW DC-DC shelf、110kW AC-DC shelf、12kW 配電板、DC-DC 轉換模組
- **微電網（Micro-grid）**：整合再生能源 + 儲能 + 燃料電池；SST 直接轉換中壓 AC → 800VDC，SOFC 60% 發電效率、24h 穩定供電；Daiwa 明確指出 SST/SOFC 為 1-2 年以上長期機會，近期焦點仍在 800VDC 設備

### Hon Hai (2317)｜Buy [1]｜TWD293

- 展示 VR200 computing tray 與 switch、HGX NVL8（8 GPU + dual x86 CPU + 液冷，2U/45mm 緊湊設計）
- **CPC（Co-Packaging Connector）**：224 Gbps/lane，12.8 Tbps 彙整吞吐量；至少兩家客戶正在評估導入；用於 Spectrum-X 等 switch
- **FIT Paladin 連接器**：用於 computing tray mid-plane，預計取代 Amphenol flyover cable；Kyber 架構下新一代連接器方案持續開發（mid-plane 作為 computing tray 與 switch tray 的互連）

### Chenbro (8210)｜Buy [1]｜TWD1,420

- NVIDIA RVL（Reference Vendor List）廠商，展示 VR NVL72 相容機架方案
- 多個新機架專案：降噪機箱、NVIDIA/AMD IT rack、液冷 rack（L2L/L2A CDU）、switch rack
- **GM 大幅上調**：機架方案客製化程度高，GM 預估 25-30%（前估 15-20%）→ 長期 GM 指引 28-29%（↑ 從 25-26%）
- 強調縮短 time-to-market、跨領域工程團隊（軟體/工業設計/機械），定位為客戶最快的 co-design 夥伴

---

## 相關個股清單

| 類別 | 公司 | Ticker | 評等 | 備註 |
|---|---|---|---|---|
| 主要 Buy | Aspeed | 5274 TT | Buy [1] | BMC + 安全 IC，2027 傳統伺服器復甦 |
| 主要 Buy | Lotes | 3533 TT | Buy [1] | 高速連接器，TWD2,400 |
| 主要 Buy | Wiwynn | 6669 TT | Buy [1] | CPO + AMD Helios，TWD5,570 |
| 主要 Buy | Delta Electronics | 2308 TT | Buy [1] | 800VDC + 微電網，TWD2,425 |
| 主要 Buy | TUC | 6274 TT | Buy [1] | TWD1,695 |
| 主要 Buy | EMC | 2383 TT | Buy [1] | TWD4,830 |
| 主要 Buy | Accton | 2345 TT | Buy [1] | TWD2,510 |
| 其他 | Hon Hai | 2317 TT | Buy [1] | CPC + Paladin connector，TWD293 |
| 其他 | Chenbro | 8210 TT | Buy [1] | 機架 GM 上修至 28-29%，TWD1,420 |
| Hold | GUC | 3443 TT | Hold [3] | CPO XPU 合作夥伴，TWD4,400 |

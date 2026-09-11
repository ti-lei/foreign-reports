---
modified: 2026-09-11
type: 產業報告
broker: Morgan Stanley
date: 2026-09-06
sectors: [光通訊-CPO, 半導體設備]
---
# Morgan Stanley｜SEMICON Taiwan 2026 關鍵觀察：We Need More — CPO 測試、HBM 效率、Panel-Level 封裝

**券商**：Morgan Stanley  
**分析師**：Charlie Chan、Daniel Yen CFA、Daisy Dai CFA、Tiffany Yeh、Lucas Wang、Henry Zhao  
**日期**：2026-09-06  
**主題**：SEMICON Taiwan 2026 展覽三大主線：(1) SiPh/CPO 對準與測試仍是瓶頸；(2) HBM4 記憶體效率優化取代單純增加密度；(3) Intel EMIB-T + 台積電 3.5D CoWoS 協同推進面板級封裝  
**評級**：Industry View — Attractive  
<a href="https://layx.uk/dl?g=產業&b=MS&d=20260906&h=Semicon-Taiwan-Takeaways">📎 下載 PDF</a>

---

## 報告總結

MS 拜訪 SEMICON Taiwan 2026，核心結論：台灣仍是全球 AI 基礎設施建設的瓶頸，且供應端都在加速資本支出。TSMC 副 Co-COO 侯先生表示「從未見過需求如此快速且頻繁地變化」，而設備供應仍不夠；MediaTek 蔡執行長則公開要求 ASE、台積電、欣興提供更多產能支持。三大技術主線：CPO 測試尚未有行業標準（光準直精度是關鍵瓶頸）；記憶體優化從「加密度」轉向「提升帶寬效率」（Rubin Ultra 改用 8-Hi HBM4 + HBM4e 軟優化）；面板級封裝（EMIB-T）在 2028 年 MediaTek HumuFish 才會進入量產。

MS 維持 OW：台積電（Top Pick）、聯發科（Top Pick）、鴻勁、高明鐵（4573，光準直）、旺矽（6223）、穎崴（6515）。

---

## Morgan Stanley 完整投資邏輯鏈

| 論點層次 | 內容 |
|---|---|
| 需求仍強 | TSMC/MediaTek 管理層確認 AI 半導體需求遠超供應端能力；2027 前持續欠供 |
| CPO 測試瓶頸浮現 | CPO 規模量產的測試方法尚未定義；光準直速度/精度是吞吐量關鍵；多家廠商爭取主要客戶認證中 |
| 高明鐵（4573）直接受益 | GMT Hexapod 高精度平台直接用於 SiPh/CPO 對準；SEMICON 展示獲關注 |
| 記憶體策略轉向效率 | Rubin Ultra 可能改用 8-Hi HBM4（較 Rubin 12-Hi 少 1/3）；透過增加 base-die + HBM4e 遷移補足帶寬 |
| EMIB-T 是 2028 年故事 | Toray 供應 TCB bonder；良率問題在基板客戶端（矽橋鍵合工藝）；Intel 提供技術支援 |
| **結論** | **OW TSMC（市場主導）、MediaTek（ASIC 設計服務頭部）、鴻勁/高明鐵/旺矽/穎崴（CPO 相關）** |

> **報告最大邏輯缺口**：CPO 測試何時真正標準化——報告並未提供時間表，只說「仍在爭取認證」。若 2027 年 CPO 量產時測試仍是瓶頸，則 CPO 相關股票（包括高明鐵）的業績爬升期可能後移。

---

## 報告核心觀點

| 主題 | MS 觀點 | 市場共識 | 是否 Contra-Consensus |
|---|---|---|---|
| AI 半導體需求 | 持續強勁；供應鏈瓶頸是主要限制（非需求） | 市場擔憂 AI capex 能否持續 | △ MS 偏積極，但管理層直接確認支撐論點 |
| CPO 測試成熟度 | 尚未標準化；2026 年仍處爭取客戶認證階段 | 市場可能對 CPO 量產時間較樂觀 | ✅ Contra：MS 點出現實困境 |
| Rubin Ultra 記憶體配置 | 8-Hi HBM4（vs Rubin 12-Hi）；少 HBM 數量但帶寬維持 | 市場擔憂 HBM4 供需（少用有利供給緊張改善） | ✅ 與 Daniel Yen 記憶體研究一致 |
| EMIB-T 量產時程 | 2028 年（MediaTek HumuFish）；良率問題在基板對準工藝 | 市場原本預期更早 | ✅ MS 認為 2028 才是窗口 |

**個股偏好排序**：TSMC（晶圓代工壟斷）= MediaTek（ASIC 設計頭部）> 鴻勁（CoWoS）、高明鐵（CPO 對準）、旺矽（CoPoS）、穎崴（光插入）

---

## 主題一：SiPh/CPO 對準與測試——量產關鍵瓶頸

### CPO 測試現況

SEMICON Taiwan 展覽中，多家廠商展示了 CPO 測試解決方案，但 MS 的觀察是：
- CPO 測試方法仍未被行業明確定義（"testing is still not clearly defined"）
- 所有廠商都在爭取主要客戶認證，且各家解決方案不同
- **光準直的速度與精度**是吞吐量的核心挑戰，仍有改善空間

### 高明鐵（GMT，4573）產品展示

Exhibit 1（GMT 展品）：GMT（未覆蓋，4573 高明鐵）展示高精度六自由度平台（Hexapod Platform），用於 SiPh/CPO 光準直對準作業。六自由度精密調整機構是解決 CPO 量產測試精度問題的關鍵工具。

MS 在展覽中特別到訪：高明鐵（AllRing）、旺矽（MPI）、穎崴（WinWay），交叉確認 CoWoS、CoPoS 擴產計畫以及光插入技術進度。上述三家均維持 OW。

### Toyo（未覆蓋）光準直良率工具

Exhibit 2（Toyo 展品）：Toyo 的模組協助提升光準直良率，是光組裝製程中的補充方案。

---

## 主題二：記憶體效率優化——HBM4 路徑確認

### Rubin Ultra 記憶體配置調整

MS 供應鏈調查顯示：
- **Rubin Ultra CPU 極有可能改用 8-Hi HBM4**（vs Rubin 使用 12-Hi）
- HBM 顆數減少約 1/3，但藉以下方式補足帶寬：
  1. 增加 HBM4 base-die 數量
  2. 遷移至 HBM4e
  3. 軟體優化（最終 token 輸出帶寬足夠）

### Winbond（華邦電，2344）記憶體客製化

Exhibit 3（Winbond 展品）：Winbond 展示客製化記憶體解決方案——「從加密度轉向最大化現有記憶體資源使用效率」是整體市場主流技術趨勢，Winbond 的客製化記憶體對應這個需求方向。

### Phison（群聯，8299）AI NPU 晶片

Exhibit 4（Phison 展品）：Phison 展示 AI NPU 晶片——顯示台灣 IC 設計廠商在 AI 推論端的積極布局。

---

## 主題三：面板級封裝、Intel EMIB-T、TSMC 3.5D CoWoS

### Toray / Intel EMIB-T 進展

MS 拜訪 Toray（東麗，日本，Takato Watabe 覆蓋）展台，確認 EMIB-T 基板製造良率狀況：
- **問題不在工具精度或供應**——Toray 的 TCB bonder 供應沒問題
- 關鍵瓶頸在**基板客戶的工藝能力**：矽橋鍵合（silicon-bridge bonding）對準 PCB 的 know-how
- Intel 將提供技術支援
- **MS 預期 MediaTek TPU v9（HumuFish）在 2028 年獲得足夠的 EMIB-T 基板供應**

Exhibit 5（Toray 面板級封裝設備）：Toray 展示面板級封裝相關設備。  
Exhibit 6（Toray UC5000 bonder）：UC5000 bonder，MS 認為與 Intel EMIB-T 基板生產密切相關。

### 執行長論壇（CEO Forum）關鍵語錄

| 人物 | 公司 | 關鍵表述 |
|---|---|---|
| 侯副 Co-COO | 台積電（2330） | 「從未見過需求以如此高頻率變化，而 WFE 夥伴交機仍不夠快」 |
| 蔡執行長 | 聯發科（2454） | 公開要求 ASE、TSMC、欣興（3037）提供更多產能支持 |

---

## 相關個股清單

| 公司 | Ticker | 評等 | 核心角色 |
|---|---|---|---|
| 台積電（TSMC） | 2330.TW | OW | 先進晶圓代工壟斷；AI 半導體最大受益者 |
| 聯發科（MediaTek） | 2454.TW | OW（Top Pick） | ASIC 設計服務頭部；HumuFish EMIB-T 2028 量產 |
| 鴻勁精密（Hon Precision） | 7769.TW | OW | CoWoS 相關設備 |
| 高明鐵（AllRing / GMT） | 4573.TW | OW | SiPh/CPO 六自由度對準 Hexapod 平台 |
| 旺矽科技（MPI） | 6223.TW | OW | CoPoS 相關光插入技術 |
| 穎崴技術（WinWay） | 6515.TW | OW | 光插入（Optical Insertion）技術 |
| 欣興電子（Unimicron） | 3037.TW | 未提評等 | MediaTek 指名需求增產（PCB） |
| GMT（高明鐵，展覽） | 4573.TW | Not Covered | Hexapod 平台（光準直）在展覽中展示 |
| Toyo | 未覆蓋 | — | 光準直良率模組 |
| Toray | 日本股 | — | EMIB-T TCB bonder；MS 日本研究覆蓋 |
| 華邦電（Winbond） | 2344.TW | — | 客製化記憶體解決方案 |
| 群聯電子（Phison） | 8299.TW | — | AI NPU 晶片 |

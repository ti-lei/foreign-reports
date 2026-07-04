---
modified: 2026-06-07
type: 產業報告
broker: Morgan Stanley
date: 2026-06-07
sectors: [散熱]
---
# MS｜Computex 2026 Takeaways

**券商**：Morgan Stanley  
**分析師**：Howard Kao、Sharon Shih、Derrick Yang、Samantha Chen、Irene Yen、Vivi Huang  
**日期**：2026-06-07  
**主題**：Computex 2026 Takeaways — Vera Rubin POD 全套展示、800V DC、Liquid Cooling、RTX Spark  
**評級**：Greater China Technology Hardware：In-Line  
<a href="/dl?g=產業&b=MS&d=20260607&h=Computex-2026-Takeaways">📎 下載 PDF</a>

---

## MS 完整投資邏輯鏈

| 論點層次 | Exhibit | 內容 |
|---|---|---|
| 需求信號明確 | 封面文字 | Computex 參觀人數持續超預期，全球投資人飛赴台灣實地確認 AI 供應鏈進度 |
| 架構確立 | Exhibit 1-7 | Vera Rubin POD 全套展出：8 NVL72 + 1 Vera CPU rack + 5 Groq 3 LPX rack + 1 STX rack；鴻海 MP 3-4Q26 啟動 |
| 連接器/電源增值確認 | Exhibit 8-14 | FIT Paladin HD2 connector ASP US\$70-90+（高於前估），liquid-cooled busbar US\$3,000-4,000，FFQD US\$400-700/pc；下代 Voronoi 設計由 FIT 主導 |
| 電力升級時程 | Exhibit 19 | 800V DC power rack 3Q26 就緒（MS checks 確認 4Q26 量產），1.6MW power center 2Q27，4.8MW block 1Q28 |
| 液冷加速 | Exhibit 22-25 | Delta 3MW LTL In-Row CDU 展示；Vera Rubin Bianca board 液冷 3Q26 MP；每 GPU tray 冷卻模組含量 ~US\$2,500 |
| 新主題驗證（Kyber/RTX Spark）| 文字 | Voronoi connector 尚未定案，不影響 Rubin Ultra MP；RTX Spark 首年出貨 ~1M，US\$3K+ 價格阻礙大眾化 |
| **結論** | 封面 | **Vera Rubin 供應鏈時程確認；FIT 電源互連 ASP 上調為最大增量驚喜；Kyber/RTX Spark 非近期催化劑** |

> **報告最大邏輯缺口**：Microchannel Lid 量產時程未明確——MS 只說「需要時間」，未給出時間節點，其採用規模直接影響 Jentech（3653）2027E 估值。

---

## 報告核心觀點

| 主題 | MS 觀點 | 市場共識 | 是否 Contra-Consensus |
|---|---|---|---|
| Vera CPU rack MP | 鴻海 Brand Cheng 確認 4Q26 量產（L11） | 市場已預期 2H26 | 時程符合預期 |
| FIT Paladin HD2 connector ASP | US\$70-90+，遠高於前估 | 前估偏低 | Contra-Consensus，正面驚喜 |
| FIT Voronoi connector | 正在良率優化，設計未定稿；不影響 Rubin Ultra MP | 部分擔心 Kyber 延遲 | 緩解 Kyber 延遲疑慮 |
| 800V DC power rack | 3Q26 設計就緒、4Q26 量產在軌 | 市場擔心進度落後 | 確認時程 |
| RTX Spark 市場衝擊 | 首年 ~1M units（N1X），US\$3K+ 阻礙大眾化 | 部分樂觀預期顯著拉動 PC 換機 | 偏保守，Contra-Consensus |
| Microchannel Lid | 潛力明確但量產時程不確定（yield/leakage/reliability 待解） | 市場對 MCL 有不同預期 | 需更多時間 |

**偏好排序**：FIT（connector/busbar/QD ASP 確認上調）> Accton（光學開關 2027 初步貢獻）> Bizlink（shuffle box 2027 起）> Jentech（MCL 時程待確認）

---

## 一、Vera Rubin POD 架構確認

### Exhibit 1-4｜Vera CPU Compute Tray / Board / Rack

![Exhibit 1](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_01.png)
![Exhibit 2](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_02.png)
![Exhibit 3](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_03.png)
![Exhibit 4](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_04.png)

### 解讀摘要

Vera CPU rack 的層級結構從 Computex 展出的實機確認：2 個 Vera CPU → 1 個 MGX board → 4 個 board → 1 個 compute tray → 16/32 個 tray → 1 個 rack（air 128 CPU / liquid 256 CPU）。Exhibit 4 顯示三根並排展示的 rack（左 800 VDC Power Rack、中 BlueField-4 STX Storage Rack、右 Vera CPU Rack），實際驗證了 Vera Rubin POD 的整體佈局。鴻海工業互聯網董事長 Brand Cheng 在現場確認 L11 計劃 4Q26 啟動量產。

### 表格｜Vera Rubin POD 架構比例

| Rack 類型 | 每 8 個 NVL72 配備數量 | MP 時程 | 主要 OEM |
|---|---|---|---|
| Vera Rubin NVL72 | 8 | 量產中 | 鴻海、廣達等 |
| Vera CPU standalone rack | 1 | 4Q26 | 鴻海（L11） |
| Groq 3 LPX rack | 5 | 3Q26 | 鴻海（L10/L11） |
| BlueField-4 STX storage rack | 1 | 量產中 | 緯創/緯穎 |

---

### Exhibit 5｜Groq 3 LPX Compute Tray

![Exhibit 5](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_05.png)

### 解讀摘要

每個 LPX compute tray 內含：1 Intel CPU + 2 Altera FPGAs + 1 BF-4 module + 16 LPXs + 28 QDs（20 MQD04 + 4 MQDB + 4 UQD08）+ 52L (26+26) PCB。每 8 個 NVL72 rack 需配 5 個 Groq 3 LPX rack，是 POD 中比例最高的 attach rack；若 NVL72 出貨加速，LPX rack 是最大數量受益者。

---

### Exhibit 6-7｜BlueField-4 STX Storage Rack

![Exhibit 6](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_06.png)
![Exhibit 7](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_07.png)

### 解讀摘要

每個 2U STX storage tray：2 Vera CPUs + 4 ConnectX-9 NICs + 24 SSDs，耗電 1.2-1.3kW；16 個 tray 組成一個 STX rack。由緯創/緯穎展示。

---

## 二、FIT 互連與電源解決方案（含 ASP 上調）

### Exhibit 8-14｜FIT 產品組合

![Exhibit 8](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_08.png)
![Exhibit 9](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_09.png)
![Exhibit 10](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_10.png)
![Exhibit 11](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_11.png)
![Exhibit 12](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_12.png)
![Exhibit 13](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_13.png)
![Exhibit 14](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_14.png)

### 解讀摘要

這是本報告最有投資增量價值的部分。FIT 在鴻海展台展示了完整的 VR200 NVL72 互連與電源解決方案，多項 ASP 確認高於市場前估：Paladin HD2 connector（Exhibit 9）達 US\$70-90+ per set；liquid-cooled busbar（Exhibit 12）US\$3,000-4,000（年底定案），2" FFQD（Exhibit 14）US\$400-700/pc。44L midplane PCB 的板廠供應商確認為 VGT、WUS、Kinwong，鑫定仍在認證中。此外，FIT 已是下代 Kyber rack 的 Voronoi connector key design partner，但設計尚未定稿——量產窗口在 Rubin Ultra 之後。

### 表格｜FIT ASP 確認彙整（VR200 NVL72 為主）

| 產品 | 規格 | ASP（US\$） | 備註 |
|---|---|---|---|
| Paladin HD2 connector（midplane） | per set | 70-90+ | 遠高於前估 |
| Liquid-cooled rack busbar | per rack | 3,000-4,000 | 年底定價 |
| 2" FFQD（for CDU） | per piece | 400-700 | 雙供應商：Danfoss + FIT |
| ELSFP 20dBm/100mW | per module | 400-500 | 2H27+ 主要成長驅動 |
| ELSFP 23dBm/200mW | per module | 待定 | 仍是 prototype |

> **洞察一**：FIT Paladin HD2 connector 的 ASP「遠高於前估」且來自 MS 的現場 checks，這是 FIT 財務模型最直接的上調信號。若維持 VR200 的供貨份額，單單 connector ASP 上調就足以驅動 2026-27E 財務模型的向上修正。  
> **洞察二**：NVIDIA 正在為 Rubin Ultra 設計新 QD，FIT 是 primary designer——意味著目前的 CDU QD 市場雙寡占格局（Danfoss + FIT）在 Rubin Ultra 世代可能被 FIT 進一步主導，Danfoss 市場份額有下行風險。

---

## 三、RTX Spark — 短期影響有限

### Exhibit 15-18｜RTX Spark NB 與 PC 展示

![Exhibit 15](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_15.png)
![Exhibit 16](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_16.png)
![Exhibit 17](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_17.png)
![Exhibit 18](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_18.png)

### 解讀摘要

Lenovo / MSI / Dell / ASUS / HP / Microsoft 六家 OEM 均在 MediaTek 展台展出 RTX Spark NB（Exhibits 15-16），ASUS 另有 Mini PC 與 ProArt P16 展示（Exhibits 17-18）。MS 維持保守立場：N1X 首年出貨約 1M units（季度 run rate 200-250k），US\$3K+ 定價阻礙大眾化，AI power users 已有 Mac Mini 選項。Desktop 形態比 NB 更符合 Jensen 的「24/7 運行 AI agent」願景，但近期需求衝擊有限。

### 表格｜RTX Spark 關鍵規格

| 規格 | 數值 |
|---|---|
| 統一記憶體 | 最高 128GB |
| AI 性能 | 最高 1 petaflop FP4 |
| CPU cores | 最高 20 核 |
| GPU cores | 最高 6,144 RTX 核 |
| 起售目標 | US\$3,000+（128GB DRAM） |
| 首年出貨（N1X） | 約 1M units |
| 出貨開始 | 2026 秋季 |

---

## 四、電力升級路線圖確認

### Exhibit 19｜800 VDC Equipment Readiness Timeline

![Exhibit 19](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_19.png)

### 解讀摘要

Exhibit 19 是從 Nvidia GTC Taipei 展台拍攝的 800V DC 部署路線圖，三階段清晰：3Q26 power rack 就緒、2Q27 1.6MW power center、1Q28 4.8MW power block。MS checks 確認 2H26 將有兩種規格：660kW（without BBU）和 900kW（with BBU）。重要細節：Nvidia 與 Microsoft/Google 合作制定 OCP 標準，採用「直接 800V DC」方案，排除過渡性 ±400V 方案。

### Exhibit 20-21｜Delta 固態燃料電池與 SST

![Exhibit 20](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_20.png)
![Exhibit 21](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_21.png)

### 解讀摘要

Delta 展示固態氧化物燃料電池（SOFC）與固態變壓器（SST）兩款下代電力產品。MS checks：燃料電池 pilot run 2H26 啟動，桃園廠量產，目標 300MW。SST 為 10' 貨櫃尺寸，98.5% 轉換效率，1-2MW 輸出。這兩款均屬中長期業務，非近期量產催化劑。

---

## 五、液冷：CDU 展示 + Microchannel Lid 前景

### Exhibit 22｜Delta 3MW LTL In-Row CDU

![Exhibit 22](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_22.png)

### 解讀摘要

Delta 展示 3MW LTL（Liquid-to-Liquid）In-Row CDU 實機，並宣布年底前推出 6.8MW 版本。MS 確認 Vera Rubin 液冷（Bianca board 設計）3Q26 MP；每個 GPU tray 的 cold plate modules + inner manifold + NVQD 含量約 US\$2,500。

### Exhibit 23｜Vera Rubin NVL72 GPU Tray 與 Switch Tray

![Exhibit 23](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_23.png)

### Exhibit 24-25｜Microchannel Lid（Jentech + Delta）

![Exhibit 24](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_24.png)
![Exhibit 25](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_25.png)

### 解讀摘要

Jentech（Exhibit 24）和 Delta（Exhibit 25）均展示 Microchannel Lid（MCL）原型。MCL 直接接觸 TIM1，消除多層熱介面，散熱效率優於現有 cold plate；但量產仍需克服：製程 yield、洩漏偵測、長期可靠性認證，OSAT 需增加冷媒注入測試/壓力驗證/清潔等額外製程步驟，認證週期延長。MS 未給出明確量產時間節點。

> **值得驗證**：Jentech MCL 量產時程是其 2027E 估值的關鍵假設。若認證週期再延長 6-12 個月（進入 2028），現有買進論點的時效性需要重新評估。

---

## 六、網路與互連：Accton + MediaTek Micro LED

### Exhibit 26-27｜Accton OWS Switch + Open Fabric

![Exhibit 26](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_26.png)
![Exhibit 27](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_27.png)

### 解讀摘要

Accton 展示兩大新方向：1）OWS（光波長選擇）交換機，基於子公司 InLC 光引擎，可用於 AI cluster 的 scale-up 和 scale-across 網路——MS 確認已在與潛在客戶洽談，2027 年可能開始貢獻營收；2）Edgecore Open Fabric rack-level 整合平台（Exhibit 27），整合 compute/networking/storage/cooling。Accton 正從賣零件轉型提供 rack-level solution，試圖通過更多自製內容（交換機、光收發器、液冷等）維持毛利率。

### Exhibit 28-29｜MediaTek Micro LED 光引擎原型

![Exhibit 28](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_28.png)
![Exhibit 29](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_29.png)

### 解讀摘要

MediaTek 展示基於 Micro LED 的 active optical cable 原型（全球首家展示 SoC MicroLED 解決方案）。Exhibit 29 規格卡顯示相比 laser diode：省電 30-50%、銅線級可靠性、單片 CMOS 整合。商業化路徑：Credo（CRDO）的 ALC 技術類似，Bizlink 是 Credo 的 assembly partner，預計從 2027 年 5 月（Credo GY2028）起貢獻營收。其他受益供應商：Ennostar（3714，micro LED chip）、Tyntek（2426，photodiode）、AUO（2409，玻璃封裝）。

---

## 七、Bizlink 電源與數據互連

### Exhibit 30-35｜Power Whips / Busbars / 數據線纜

![Exhibit 30](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_30.png)
![Exhibit 31](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_31.png)
![Exhibit 32](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_32.png)
![Exhibit 33](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_33.png)
![Exhibit 34](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_34.png)
![Exhibit 35](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_35.png)

### 解讀摘要

Bizlink 在電源互連（power whip + busbar）和數據互連（DAC/AEC/AOC，最高 1.6T）均有完整佈局，在 AI server 和 general server 均是主要供應商，MS 預期有份額增長機會。透過收購 XFS 強化光纖組裝和 shuffle box 能力，預計 2027 年起從 CPO switch shuffle box 開始出貨，2028 年量更顯著。

### Exhibit 36-39｜Bizlink 新興業務

![Exhibit 36](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_36.png)
![Exhibit 37](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_37.png)
![Exhibit 38](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_38.png)
![Exhibit 39](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_39.png)

展示 LEO 衛星、無人機、自駕車、機器人狗的特製互連解決方案。目前營收貢獻不顯著，屬中長期機會。

---

## 八、機械零件：Chenbro + King Slide

### Exhibit 40-41｜Chenbro Vera CPU Chassis

![Exhibit 40](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_40.png)
![Exhibit 41](../assets/20260607_MS_Computex-2026-Takeaways/exhibit_41.png)

### 解讀摘要

Chenbro 展示 1U NVIDIA MGX Vera Rubin chassis 以及完整 AI chassis 系列（1-6U），同時展示 AMD Helios compute tray chassis 和 NVL72 相容的全 rack 解決方案。馬來西亞廠 3Q26 起 MP，美國廠 4Q27。King Slide 雖無展位，其 rail kits 已廣泛集成於各展示 rack 中；AI 設備的 rail kit 採用率提升擴大 TAM。

---

## 相關個股清單

| 類別 | 公司 | Ticker | 評等 | 備註 |
|---|---|---|---|---|
| 連接器/電源互連 | FIT 鴻騰精密 | — | — | Paladin HD2 ASP US\$70-90+；Voronoi next-gen 主設計；QD 新設計 primary |
| ODM/整機 | 鴻海 Hon Hai | 2317.TW | EW | Vera CPU rack L11 4Q26 MP；Groq 3 LPX L10/L11 3Q26 |
| ODM/整機 | 緯創/緯穎 | 3231/6669.TW | — | BlueField-4 STX rack、Open Platform Rack |
| 散熱 | 建策 Jentech | 3653.TW | — | MCL 原型展出，量產時程待確認 |
| 電力/液冷 | 台達電 Delta | 2308.TW | EW | SST、SOFC、3MW CDU、Micro Channel Lid 全線展示 |
| 網路/交換機 | 智邦 Accton | 2345.TW | EW | OWS 光交換機 2027 年起貢獻；Open Fabric rack 轉型 |
| 電源/數據互連 | 貿聯 Bizlink | 3665.TW | EW | Shuffle box 2027 起；1.6T 數據線纜 |
| 機殼 | 勤誠 Chenbro | 8210.TW | — | Malaysia 廠 3Q26 MP；AI rack 系列完整 |
| 滑軌 | 川湖 King Slide | 2059.TW | OW | Rail kit 廣泛見於各展示 rack |
| 晶片/封裝 | 聯發科 MediaTek | 2454.TW | — | Micro LED optical engine prototype（Credo ALC 合作） |
| Micro LED chip | 錸司 Ennostar | 3714.TW | — | MediaTek Micro LED 供應鏈 |
| Photodiode | 鈦鼎 Tyntek | 2426.TW | — | MediaTek Micro LED 供應鏈 |
| 玻璃封裝 | 友達 AUO | 2409.TW | EW | MediaTek Micro LED 玻璃封裝 |

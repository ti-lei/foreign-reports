---
modified: 2026-07-22
type: 產業報告
broker: JPMorgan
date: 2026-07-21
sectors: [半導體封測, PCB]
---

# JPMorgan｜FC-BGA（ABF）基板技術研討會：CoWoP 可行性存疑，Rubin Ultra 5.5x 進展不順，玻璃核心 2030 前難量產

**券商**：JPMorgan Securities Japan Co., Ltd.  
**分析師**：Akinori Kanemoto AC、Ikki Shibata  
**嘉賓**：Mr. Toshihiko Nishio（SBR Technology，7/14 研討會）  
**日期**：2026-07-21  
**主題**：FC-BGA（ABF 基板）技術研討會紀要 — 核心材料與先進封裝架構趨勢  
**評級**：Ibiden（Kanemoto 覆蓋宇宙，具體評等未列本報告）  
<a href="https://layx.uk/dl?g=產業&b=JPM&d=20260721&h=ABF-Substrate-Seminar">📎 下載 PDF</a>

---

## 報告總結

JPMorgan 邀請 SBR Technology Nishio 先生就 FC-BGA（ABF）基板技術趨勢進行研討。核心結論：CoWoS-L 的 9.5x 光罩尺寸量產高度困難——**Rubin Ultra（5.5x）評估進展不順**，9.5x 焊接問題預計延至 1H 2027 才定案，若失敗將威脅 Nvidia Feynman 世代（2029）的時程；**Nvidia CoWoP 構想（取消 ABF 基板、直接用 SLP PCB）在可行性上存疑**，Nishio 認為 Nvidia 資源優先放在 Feynman，CoWoP 並行開發能量有限；玻璃核心是長期方向但量產困難，2030 年前難以普及。**Ibiden 相對競爭優勢上升**：大光罩尺寸對高剛性/高平整度基板需求更強，Ibiden 正是這方面的領先者，且可能成為 EMIB-T（Intel/Broadcom/Google 方向）的關鍵供應商。

---

## JPMorgan 完整投資邏輯鏈

| 論點層次 | 內容 |
|---|---|
| CoWoS-L 技術瓶頸 | Rubin Ultra（5.5x）進展不順；9.5x 焊接問題 1H2027；若失敗 Feynman（2029）受阻 |
| 高剛性基板需求 | 大光罩 → CTE 失配 → 翹曲 → 需高剛性基板（有利 Ibiden） |
| EMIB-T 方向 | Intel + Broadcom + Google 關注，可支持至 12x 光罩；Amkor 將獲授權組裝 |
| CoWoP 可行性存疑 | 需 SLP 線寬 ≤10μm（現 15-20μm）；Nvidia 有限資源優先 Feynman，難並行 |
| 玻璃核心現況 | Absolics 唯一量產（小批量）；Ibiden/Shinko 仍開發中；2030 前難普及 |
| 有機核心材料 | Nittobo T-glass（壟斷）+ Union Tool 鑽具（壟斷）是兩大隱形護城河 |
| **結論** | **Ibiden 競爭優勢增加（大光罩 + EMIB-T）；CoWoP 威脅低於市場預期；Nittobo/Union Tool 低調壟斷值得注意** |

---

## 報告核心觀點

| 主題 | Nishio 先生觀點 | 市場共識 | 是否 Contra-Consensus |
|---|---|---|---|
| Rubin Ultra 5.5x | 評估進展不順，不樂觀 | 多數預期按 TSMC 路徑推進 | 是，較悲觀 |
| CoWoS-L 9.5x | 非常難實現，1H2027 仍在解焊接問題 | 多數跟隨 TSMC 官方計畫 | 是，提出量產壁壘 |
| CoWoP | 可行性存疑（SLP 精度不夠、Nvidia 資源有限） | 部分擔憂對 ABF 基板商的威脅 | 是，CoWoP 短期不是威脅 |
| 玻璃核心 | 2030 前難量產，基礎設施不足 | 普遍預期 2027-2028 開始放量 | 是，更保守 |
| EMIB-T 時程 | 尚未量產化，IFS + 組裝能力均待建立 | 多數預期 Intel 推出時間點比實際快 | 是，提醒量產壁壘 |
| Ibiden 競爭優勢 | 大光罩尺寸需求增加 Ibiden 的相對優勢 | Ibiden 已有正面評價 | 確認方向 |

---

## 一、CoWoS 技術路線分析

### CoWoS-S（矽中介板）

| 規格 | 內容 |
|---|---|
| 結構 | LSI + HBM → 大型矽中介板 → ABF 基板 |
| 光罩尺寸上限 | **3.3x**（再大→中介板翹曲→焊接可靠性下降）|
| 基板尺寸 | 85mm × 85mm |
| 限制 | 中介板增大 → 翹曲增大 → 焊接可靠性下降 |

### CoWoS-L（無矽中介板）

| 規格 | 內容 |
|---|---|
| 結構 | 在 mold 上形成 RDL 配線 + 矽橋接於 LSI/HBM 連接點 |
| TSMC 路線圖 | 3.3x → 5.5x → **9.5x（2029 目標）** |
| 基板尺寸 | 3.3x: 85×85mm；5.5x: 110×110mm；9.5x: **130×140mm** |

**關鍵問題：**

| 技術節點 | 現況 | Nishio 評估 |
|---|---|---|
| **Rubin Ultra（5.5x）** | **評估「進展不順」** | **不樂觀** |
| 9.5x（Feynman 世代） | 焊接問題預計 1H 2027 才解決 | **「非常難」實現** |
| 風險 | 若 9.5x 失敗 → 2029 Feynman 世代時程存疑 | 高影響力風險 |

> **洞察一**：Rubin Ultra（Nvidia 下一代 GPU）以 CoWoS-L 5.5x 為封裝基礎，但 Nishio 明確說評估「進展不順」。這與 Bernstein 在同期日本半導體報告（[[20260721_Bernstein_Japan-Semi-2Q26-Preview]]）中指出「Rubin Ultra 從 2-die 回歸單 die 的疑慮」相互印證——Rubin Ultra 的封裝問題已是多位業界觀察者共同認定的卡點。Ibiden 股價已修正 39%，若此問題解決、Rubin 量產，Ibiden 是最直接受益者。

> **洞察二**：9.5x 焊接問題「尚未解決（1H2027 才定案）」意味著 Nvidia Feynman（2029 量產目標）可能遇到封裝瓶頸——若 CoWoS-L 9.5x 無法突破，Nvidia 就只能選：(a) 降規（維持 5.5x）、(b) 轉向 EMIB-T（Intel）、或 (c) CoWoP（SLP 路線），而後兩者都有各自的量產壁壘。

---

## 二、EMIB/EMIB-T 技術分析

### EMIB（Embedded Multi-Die Interconnect Bridge）

| 項目 | 內容 |
|---|---|
| 技術擁有者 | Intel |
| 結構 | 矽橋嵌入封裝基板，連接 LSI 和 HBM，無需大型中介板 |
| HBM4 連接 Bump Pitch | 可能從 65μm 縮至 **36μm**（需高密度配線） |
| 量產狀態 | 傳統 EMIB 已有量產記錄 |

### EMIB-T（TSV 版本）

| 項目 | 內容 |
|---|---|
| 改進點 | 矽橋中加入 TSV，讓電力/訊號可從基板側供給 HBM 和 LSI |
| 優勢 | 抑制 HBM 高頻低電壓電源雜訊；各晶片可單獨安裝，減少翹曲 |
| 最大光罩支援 | Intel 聲稱可支援至 **12x 光罩**（CoWoS-L 替代方案） |
| 已表達興趣 | **Broadcom** 和 **Google** |
| 量產現況 | **尚未建立量產技術** — IFS 外部客戶產能不足，基板端能力也不夠 |
| 組裝計畫 | Intel IFS 計畫授權組裝技術給 **Amkor Technology**、外包組裝 |

> **值得驗證**：EMIB-T 的「IFS 外部客戶量產能力不足」是目前最大瓶頸。Broadcom/Google 的興趣能否轉化為 2026-2027 年的量產訂單，高度取決於 IFS 能否在 2026 年大幅提升對外服務能力——若 IFS 改善提速，EMIB-T 進展可能比 Nishio 估計更快。

---

## 三、CoPoS / CoWoP 分析

### CoPoS（Panel-on-Substrate）

| 項目 | 內容 |
|---|---|
| 概念 | CoWoS 製程從 300mm 晶圓移至 310mm 方形面板 |
| 特點 | 使用玻璃載板，充分利用方形面板面積，提升產率 |
| 時程風險 | 可能按 TSMC 計畫推進，也可能延後最多 ~2 年 |
| 控制難度 | 相對可控（延後可由增加 CoWoS 產能彌補） |
| 重要消息 | **JPCA Show 2026：TSMC + Ibiden + Innolux 合作開發 CoPoS 玻璃核心基板** |

### CoWoP（Wafer-on-Platform）

| 項目 | 內容 |
|---|---|
| 概念 | **Nvidia 未來方向**：取消 ABF 基板，中介板直接安裝在 SLP（類基板 PCB）上 |
| 動機 | 減少中間基板層數，縮短訊號路徑，提升散熱設計靈活性，降成本 |
| 關鍵要求 | SLP 線寬需 ≤10μm（現行：15-20μm）；PCB 加工精度與良率待解 |
| 供應鏈意圖 | **Nvidia 計畫轉向台灣/中國 PCB 供應鏈，降低對日本基板商的依賴** |
| 技術挑戰 | 晶片端配線規則/bump pitch 須改，難以與現有 CoWoS 晶片標準化 |
| **Nishio 判斷** | **「對 CoWoP 可行性存疑」** — Nvidia 資源優先 Feynman，難以同時推進 CoWoP |

> **洞察三**：CoWoP 的威脅比市場想像中低。首先技術難度高（SLP 線寬要從 15-20μm 降至 ≤10μm）；其次 Nvidia 資源有限且優先 Feynman；再者改 bump pitch 會使 CoWoP 晶片與現有 CoWoS 晶片不相容，增加推廣成本。Nishio「存疑」的評估，支持 ABF 基板商（Ibiden/Unimicron）的護城河在 2027 年前不會受到 CoWoP 顯著挑戰。

---

## 四、核心材料分析

### 有機核心（當前主流）

| 關鍵需求 | 說明 |
|---|---|
| 低 CTE + 高剛性 | 矽/基板 CTE 失配 → 翹曲 → 焊接失敗 |
| 尺寸增大壓力 | Chiplet 化 + 封裝尺寸增大 → 更大基板 → 更嚴格 CTE 要求 |

**兩大壟斷供應商：**

| 公司 | 產品 | 壟斷地位 |
|---|---|---|
| **Nittobo** | T-glass（有機核心玻纖布） | **事實上唯一高端供應商**；台灣玻璃等競爭者技術落後 |
| **Union Tool** | 硬材料精密鑽具 | **鑽具龍頭**；無其他公司能比肩 |

**Nittobo 的策略**：已有 Nvidia/Broadcom/終端用戶要求增產；但因擔憂競爭者趕上後的供過於求，**謹慎擴產**（邊觀察需求邊逐步增加）

> **洞察四**：Nittobo 和 Union Tool 是兩個技術壟斷的隱形冠軍——沒有「評等/TP」，但在整個 CoWoS/EMIB-T 供應鏈中處於不可替代的位置。Nittobo 謹慎擴產的策略隱含「自己也不確定競爭者何時追上」——這是觀察進入壁壘強度的重要信號。若三五年後台灣/韓國廠商攻克 T-glass，Nittobo 的壟斷溢價將顯著縮小。

### 玻璃核心（未來方向，但 2030 前難量產）

| 公司 | 狀態 |
|---|---|
| **Absolics** | **唯一有量產設施（小批量）的公司** |
| Ibiden | 開發中，**未宣布量產時程** |
| Shinko Electric | 開發中 |
| Unimicron | 開發中 |
| Samsung Electro-Mechanics | 與住友化學合建工廠，**2028 原型生產**；客戶認證需時 |
| Dai Nippon Printing | 尚未決定全面投資 |

**TSMC-Ibiden-Innolux 合作**（JPCA Show 2026 宣佈）：為 CoPoS 共同開發玻璃核心基板 — 是量產路徑的重要進展，但 Nishio 仍認為 2030 年前普及困難（基礎設施不足）。

### 其他核心材料

| 類型 | 說明 | 現況 |
|---|---|---|
| HDI 核心 | 以 ~8 層 HDI（多層 PCB）取代傳統雙層 CCL | 評估中；Ibiden/Shinko 目前「無法生產」 |
| 陶瓷核心 | 復古選項（1980-90s IBM/Intel 使用）；現有材料和量產廠 | 鑽孔和 ABF 接著問題尚存；替代玻璃核心的選項 |

---

## 相關個股清單

| 類別 | 公司 | Ticker | 備註 |
|---|---|---|---|
| ABF 基板龍頭 | Ibiden | 4062.JP | 大光罩競爭優勢；EMIB-T 潛在供應商；TSMC/Innolux CoPoS 合作 |
| ABF 基板 | Shinko Electric | 6967.JP | 玻璃核心開發中 |
| ABF 基板 | Unimicron | 3037.TW | 玻璃核心開發中 |
| 組裝（EMIB-T） | Amkor Technology | AMKR | Intel 計畫授權 EMIB-T 組裝技術 |
| 玻璃核心 | Absolics | 未上市 | 唯一有量產設施 |
| 玻璃核心 | Samsung Electro-Mechanics | 009150.KS | 2028 年原型；Sumitomo 化學合作 |
| T-glass 壟斷 | Nittobo | 3201.JP | 高端有機核心玻纖布唯一供應商 |
| 鑽具壟斷 | Union Tool | 6278.JP | 硬材料精密鑽具，無競爭者 |
| 封裝（CoWoS）| TSMC | 2330.TW | CoWoS-L 技術路徑掌舵者 |
| 先進封裝 | Intel Foundry Services | INTC | EMIB-T 技術擁有者，量產能力待建 |
| 客戶（EMIB-T）| Broadcom | AVGO | 已表達 EMIB-T 興趣 |
| 客戶（EMIB-T）| Google | GOOGL | 已表達 EMIB-T 興趣 |
| CoWoP 推動者 | Nvidia | NVDA | CoWoP 發起者，但 Nishio 對可行性存疑 |

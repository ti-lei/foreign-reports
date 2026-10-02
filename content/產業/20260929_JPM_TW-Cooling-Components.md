---
modified: 2026-09-30
type: 產業報告
broker: JPMorgan
date: 2026-09-29
sectors: [散熱, 液冷]
---
# JPMorgan｜Taiwan Cooling Components：Accelerating Cooling Upgrades in Nvidia VRU and ASICs

**券商**：J.P. Morgan  
**分析師**：Megan Hsueh、Gokul Hariharan、Albert Hung  
**日期**：2026-09-29  
**主題**：Nvidia VRU 與 ASIC 液冷規格加速升規，含量增幅超預期；去規格疑慮不成立；首選 AVC（OW）、Fositek（OW）  
**評級**：AVC 3017（OW）、Fositek 6805（OW）、Jentech 3653（OW）  
<a href="https://layx.uk/dl?t=產業&b=JPM&d=20260929">📎 下載 PDF</a>

---

## 報告總結

JPM 認為液冷規格升級加速，每 Rack 含量增幅大於市場預期，尤其 Nvidia VRU 的冷板（Cold Plate）、快速接頭（Quick Disconnect, QD）及散熱蓋（Heat Spreader/Lid）同步升規。去規格疑慮不成立：VRU NVL72 每 Rack 液冷含量估 ~US\$98,500（vs VR ~US\$66,250），+49% 幅度顯著。AWS Teton 3 Max 每 Rack 含量更達 ~US\$86,000（雙面冷板設計）。首選 AVC（冷板+QD）與 Fositek（QD 升規）；Jentech（OW）受惠 3-piece lid 拉前。

---

## Nvidia VRU NVL72 每 Rack 含量升級一覽

| 組件 | GB300 NVL72 | VR NVL72 | VRU NVL72（估） |
|---|---|---|---|
| 計算托盤含量（×18） | ~US\$27k | ~US\$40.5k | ~US\$58.5k |
| 交換托盤含量（×9） | ~US\$11.25k | ~US\$15.75k | ~US\$30k |
| Rack Manifold | ~US\$10k | ~US\$10k | ~US\$10k |
| **每 Rack 總含量** | **~US\$48.25k** | **~US\$66.25k** | **~US\$98.5k** |

---

## 核心規格升級詳情

### 冷板（Cold Plate）：VRU 計算托盤 +30-50% 含量
- **雙面冷板設計**：VPD（垂直供電架構）將電源元件移至晶片板背面，Bianca GPU 需要背面 4 個額外冷板 → 每計算托盤共 6 個冷板（vs VR 2 個）；AWS Trn3 與 AMD MI450 亦採雙面設計
- **Diamond Copper 材料**：VRU Bianca 冷板 HBM 接觸面加裝金剛石銅，提升散熱效率並增加單位 ASP
- AWS Teton 3 Max（Trainium 3）每計算托盤含量達 US\$3,000-3,500（較 Nvidia VR +30%），每 Rack 總含量 ~US\$86k

### 快速接頭（QD）：VRU 每 Rack 含量 +~100%
- **ZQD（Zero-drip QD）升規**：VRU 中多個 MQD/UQD 升級為 ZQD（ASP 約 2 倍），涵蓋：①計算托盤 Bianca 冷板位置（8 個 ZQD06）；②托盤外插頭 QD 升級至 ZQD14（計算 + 交換托盤各 2 個）；③Rack Manifold socket QD 全數升級至 ZQD14（88 個）
- VRU 每 Rack 總 QD 含量：~US\$20,500（vs VR ~US\$11,000）

| | GB300 NVL72 | VR NVL72 | VRU NVL72 |
|---|---|---|---|
| 每 Rack QD 含量 | ~US\$9.4k | ~US\$11k | ~US\$20.5k |

### 散熱蓋/Lid（Heat Spreader）：3-piece lid → 4-5x ASP
- VRU 採「可拆式 lid + stiffener + 螺絲固定」三件式設計（3-piece lid），ASP 為現行 1-piece lid 的 **4-5 倍**
- **時程提前**：Rubin GPU 可能 4Q26 小批量試產（提前於原預計時程），VRU 1Q27 量產
- AMD MI450：採 2-piece lid（vs MI350 ASP 增幅 ~10x）
- AWS/Google ASICs：採通用型 stiffener（US\$10-20/片，每代雙位數 ASP 成長）

---

## 個股 EPS 與估值

| | AVC（3017 OW） | Fositek（6805 OW） | Jentech（3653 OW） |
|---|---|---|---|
| 主要液冷產品 | 冷板（+ Manifold） | 快速接頭（QD） | 散熱蓋/Lid |
| 2026E EPS | NT\$108 | NT\$64 | NT\$69 |
| 2027E EPS | NT\$187 | NT\$121 | NT\$150 |
| 2028E EPS | NT\$236 | NT\$187 | NT\$253 |
| vs 共識 26/27/28E | +3%/+16%/+16% | +1%/+12%/+40% | +1%/+3%/+6% |
| 現行估值 | ~20x 12M fwd P/E | 20-25x 12M fwd P/E | ~50x 12M fwd P/E |

**AVC（首選）**：市場尚未 price-in VRU 雙面冷板 +50% 含量增幅、AMD MI450 雙面設計、Google TPU v9 升規；近 1 個月跑輸大盤 ~2%，估值處歷史區間低端（18-22x）  
**Fositek（首選）**：ZQD 採用比例尚未充分反映（VRU 機架內 compute tray + 新 miniQD）；3Q26 毛利率潛在優於預期；TAM 持續擴大（更高規格 Rack Manifold QD）  
**Jentech**：3-piece lid 時程甚至可能拉前至 4Q26 Rubin GPU，1Q27 VRU 量產；AMD MI450 亦帶動 2-piece lid 需求

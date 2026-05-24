---
status: paused
paused_at: 2026-05-24
---

# 處理進度：Nomura｜Semi Renaissance

## 報告資訊

| 項目 | 值 |
|------|---|
| Drive 檔名 | `semi-renaissance_Nomura_20260521.pdf` |
| Drive ID | `1fg3Vcn9ikjxJUkY9HeTxReVBaP_inB9K` |
| report_slug | `Nomura_20260521_semi-renaissance` |
| 頁數 | 139 頁 |
| Figure 總數 | 205 個（含 inline 引用） |
| Creator | （無，非 Chromium） |

## 已完成

- [x] PDF 下載（暫存 `C:\Temp\`，resume 時需重新下載）
- [x] `raw_text.txt` 提取（已存於本資料夾）
- [x] Figure 清單掃描完畢

## Figure 決策

### 確定跳過
- **Fig. 1**：Stocks for action（買入標的清單）
- **Fig. 2, 151, 169, 192, 201**：Valuation comparison table（估值比較表）
- **Fig. 148–154**：Ingentec 個股 profile（P&L / P/E / P/B / 設施 / 管理層 / 股東）
- **Fig. 164–172**：AEMC 個股 profile
- **Fig. 186–195**：Kinik 個股 profile（含 Disco Fig. 186–187）
- **Fig. 198–205**：GWC / Dinglong / Anji 個股 profile
- **Inline 引用**（無獨立標題，不裁圖）：21、22、46、48、67、89、96、102–107、126、128–131、135–136、138–139、145–147、156、176、183

### 待決定（中斷點）
使用者尚未決定以下主題區哪些要處理：

**技術概覽（Fig. 3–17, 23）**
- 3–4: Semi 技術 roadmap + 受益者
- 5–6: Metal pitch / Gate contact
- 7–8: GAA / BPD 製程
- 9: Chip-to-chip hybrid bonding
- 10–12: 3D NAND
- 13: MCM vs WoW for edge AI
- 14–15: EUV photoresist
- 16: Glass substrate
- 17: Advanced optical transceiver
- 23: IC packaging process + materials

**材料市場規模與份額（Fig. 24–45, 47）**
- 24–30: 市場規模 breakdown
- 31–44: 各子項目市場份額（KrF/ArF、Wafer、Photomask、Gas、CMP、Sputtering）
- 45: 關鍵材料 × 供應商矩陣
- 47: Semi materials sales: manufacturing vs packaging

**TSMC + 設備（Fig. 18–20, 49–54）**
- 18–20: TSMC fab 擴張 + 材料在地化
- 49: SPE index vs Semi material 走勢
- 50: 材料市場 2025 vs 2030F breakdown
- 53–54: TSMC fab 擴張 + capex

**EUV 深度（Fig. 55–66, 68–72）**
- 55–66: DUV/EUV specs、High-NA、photoresist
- 68: EUV mask 結構
- 69: Attenuated PSM 比較
- 70–72: Gate contact / Metal pitch / Logic nodes roadmap

**設備市場（Fig. 73–79）**
- 73: SPE/Semi market ratio
- 75–79: 3D NAND 設備 / SPE 市場

**Hybrid bonding / SoIC / BPD（Fig. 80–88, 90–95）**
- 80–88: SoIC 產能 / Besi 訂單 / hybrid bonding 假設
- 90–95: BPD / 3D NAND / Wafer bonding

**NAND / Glass substrate / InP / SOI（Fig. 97–101, 108–124）**
- 97–99: Wafer-bonded NAND capacity / bonding tool specs
- 100–101: MCM vs WoW / Glass substrate
- 108–110: Optical transceiver / SOI PIC / CPO
- 111–122: InP / SOI wafer 供需
- 123–124: 12" wafer 市場

**其他材料細節（Fig. 125, 127, 132–134, 137, 140–141, 143–144）**
- 125: Photoresist + lithography process
- 127: PR technology difficulties
- 132–134: Semiconductor manufacturing gases
- 137: CMP pad + conditioner
- 140: Sputtering target 類型

## 下次 resume 步驟

1. 重新下載 PDF：
   ```powershell
   python "C:\Obsidian\scripts\gdrive_download.py" "1fg3Vcn9ikjxJUkY9HeTxReVBaP_inB9K" --output "C:\Temp\semi-renaissance_Nomura_20260521.pdf"
   ```
2. 繼續與使用者討論 Figure 選擇（從「待決定」清單開始）
3. 建立 Nomura exhibit locator（`ms_exhibit_locator.py` 只適用 MS，Nomura 用 "Fig." 標籤）
4. 裁圖 → 逐 Exhibit 分析 → 輸出 MD

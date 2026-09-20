# Claude Code × Telegram 整合設定經驗彙整

> 給朋友設定「Claude Code 跟 Telegram 溝通」用。整理自本機實際設定與除錯過程中踩過的坑，
> 原始文件在 `99 System/`：[[telegram-plugin 說明文件]]、[[Telegram-plugin 新電腦快速設定 checklist]]、
> [[Telegram-MCP-斷線 除錯經驗]]、[[Telegram userbot 排程觸發 除錯經驗]]、[[Telegram userbot 排程觸發 設定說明]]。

---

## 一、基本設定流程（讓 Claude 收/回 Telegram 訊息）

### 前置需求
- Claude Code 已安裝
- Telegram 帳號
- Bun runtime（telegram plugin 的 MCP server 靠 bun 跑）

### 步驟

1. **建立 Telegram Bot**
   Telegram 搜尋 `@BotFather` → 傳 `/newbot` → 輸入顯示名稱 → 輸入 username（結尾必須是 `bot`）
   → 拿到 **Bot Token**（格式 `123456789:AAHfiq...`），存好。

2. **安裝 Bun**
   ```powershell
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```
   重開 terminal，跑 `bun --version` 確認。
   > 若顯示「無法辨識」= PATH 沒生效，手動補：
   > ```powershell
   > [Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";$env:USERPROFILE\.bun\bin", "User")
   > ```
   > 補完**一定要重開 terminal**才會吃到新 PATH。

3. **安裝 plugin**
   ```
   /plugin install telegram@claude-plugins-official
   ```
   安裝後必須**重新啟動 Claude Code** 才會生效。

4. **設定 Bot Token**
   ```
   /telegram:configure <BotFather給的Token>
   ```
   Token 會存到 `~/.claude/channels/telegram/.env`。

5. **以 channels 模式啟動**
   ```powershell
   claude --channels plugin:telegram@claude-plugins-official --permission-mode bypassPermissions
   ```
   `--permission-mode bypassPermissions` **不能省略**：常駐 session 收到 Telegram 訊息後要能直接
   執行工具呼叫（改檔、跑指令），沒有互動式終端機可以按「允許」——沒帶這個參數，session 會卡在
   權限提示等不到回應，等於收不到訊息。

6. **配對**
   Telegram 搜尋自己建的 bot username → 傳任意訊息（如 `/start`）→ bot 回一組 **6 位配對碼**
   → 在 Claude Code 終端機輸入：
   ```
   /telegram:access pair <code>
   ```
   配對碼約 1 小時過期，若 bot 沒回碼 = 沒以 `--channels` 模式啟動（檢查第 5 步）。

7. **鎖白名單（重要，防止陌生人操控）**
   ```
   /telegram:access policy allowlist
   ```
   切成 allowlist 後只有已配對帳號能通，陌生人 DM 不再收到配對碼。查狀態用 `/telegram:access`（不帶參數）。

### 建議：包一支啟動捷徑
每次都要打一長串指令容易漏帶 `bypassPermissions`。可以做一支 `.cmd`（放在 PATH 上的資料夾，例如
`%USERPROFILE%\.local\bin\claude-tg.cmd`）：
```bat
@echo off
claude --channels plugin:telegram@claude-plugins-official --permission-mode bypassPermissions %*
```
之後打 `claude-tg` 就好，不用手動組指令——手動組容易漏參數，也容易在偵錯時不小心開出第二個
session 跟原本的搶同一個 bot token（見下方坑 1）。

---

## 二、踩過的坑

### 坑 1：同一個 bot token 全世界只能有一個 poller
Telegram 的 `getUpdates` 機制決定了**同一組 bot token 同時只能有一個程序在監聽**。第二個一啟動，
Telegram 會回 409 Conflict，plugin 用全域 PID 鎖（`bot.pid`）保證只留一個——**誰最後啟動誰搶鎖、
殺掉舊的**。

常見誤踩情境：手動重啟時漏帶某個參數，跟另一個已經用捷徑腳本啟動的 session 同時存在 → 兩個
poller 互踢，訊息完全收不到。

**解法**：只用同一支啟動腳本啟動，不要手動組指令；懷疑撞车時用
```powershell
Get-CimInstance Win32_Process -Filter "Name='claude.exe'" | Where-Object { $_.CommandLine -like "*telegram*" }
```
列出所有相關 process，全部 kill 掉只留一個再重啟。

> 若真的需要「兩台電腦同時用」，不是搶同一個 bot，而是用 `/newbot` 另外建一個 bot、各自的 token。

### 坑 2：MCP server 顯示 failed，但畫面看起來一切正常
`claude-tg` 啟動後畫面顯示 `Channels: Listening...`，看起來正常，但 Telegram 完全收不到訊息也送不出
回覆。跑 `/status` 會看到 `MCP servers: N connected, 1 failed`，`/mcp` 進去看是 telegram 那項
`Status: ✗ failed`。

**解法（目前唯一確認有效）**：`/mcp` → 選 telegram → **Reconnect**。Reconnect 後會立刻收到所有卡在
佇列裡的舊訊息（Telegram 端會暫存未確認的訊息，不會遺失，只是延遲送達）。

> 根因未完全查清，較可能是 bun 進程第一次啟動（compile/resolve）比 Claude Code 內建的 MCP 連線
> timeout 還慢，導致首次握手判定失敗。已排除的假設：雙 poller 衝突、bun 不在 PATH、PID 鎖檔卡死
> ——這三個都試過清除但問題依舊，才確認是連線本身的問題，Reconnect 對治。

**診斷順序**：`/status` 看到 telegram 是 `failed` → 直接跳 `/mcp` Reconnect，不用先查 process/PATH；
只有 `/status` 顯示 telegram 是 `connected` 但還收不到訊息時，才需要往下查是不是坑 1（雙 poller）。

> ⚠️ Reconnect 後如果佇列裡有卡住的舊訊息（例如測試時亂傳的假訊息），會被當作「現在收到」實際
> 執行——如果你的 Claude 設定了會改檔案/外部系統的自動化指令，Reconnect 前先想清楚會不會誤觸發。

### 坑 3：不要用背景工具（sandbox / Start-Process）啟動常駐監聽 session
用工具腳本或 `Start-Process` 在背景開 `claude-tg`，外觀完全正常（process 活著、顯示
`Channels: Listening...`），但**從未真正連上**過（`bot.pid` 不會被寫入）。推測是背景 shell 繼承的
PATH/環境跟使用者自己開的終端機不同（例如剛裝好 bun、User PATH 更新了，但已經在跑的舊 shell 不會
反映新值）。

**結論**：常駐監聽的 session，一律在**自己實際打開的終端機**手動執行啟動指令，不要透過腳本/工具
背景啟動。

### 坑 4：Context compaction 會把 MCP server 一起殺掉
Claude Code 對話 context 太長時會自動壓縮（context compaction），過程會終止所有 MCP server 並開新
session。如果壓縮發生時剛好沒有待處理工作，新 session 會在 20-30 秒內自然結束，Telegram bot 也跟著
死掉——之後每次壓縮（大約每 30 分鐘一次）都重演一次「活 20-30 秒又斷」的循環。

**現象**：Telegram 訊息有時有回應、有時沒有，取決於訊息剛好有沒有落在那 20-30 秒的存活窗口內。

**暫時解法**：重啟 Claude Code。（尚無根治方案，設計上是把 Telegram server 綁在 session 生命週期
裡；理想解法是用獨立 process/Stop hook 把它脫鉤，但本機尚未真正做這個。）

### 坑 5：改了 `.claude/commands` 或 skill 檔，bot 行為沒變
常駐 session 不會熱重載 skill/command 檔，只有啟動當下讀一次。改完檔案要讓它生效，必須重啟那個
session（而不是以為它會自動吃到新版本）。

---

## 三、進階：想做「排程自動觸發」（非必要，一般聊天不需要）

如果只是想讓 Claude「收得到你在 Telegram 傳的訊息、能回覆」，上面第一節就完整了，不用看這段。

這段是給「想用 Windows 排程，定時自動送一則指令觸發 Claude 做事（不需要人在旁邊按）」的情境。

### 為什麼不能直接用排程開一個新的 claude 去跑指令
telegram plugin 是全域設定（`~/.claude/settings.json` 的 `enabledPlugins`），**任何** claude 程序一
啟動都會載入它、搶著當那唯一的 poller（見坑 1）。排程另開一個 claude，會把常駐監聽 session 的
bot 搶死，跑完退出又把自己的 bot 一起帶走，留下一段沒人在監聽的死區。

### 也不能用 bot token 自己打 API 送訊息給自己
Telegram 的硬規則：`getUpdates` 只回傳「使用者 → bot」方向的訊息，**bot 自己發出的訊息不會出現在
自己的 getUpdates 裡**，Bot API 也沒有任何方法讓 bot 冒充使用者。所以「排程用 bot token 呼叫
sendMessage 送給自己」看起來成功（API 回應正常），但 plugin 永遠不會觸發任何動作。

### 唯一成立的做法：userbot（個人帳號）送訊息
用 [Telethon](https://docs.telethon.dev/)（Telegram 的 User API / MTProto 函式庫）以**自己的手機
號碼登入**，讓排程呼叫一支 Python 腳本、以「你本人」的身分送一則訊息給 bot。對 plugin 來說這跟你
親手打字一模一樣，而且排程全程**不開 claude**，不會搶 poller。

架構：
```
Windows 排程 → 呼叫 Telethon 腳本（用你自己帳號登入）
  → 送訊息給 bot
  → 常駐監聽 session 收到、當一般 Telegram 訊息處理
```

設定要點：
- 到 https://my.telegram.org 用手機號碼登入 → API development tools → 建一個 app 拿 `api_id` /
  `api_hash`
- 第一次登入必須在**能互動輸入的終端機**跑（要輸入手機收到的驗證碼），之後才會產生 `.session`
  檔，往後排程呼叫才不用再登入
- `.session` 檔等於你 Telegram 帳號的完整存取權，**絕對不要進版控**，務必放進 `.gitignore`
- 常駐監聽 session 必須持續開著——這套架構下「執行者」只有它一個，關掉就沒人處理送進來的訊息

---

## 四、常見問題速查表

| 問題 | 原因 | 解法 |
|------|------|------|
| Bot 沒回配對碼 | 沒以 `--channels` 模式啟動 | 確認啟動指令帶 `--channels` |
| `bun --version` 無法辨識 | PATH 沒生效 | 手動補 PATH，重開 terminal |
| `/telegram:access` 無法辨識 | Plugin 未載入（session 太舊） | 重新啟動 Claude Code |
| 傳訊息給 BotFather 沒反應 | 應該傳給自己建的 bot，不是 BotFather | 搜尋自己的 bot username |
| 改了 command/skill 檔行為沒變 | 常駐 session 不會熱重載 | 重啟 session |
| 看起來在線，訊息時有時無 | 雙 poller 互踢，或 context compaction 週期性斷線 | 先 kill 掉重複 process 只留一個；仍不行就是坑 4，重啟 |
| 畫面正常但完全收不到/送不出 | MCP server 顯示 failed | `/status` 確認 → `/mcp` 選 telegram → Reconnect |
| 背景腳本開的 session 永遠連不上 | 背景 shell 繼承舊 PATH/環境 | 一律在自己實際打開的終端機手動啟動 |

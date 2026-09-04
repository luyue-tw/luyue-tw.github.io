# 呂樾個人網站　自架說明

一份純靜態網站，沒有後端、沒有建置工具、沒有相依套件。把整個資料夾原樣上傳到任何靜態主機即可運作。

## 檔案結構

```
index.html              整個頁面的內容與結構
assets/style.css        全部樣式，含淺色與深色主題
assets/data.js          51 篇隨筆文章的資料（標題、日期、分類、標籤、全文）
assets/site.js          分頁切換、分類篩選、展開全文的程式
files/                  兩篇《成為人以外的》文章的 PDF 全文
.nojekyll               讓 GitHub Pages 不要用 Jekyll 處理，請保留
```

## 本機預覽

用瀏覽器直接開啟 `index.html` 即可，不需要架伺服器。

## 上架方式一：GitHub Pages（免費，適合長期使用）

1. 到 GitHub 建立一個新的 repository，取名為 `你的帳號.github.io`（例如帳號是 `luyue`，就取名 `luyue.github.io`）。設為 Public。
2. 把本資料夾內的所有檔案（含 `assets/`、`files/`、`.nojekyll`）上傳到該 repository 的根目錄。網頁介面可以直接拖曳上傳，但 `.nojekyll` 這種以點開頭的檔案拖曳可能不會顯示，若上傳不到，改用 GitHub Desktop 或 git 指令。
3. 進入 repository 的 Settings → Pages，Source 選 `Deploy from a branch`，branch 選 `main`、資料夾選 `/ (root)`，按 Save。
4. 等一到兩分鐘，網站就會出現在 `https://你的帳號.github.io`。

之後要更新內容，改完檔案重新上傳（或 `git push`）即可，通常一分鐘內生效。

## 上架方式二：Netlify（最快，適合先試看看）

1. 到 netlify.com 註冊並登入。
2. 進入 Sites 頁面，把**整個資料夾**直接拖曳到「Deploy manually」的虛線框裡。
3. 幾秒後會拿到一個 `隨機名稱.netlify.app` 的網址，可在 Site settings → Change site name 改成想要的名字。

更新時再把新的資料夾拖進去覆蓋即可。

## 掛自有網域

兩個平台都支援。買好網域之後：

- **GitHub Pages**：在 repository 根目錄新增一個名為 `CNAME` 的檔案，內容只寫網域本身（例如 `luyue.tw`，不要加 `https://`）。再到網域註冊商的 DNS 設定，把 A 記錄指向 GitHub Pages 的四個 IP，或把 CNAME 指向 `你的帳號.github.io`。
- **Netlify**：Site settings → Domain management → Add custom domain，照畫面指示設定 DNS 即可，Netlify 會自動配發 HTTPS 憑證。

## 要改內容時，改哪個檔案

| 想改的東西 | 檔案 | 找法 |
|---|---|---|
| 姓名、簡介、聯絡方式、專長 | `index.html` | 搜尋 `class="hero"` |
| 刊登文章的條目與連結 | `index.html` | 搜尋 `id="p-pubs"` |
| 松學校影片清單與章次 | `index.html` | 搜尋 `id="p-athon"` |
| 經歷與演講年表 | `index.html` | 搜尋 `id="p-exp"` |
| 隨筆文章的標題與內文 | `assets/data.js` | 每篇是一個物件，`title` 是標題、`text` 是全文 |
| 顏色、字級、間距 | `assets/style.css` | 顏色都集中在檔案開頭的 `:root` 區塊 |

`assets/data.js` 是一整行的 JSON 陣列，手動編輯不易讀。若要大幅調整隨筆內容，建議請 Claude 重新產生這個檔案。

## 字型

頁面從 Google Fonts 載入 Noto Serif TC、Noto Sans TC 與 IBM Plex Mono。若不希望依賴外部服務（例如擔心中國大陸連線問題或載入速度），可以下載字型檔放進 `assets/fonts/`，把 `index.html` 裡的 Google Fonts `<link>` 換成 CSS 的 `@font-face` 宣告。中文字型檔很大，記得做子集化處理。不做這件事也沒關係，字型載入失敗時會自動退回系統的中文字型，版面不會壞掉。

## 深色模式

網站會跟隨瀏覽器或作業系統的深淺色設定自動切換，兩種模式都調過。

## 尚待補齊

- 2023 年 9 月以前的臉書文章：需要重新到 Facebook「下載你的資訊」把日期範圍改成「所有時間」再匯出一次。
- 〈想像一種不止於嘗試同理的「環境藝術」〉與〈複數世界的可能〉目前連到誠品與 Readmoo 的商品頁，若日後有可直接閱讀的網址，換掉即可。

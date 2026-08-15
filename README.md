# 記藝共養所｜GitHub 程式碼覆蓋包

此版本只包含 HTML、CSS 與 JavaScript，不包含或覆蓋 `images/` 資料夾。商品總覽、三個商品詳情頁及 NFC 數位技藝履歷已從零重建；首頁及所有內頁統一使用唯一的 `css/style.css`，避免漏傳第二份樣式後造成內頁失去排版。

## 使用方式

1. 將本壓縮檔解壓縮。
2. 把所有檔案與 `css/`、`js/` 資料夾上傳至 GitHub repository 根目錄。
3. GitHub 出現同名檔案時選擇覆蓋。
4. 保留 repository 中原有的 `images/` 資料夾。

請務必保留壓縮檔中的資料夾結構：`css/style.css` 與 `js/script.js` 不可移到根目錄。首頁 Hero 已恢復為 `css/style.css` 內原本的內嵌圖片，不再依賴 `images/hero.jpg`，因此不會因圖片路徑或檔名而消失。

## 頁面引用的圖片檔名

- `story.jpg`
- `nfc-demo.jpg`
- `umbrella.jpg`
- `umbrella-detail.jpg`
- `bamboo.jpg`
- `bamboo-detail.jpg`
- `chunzihua.jpg`
- `chunzihua-detail.jpg`
- `gallery-01.jpg`
- `gallery-04.jpg`
- `gallery-06.jpg`

若 GitHub 內的照片名稱不同，只需修改各 HTML 的 `images/檔名` 路徑。GitHub Pages 區分英文大小寫，請確認名稱完全一致。

## 測試基準

首頁、商品列表、三個商品詳情頁與 NFC Demo 已完成 1440px 桌面及 390px 手機版面測試：頁面可載入、無水平溢位，並包含可操作的行動版選單。

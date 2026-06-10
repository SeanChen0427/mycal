# MyCal 自訂 HTML 銷售區塊示意

這份示意稿用來說明：在既有「店家 Banner／店名／介紹」與「商品列表」之間，新增一個可由後台編輯的 HTML 內容區塊。

## 開啟方式

直接開啟 `index.html`，或在此目錄啟動靜態伺服器：

```bash
python3 -m http.server 4173
```

瀏覽 `http://localhost:4173`。

## 給工程師的功能規格

1. 插入位置：店家資料卡之後、商品列表標題之前。
2. 後台欄位：Rich Text Editor 或 HTML Editor。
3. 建議支援：標題、段落、粗體、連結、圖片、影片嵌入、按鈕、分隔線與自訂區塊排序。
4. 圖片規則：前台最大寬度 100%，高度自適應，避免手機版水平捲動。
5. 安全規則：儲存與輸出時做 HTML sanitization，不允許任意 script、iframe 網域或 inline event handler。
6. 空值行為：沒有內容時完全不渲染此區塊，不影響原本頁面間距。
7. 行動版：內容容器沿用商店頁寬度，建議 HTML 區塊本身可滿版呈現。

`index.html` 中的 `.custom-html-slot` 就是新增區塊；黃色虛線與標籤只用於需求溝通，正式上線時移除。

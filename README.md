# 课题组公开报告展示页

静态单页站点，用于展示课题组的公开视频、文章、论文解读与开源项目。适合直接放到任意静态托管（GitHub Pages / Vercel / 服务器静态目录）。

## 使用

- 直接用浏览器打开 `index.html` 即可预览。
- 所有内容都在 `app.js` 的 `contentItems` 里维护。

## 如何更新内容

1. 打开 `app.js`
2. 修改 `contentItems` 里的条目：
   - `title` 标题
   - `type` 类型（video/article/paper/repo）
   - `summary` 一句话简介
   - `tags` 标签数组
   - `url` 外链
3. 保存后刷新页面。

## 可选调整

- 视觉风格：`styles.css`
- 页头/简介文案：`index.html`

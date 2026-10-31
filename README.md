# 静心计划

移动端优先的个人计划管理 PWA，数据保存在浏览器本地，支持离线使用、JSON 导入导出和 GitHub Pages 部署。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物位于 `dist/`。Vite 已配置相对路径和 PWA manifest，适合部署到 GitHub Pages。可以通过 GitHub Actions 执行 `npm ci`、`npm run build`，再将 `dist` 发布到 Pages。

## 数据说明

数据使用浏览器 `localStorage` 保存。导出 JSON 会包含任务、完成记录、计时记录、月目标、月末总结、分类、设置以及日历生活记录。导入前建议先导出备份；导入使用稳定 ID，不依赖任务名称匹配。

## 示例数据

应用首次打开为空白状态。可以直接从今日页快速添加任务，或在周计划、月目标页面创建任务和目标。

# DBTI 项目 - Claude Code 工作指引

## 项目信息
- 名称：DBTI（Dual-Based Type Indicator）你眼中的 ta 关系人格镜像测试
- 仓库：dunwood/SBTI-DBTI
- 部署：dbti.zhexueyuan.com（Cloudflare Pages，git push 自动部署）
- 本地：D:\AI Project\SBTI-DBTI
- 基础：fork 自 pingfanfan/SBTI

## 技术约束
- 纯 HTML + JS + CSS，不用任何框架（无 React/Vue/Tailwind/Bootstrap）
- 不建 functions/ 目录（会触发 Cloudflare Pages 全栈模式，破坏 CSS）
- 不用 wrangler CLI 部署（只通过 git push）
- localStorage 做客户端持久化
- Windows 环境

## 铁律
- **自测功能始终可用**：每次 commit 前确认原版自测流程（首页 → 答题 → 结果）无报错
- 自测相关文件一旦稳定后不再修改

## 开发模式
- 增量叠加：在不破坏现有功能的前提下新增他测模式
- task 文件驱动：每个 task 对应一个 taskXX.md

## 署名规范（首页底部）
- 原创：蛆肉儿串儿（B站 UID417038183）
- 开源逆向：pingfanfan/SBTI
- 关系模式 & 他测玩法：哲学园 · 拾柒年蝉 出品

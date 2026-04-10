# Task 01：摸清现有代码结构 + 确保自测流程跑通

## 目标
搞清楚 fork 来的 SBTI 代码结构，确保原版自测功能完整可用，为后续改造打基础。

## 铁律
**从本 task 开始，每次 git push 后线上自测功能必须正常运行。本 task 结束时，自测全链路必须跑通。**

## 步骤

### 1. 分析现有文件结构
- 在 `D:\AI Project\SBTI-DBTI` 目录下，列出所有文件和目录结构（递归到 2 层）
- 找到以下关键文件并记录路径：
  - 主入口 HTML（index.html 或类似）
  - 题目数据（questions / 题库相关 JS 或 JSON）
  - 人格类型定义（types / personalities 相关）
  - 算分引擎（计算维度 → 匹配人格的逻辑）
  - 结果页
  - 样式文件（CSS）
- 把分析结果写入 `docs/codebase-map.md`，格式如下：

```markdown
# SBTI 代码结构分析

## 文件树
（粘贴目录结构）

## 关键文件定位
| 功能 | 文件路径 | 说明 |
|------|---------|------|
| 主入口 | ... | ... |
| 题库数据 | ... | ... |
| 类型定义 | ... | ... |
| 算分引擎 | ... | ... |
| 结果页 | ... | ... |
| 样式 | ... | ... |

## 算法核心逻辑摘要
（简要描述：多少题 → 多少维度 → 怎么映射 → 怎么匹配类型）

## 特殊机制
（DRUNK 彩蛋、HHHH 兜底等）
```

### 2. 本地验证自测流程
- 在本地用浏览器打开主入口页面，确认以下流程跑通：
  - 首页加载正常
  - 能进入答题
  - 能完成全部题目
  - 能看到结果页（人格类型 + 描述）
- 如果有任何报错或路径问题，修复它

### 3. 创建 CLAUDE.md
在项目根目录创建 `CLAUDE.md`：

```markdown
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
```

### 4. 提交
```bash
git add -A
git commit -m "task01: 分析代码结构 + 确保自测跑通 + 创建 CLAUDE.md"
git push origin main
```

## 完成标准
- [ ] `docs/codebase-map.md` 已生成，内容完整
- [ ] `CLAUDE.md` 已创建
- [ ] 自测全链路可用（首页 → 31题 → 结果页）
- [ ] 已 push 到 GitHub

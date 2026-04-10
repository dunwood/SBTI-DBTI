# SBTI 代码结构分析

## 文件树

```
SBTI-DBTI/
├── index.html              # 主入口 HTML（SPA 三页全在此）
├── vite.config.js          # Vite 构建配置
├── package.json
├── data/                   # 静态数据层（纯 JSON）
│   ├── questions.json      # 题库：30 道主题目 + 2 道酒鬼门题
│   ├── dimensions.json     # 15 个维度定义 + 顺序 + 中英文说明
│   ├── types.json          # 25 个标准人格 + 2 个特殊人格
│   └── config.json         # 评分阈值 / 显示文案 / 酒鬼门配置
├── src/                    # 业务逻辑层（ES Module）
│   ├── main.js             # 初始化入口：加载 JSON，绑定页面跳转
│   ├── quiz.js             # 答题控制器：题目队列、进度、酒鬼门插入
│   ├── engine.js           # 评分引擎（纯函数）：算分 → 等级 → 匹配类型
│   ├── result.js           # 结果渲染：填充 DOM、雷达图、TOP5、下载
│   ├── chart.js            # Canvas 雷达图绘制
│   ├── share.js            # 生成可下载的分享图片（Canvas 合成）
│   ├── utils.js            # 工具函数：shuffle、insertAtRandom、insertAfter
│   └── style.css           # 全局样式（CSS Variables + 组件样式）
├── public/                 # 静态资源直出
│   └── CNAME               # Cloudflare Pages 自定义域名
├── dist/                   # Vite 构建产物（不提交）
│   ├── index.html
│   └── assets/
└── docs/                   # 项目文档
    └── codebase-map.md     # 本文件
```

## 关键文件定位

| 功能 | 文件路径 | 说明 |
|------|---------|------|
| 主入口 | `index.html` | SPA 结构，包含三个 section：首页/答题/结果 |
| 题库数据 | `data/questions.json` | 30 道主题 + 2 道酒鬼门特殊题 |
| 维度定义 | `data/dimensions.json` | 15 个维度的中文名、所属模型、L/M/H 三级描述 |
| 类型定义 | `data/types.json` | 25 个标准人格 + HHHH/DRUNK 两个特殊人格 |
| 算分配置 | `data/config.json` | 分级阈值、免责声明文案、酒鬼门触发配置 |
| 答题控制器 | `src/quiz.js` | 题目洗牌、队列管理、酒鬼门插题逻辑 |
| 算分引擎 | `src/engine.js` | 维度求和 → L/M/H 等级 → 曼哈顿距离匹配 |
| 结果渲染 | `src/result.js` | 填充结果页 DOM，触发雷达图和分享图 |
| 样式 | `src/style.css` | CSS Variables 主题 + 所有组件样式（465 行） |
| 雷达图 | `src/chart.js` | Canvas 绘制 15 维度雷达图 |
| 分享图 | `src/share.js` | Canvas 合成人格卡片，支持下载 |

## 算法核心逻辑摘要

```
31 题（30 主 + 1 酒鬼门）
  ↓ quiz.js：随机洗牌，每题 3 选项，值 1/2/3
  ↓ engine.calcDimensionScores()
15 个维度得分（每维度 2 题相加，范围 2-6）
  ↓ engine.scoresToLevels()  阈值：L=[2-3], M=[4], H=[5-6]
15 维度等级向量 { S1:'H', S2:'L', ... }
  ↓ engine.determineResult()
  ↓ 对 25 个标准人格 pattern 逐一计算曼哈顿距离
  ↓ 排序：距离升序 → 精准命中降序 → 相似度降序
最终人格匹配结果（主 + 次 + TOP5 榜单）
```

**维度体系：** 5 个模型 × 3 个维度 = 15 维
- S（自我模型）：S1 自尊自信 / S2 自我清晰度 / S3 核心价值
- E（情感模型）：E1 依恋安全感 / E2 情感投入度 / E3 边界与依赖
- A（态度模型）：A1 世界观倾向 / A2 规则与灵活度 / A3 人生意义感
- Ac（行动驱力）：Ac1 动机导向 / Ac2 决策风格 / Ac3 执行模式
- So（社交模型）：So1 社交主动性 / So2 人际边界感 / So3 表达与真实度

**相似度计算：** `similarity = max(0, round((1 - distance/30) * 100))`，满分 100%

## 特殊机制

### DRUNK 彩蛋
- 酒鬼门题 `drink_gate_q1` 随机插入主题队列
- 如果用户选择"饮酒"（value=3），立即插入追问 `drink_gate_q2`
- 追问选"已经喝多了"（value=2）→ `isDrunk=true`
- 结果页强制覆盖为 DRUNK 人格，显示"隐藏人格已激活"
- 次要匹配展示算分最佳的标准人格

### HHHH 傻乐者兜底
- 当最佳匹配相似度 < 60% 时触发
- 结果页显示"系统强制兜底"
- 替换为 HHHH 人格，次要展示原计算最佳

### 人格数量
- 标准人格：25 个（CTRL、ATM-er、Dior-s、BOSS 等）
- 特殊人格：2 个（HHHH 傻乐者、DRUNK 酒鬼）

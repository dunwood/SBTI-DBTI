# Task 04：他测结果页 — 三层结构 + 观察风格 + 分享卡

## 前置
- 已完成 task01~03
- 请先读取 `CLAUDE.md` 和 `docs/codebase-map.md`

## 目标
实现他测模式的完整结果页，包含三层内容：ta 的人格、你的观察风格、邀请对照入口。同时生成可分享的结果长图。

## 步骤

### 1. 第一层：ta 在你眼中的人格

从 localStorage 读取 `dbti_other_result`，展示：

- 标题：「你眼中的 [代号]」
- 人格类型：大字显示类型代码和中文名（如 `FAKE 伪人`）
- 人格描述：使用**他测专用描述**（而非原版自测描述）

**他测专用描述** 需要为 27 种人格各写一段，语气从自述改为旁观。存入 `data/type-desc-other.js`（或 JSON）。

以下是 6 个示范，其余 21 个由你按此风格补全：

```javascript
const otherDescriptions = {
  "CTRL": "在你眼中 ta 就是那种走进房间就自动成为中心的人。不是因为声大，是因为气场摆在那里。你有时候不确定 ta 是真的运筹帷幄，还是装得特别像。",
  "FAKE": "你总觉得 ta 有好几层，你看到的可能连第二层都不是。ta 在不同人面前像不同的人，你偶尔会想：到底哪个才是真的？",
  "MONK": "ta 给你的感觉是什么都不太在乎。但你说不清这是活明白了还是死心了。ta 好像很少焦虑，也很少真正兴奋。",
  "SOLO": "ta 好像永远有一个谁都走不进去的角落。不是不欢迎，是那里本来就没有门。你偶尔想靠近，但总觉得有一层看不见的东西挡着。",
  "SEXY": "ta 身上有一种说不清的吸引力。不一定是外表，更像是某种自信和松弛感的混合。你不确定 ta 是不是故意的，但效果很明显。",
  "DEAD": "你觉得 ta 对很多事已经失去反应了。不是冷，是那种「已读不回人生」的感觉。你偶尔替 ta 着急，但 ta 好像比你更不在乎。"
  // ... 其余 21 种由 Claude Code 补全
};
```

**要求：** 每段描述 50~80 字，语气荒诞但不伤人，保持原版的"毒舌但有分寸"风格。避免直接负面定性。

- 雷达图：用 Canvas 或 SVG 绘制 15 维度雷达图（如果原版有雷达图组件，直接复用）

### 2. 第二层：你的观察风格

基于他测答题数据计算观察风格。

**算法（新建 `js/observer-style.js`）：**

```javascript
function calculateObserverStyle(levels) {
  // levels: 长度 15 的数组，值为 'H'/'M'/'L'
  const highCount = levels.filter(l => l === 'H').length;
  const lowCount = levels.filter(l => l === 'L').length;
  const midCount = levels.filter(l => l === 'M').length;
  
  const beautifyIndex = highCount / 15;
  const harshIndex = lowCount / 15;
  const vagueIndex = midCount / 15;
  const extremeRate = (highCount + lowCount) / 15;
  
  // 判定优先级从上到下
  if (beautifyIndex >= 0.6) return 'high_filter';
  if (harshIndex >= 0.6) return 'high_guard';
  if (extremeRate >= 0.7) return 'high_fantasy';
  if (vagueIndex >= 0.6) return 'high_vague';
  if (beautifyIndex >= 0.4 && beautifyIndex < 0.6 && harshIndex < 0.3) return 'high_empathy';
  
  // 默认
  return 'high_empathy';
}
```

**观察风格文案（存入 `data/observer-styles.js`）：**

```javascript
const observerStyles = {
  high_filter: {
    name: "人间柔光灯",
    tagline: "你看人自带柔光，连缺点都能拍出质感",
    desc: "你倾向于看到别人好的一面，甚至会自动补全一些对方可能并不具备的优点。这不一定是坏事，只是当现实打脸时，你会比别人更痛一点。"
  },
  high_guard: {
    name: "人形测谎仪",
    tagline: "你看人像在做背景调查，连微笑都要验真伪",
    desc: "你对人的评价偏向谨慎和质疑。你可能不是真的觉得对方不好，只是习惯先做最坏打算。你在关系里提供的不是温度，是安全感。"
  },
  high_fantasy: {
    name: "剧本创作者",
    tagline: "你对 ta 的理解非常笃定，只是不确定是理解还是想象",
    desc: "你对 ta 的判断很极端——要么很高要么很低，中间地带很少。这种笃定有多少来自真正了解，有多少来自脑补剧情，只有你自己知道。"
  },
  high_empathy: {
    name: "均衡观察员",
    tagline: "你看人挺准的，大概",
    desc: "你对 ta 的观察比较均衡，既看到优点也注意到不足。这说明你们的关系大概率是比较放松的，或者你天生就是那种不容易被滤镜骗的人。"
  },
  high_vague: {
    name: "雾里看花人",
    tagline: "你好像没那么懂 ta",
    desc: "你在很多维度上给出了中间答案。这可能意味着你们接触不够深，或者 ta 本身就是一个让人看不透的人——当然也可能你只是答题时在走神。"
  }
};
```

在结果页第二区块显示：
- 标签名（如「人间柔光灯」）
- 一句话标语
- 详细描述

### 3. 第三层：邀请对照入口

显示一个按钮：「发给 ta，让 ta 亲自测」

点击后：
- 生成一个 8 位随机 sessionId
- 将当前他测结果存入 `localStorage['dbti_session_' + sessionId]`
- 生成邀请链接：`dbti.zhexueyuan.com/self-test.html?invite={sessionId}`
- 展示链接 + 复制按钮
- 提示文案：「ta 完成自测后，回到这里就能看到你们的认知偏差报告」

（对照页功能在 task05 实现）

### 4. 分享长图生成

新建 `js/share.js`，用 Canvas 生成分享卡：

**卡片尺寸：** 750 × 1000px（适合手机屏幕和朋友圈）

**卡片内容：**
```
┌──────────────────────────┐
│                          │
│   我眼中的「某前任」       │
│                          │
│   FAKE 伪人              │
│   「你看到的可能           │
│     连第二层都不是」       │
│                          │
│   ─────────────          │
│                          │
│   我的观察风格：人间柔光灯  │
│   「你看人自带柔光」       │
│                          │
│   ─────────────          │
│                          │
│   dbti.zhexueyuan.com    │
│   仅供娱乐 · DBTI 镜像测试 │
└──────────────────────────┘
```

- 暗色背景，与网站风格一致
- 点击「生成分享卡」按钮 → 用 Canvas 绘制 → 转 PNG → 提供下载 / 长按保存

### 5. 验证

- 自测流程完全不受影响
- 他测全流程：首页 → 我眼中的 ta → 选关系 → 30 题 → 结果页三层内容完整
- 分享卡可生成和下载
- 邀请链接可复制

### 6. 提交

```bash
git add -A
git commit -m "task04: 他测结果页三层结构+观察风格+分享卡+邀请入口"
git push origin main
```

## 完成标准
- [ ] 27 种人格的他测专用描述全部写完
- [ ] 观察风格算法和 5 种风格文案完整
- [ ] 结果页三层结构展示正常
- [ ] 分享长图可生成下载
- [ ] 邀请链接可复制
- [ ] 自测无损
- [ ] 已 push

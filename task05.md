# Task 05：偏差对照页 — 认知偏差报告 + 对照分享卡

## 前置
- 已完成 task01~04
- 请先读取 `CLAUDE.md` 和 `docs/codebase-map.md`

## 目标
当被测者（ta）通过邀请链接完成自测后，生成一个「认知偏差报告」页面，展示双方视角的差异。

## 步骤

### 1. 邀请链接自测流程适配

修改 `self-test.html`（自测页面）：
- 检查 URL 是否含 `?invite=xxxx` 参数
- 如果有，正常完成自测流程后，除了展示常规自测结果外，额外将自测的 15 维向量存入 `localStorage['dbti_session_xxxx_self']`
- 自测结果页底部增加一个按钮：「查看 ta 眼中的你」→ 跳转到 `compare.html?id=xxxx`

**注意：不要影响无 invite 参数时的正常自测流程。**

### 2. 偏差对照页 compare.html

从 localStorage 读取两份数据：
- `dbti_session_{id}`：别人替你测的结果（他测向量 + 人格类型）
- `dbti_session_{id}_self`：你自己测的结果（自测向量 + 人格类型）

如果任一数据缺失，显示友好提示：「对照数据不完整，可能 ta 还没完成测试，或者数据在另一台设备上。」+ 返回首页链接。

### 3. 偏差算法

新建 `js/compare.js`：

```javascript
function calculateDeviation(otherVector, selfVector) {
  // 两个长度 15 的数值数组（L=1, M=2, H=3）
  let totalDiff = 0;
  const maxDiff = 30; // 每维度最大差 2，共 15 维
  const dimensionDiffs = [];
  
  for (let i = 0; i < 15; i++) {
    const diff = Math.abs(otherVector[i] - selfVector[i]);
    totalDiff += diff;
    dimensionDiffs.push(diff);
  }
  
  const deviationPercent = Math.round((totalDiff / maxDiff) * 100);
  
  return {
    totalDiff,
    deviationPercent,
    dimensionDiffs,
    level: getDeviationLevel(deviationPercent)
  };
}

function getDeviationLevel(percent) {
  if (percent <= 15) return 'soulmate';    // 知己
  if (percent <= 30) return 'familiar';    // 熟人
  if (percent <= 50) return 'halfknown';   // 半生不熟
  if (percent <= 70) return 'parallel';    // 平行世界
  return 'misread';                        // 完全误读
}
```

### 4. 偏差文案库

新建 `data/gap-quotes.js`：

```javascript
const deviationLevels = {
  soulmate: {
    name: "知己",
    quote: "你简直是 ta 肚子里的蛔虫",
    desc: "你对 ta 的了解程度令人发指。要么你们真的很亲近，要么你是天生的读心者。"
  },
  familiar: {
    name: "熟人",
    quote: "你挺懂 ta，但有些地方靠猜",
    desc: "大方向你看得挺准，但细节上偶尔会脑补。这在大多数关系里已经算很不错了。"
  },
  halfknown: {
    name: "半生不熟",
    quote: "你对 ta 的理解，介于知己与瞎猜之间",
    desc: "你懂 ta 一半，剩下一半靠想象。不过话说回来，完全懂一个人本来就不太现实。"
  },
  parallel: {
    name: "平行世界",
    quote: "你俩的理解之间隔着一整条高速公路",
    desc: "你以为的 ta 和 ta 以为的自己，基本上是两个人。建议你们找个机会好好聊聊——或者算了，可能聊了更迷惑。"
  },
  misread: {
    name: "完全误读",
    quote: "你认识的 ta 和 ta 认识的自己，可能不是同一个人",
    desc: "偏差已经大到让人怀疑你们到底认不认识。但别灰心，也许 ta 对自己的了解也没那么准。"
  }
};

// 维度级对比金句（按维度编号，每个维度准备 2~3 句，随机选）
const dimensionGapQuotes = {
  // S1 自尊自信
  0: [
    "你觉得 ta 很自信，ta 觉得自己不过是硬撑",
    "你觉得 ta 不太自信，ta 觉得自己只是低调"
  ],
  // E1 依恋安全感
  3: [
    "你觉得 ta 很冷，ta 觉得自己只是懒得解释",
    "你觉得 ta 很黏人，ta 觉得自己只是在乎你"
  ],
  // So3 表达与真实度
  14: [
    "你觉得 ta 很装，ta 觉得自己只是会社交",
    "你觉得 ta 表里如一，ta 觉得自己只是懒得伪装"
  ]
  // ... 其余维度由 Claude Code 补全，每维度 2~3 句
};
```

**要求：** 15 个维度各准备 2~3 句金句，语气毒舌但不伤人。在偏差较大的维度（dimensionDiffs >= 2）中随机选 3~5 句展示。

### 5. 对照页布局

```
┌────────────────────────────────────┐
│  认知偏差报告                        │
│                                    │
│  [代号] 自测结果：MONK 僧人          │
│  你眼中的 [代号]：FAKE 伪人          │
│                                    │
│  ━━━━━━━━━━━━━━━                   │
│  认知偏差：61%                       │
│  等级：平行世界                      │
│  「你俩的理解之间隔着一整条高速公路」    │
│  ━━━━━━━━━━━━━━━                   │
│                                    │
│  [双线雷达图：红线=他测，蓝线=自测]    │
│                                    │
│  维度金句（选 3~5 句偏差最大的）：     │
│  · 你觉得 ta 很冷，ta 觉得自己       │
│    只是懒得解释                      │
│  · 你觉得 ta 很装，ta 觉得自己       │
│    只是会社交                        │
│  · ...                             │
│                                    │
│  [生成对照分享卡]  [再测一个人]  [首页] │
└────────────────────────────────────┘
```

### 6. 对照分享卡

在 `js/share.js` 中新增对照卡生成函数：

**卡片内容：**
```
我眼中的 ta：FAKE 伪人
ta 自测结果：MONK 僧人

认知偏差：61%
「你俩的理解之间隔着一整条高速公路」

dbti.zhexueyuan.com
仅供娱乐 · DBTI 镜像测试
```

### 7. 验证

- 自测流程不受影响（无 invite 参数时一切如常）
- 完整闭环测试：
  1. 用户 A 在 other-test 测完 → 结果页 → 点击邀请 → 复制链接
  2. 在同一浏览器打开邀请链接 → 完成自测 → 点击「查看 ta 眼中的你」
  3. 跳转到 compare.html → 看到完整偏差报告
- 对照分享卡可生成

### 8. 提交

```bash
git add -A
git commit -m "task05: 偏差对照页+对照算法+维度金句+对照分享卡 (Phase 1 MVP完成)"
git push origin main
```

## 完成标准
- [ ] 邀请链接自测流程正常（带 invite 参数时额外存数据）
- [ ] 偏差对照页完整展示（双结果 + 偏差百分比 + 等级 + 金句 + 双线雷达图）
- [ ] 15 个维度各有 2~3 句对比金句
- [ ] 对照分享卡可生成
- [ ] 自测无损
- [ ] 已 push
- [ ] **Phase 1 MVP 全部完成：首页 → 自测 → 他测 → 结果 → 邀请 → 对照**

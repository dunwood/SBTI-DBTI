/**
 * 他测题库：30 道观察型题目，覆盖 15 个维度（每维度 2 题）
 * 数据结构与自测题库一致：{ id, dim, text, options: [{label, value}] }
 * value 范围 1-3，与原版算分引擎兼容
 */
const questionsOther = [

  // ===== 第一批 15 题（每维度第 1 题）=====

  // S1 自尊自信
  {
    id: 'other_q01',
    dim: 'S1',
    text: 'ta 被当面否定后，更常见的反应是：',
    options: [
      { label: '当场反驳，据理力争', value: 3 },
      { label: '表面不在意，回头琢磨半天', value: 2 },
      { label: '笑笑就过了，懒得争', value: 2 },
      { label: '明显受伤，但嘴上不说', value: 1 },
    ],
  },

  // S2 自我清晰度
  {
    id: 'other_q02',
    dim: 'S2',
    text: 'ta 做重大决定（换工作、分手等）时的风格是：',
    options: [
      { label: '突然宣布已经决定了，谁也拦不住', value: 3 },
      { label: '跟很多人聊，但最后还是自己拿主意', value: 2 },
      { label: '反复纠结，今天想这样明天想那样', value: 1 },
      { label: '别人怎么说就怎么做', value: 1 },
    ],
  },

  // S3 核心价值
  {
    id: 'other_q03',
    dim: 'S3',
    text: 'ta 花钱的风格更像：',
    options: [
      { label: '对自己很舍得，享受型消费不眨眼', value: 3 },
      { label: '该花花该省省，有自己的优先级', value: 2 },
      { label: '对别人大方，对自己抠门', value: 2 },
      { label: '什么都舍不得，除非迫不得已', value: 1 },
    ],
  },

  // E1 依恋安全感
  {
    id: 'other_q04',
    dim: 'E1',
    text: 'ta 超过半天没回消息时，你觉得更可能是：',
    options: [
      { label: '真有事，忙完就回', value: 3 },
      { label: '看到了但晚点回', value: 2 },
      { label: '不想回', value: 1 },
      { label: '心情不好在躲人', value: 1 },
    ],
  },

  // E2 情感投入度
  {
    id: 'other_q05',
    dim: 'E2',
    text: 'ta 在关系里更常被人吐槽的是：',
    options: [
      { label: '太热情了，有时让人有压力', value: 3 },
      { label: '挺上心的，但不太会表达', value: 2 },
      { label: '若即若离，忽冷忽热', value: 1 },
      { label: '好像谁都无所谓', value: 1 },
    ],
  },

  // E3 边界与依赖
  {
    id: 'other_q06',
    dim: 'E3',
    text: 'ta 跟最亲近的人闹矛盾后，更常见的状态是：',
    options: [
      { label: '当场摊开，不过夜', value: 3 },
      { label: '冷处理一阵子再主动找', value: 2 },
      { label: '嘴上说没事，但明显在闹别扭', value: 1 },
      { label: '直接消失一段时间', value: 1 },
    ],
  },

  // A1 世界观倾向
  {
    id: 'other_q07',
    dim: 'A1',
    text: 'ta 聊到社会新闻或热点事件时，更像哪种风格：',
    options: [
      { label: '觉得世界还是好人多，总能看到积极面', value: 3 },
      { label: '理性分析，不太带个人情绪', value: 2 },
      { label: '动不动就「这个世界就是这样」', value: 1 },
      { label: '基本不关心，刷到就划走', value: 2 },
    ],
  },

  // A2 规则与灵活度
  {
    id: 'other_q08',
    dim: 'A2',
    text: 'ta 排队时前面有人插队，更可能的反应是：',
    options: [
      { label: '直接说「请排队」', value: 3 },
      { label: '不说但心里骂半天', value: 2 },
      { label: '看情况，闹太过分才出声', value: 2 },
      { label: '无所谓，又不差这几分钟', value: 1 },
    ],
  },

  // A3 人生意义感
  {
    id: 'other_q09',
    dim: 'A3',
    text: 'ta 提到未来或人生目标时，你的感觉是：',
    options: [
      { label: 'ta 很清楚自己要什么，而且在行动', value: 3 },
      { label: '有模糊的方向，但经常变', value: 2 },
      { label: '嘴上说无所谓，但偶尔能看出 ta 在想', value: 2 },
      { label: '好像真的不太想这种事', value: 1 },
    ],
  },

  // Ac1 动机导向
  {
    id: 'other_q10',
    dim: 'Ac1',
    text: '如果要用一个词形容 ta 做事的驱动力：',
    options: [
      { label: '要赢 / 要证明自己', value: 3 },
      { label: '好奇心 / 觉得好玩', value: 2 },
      { label: '责任感 / 不得不做', value: 2 },
      { label: '没什么特别动力，随缘', value: 1 },
    ],
  },

  // Ac2 决策风格
  {
    id: 'other_q11',
    dim: 'Ac2',
    text: 'ta 去餐厅点菜的风格是：',
    options: [
      { label: '打开菜单三秒就决定了', value: 3 },
      { label: '看一遍菜单，选两三个比一下', value: 2 },
      { label: '问同行的人「你们点什么」然后跟着选', value: 1 },
      { label: '翻来覆去犹豫不决，菜上了还在后悔', value: 1 },
    ],
  },

  // Ac3 执行模式
  {
    id: 'other_q12',
    dim: 'Ac3',
    text: 'ta 说「明天开始健身 / 学 XX / 早睡」，你的第一反应是：',
    options: [
      { label: 'ta 说到做到的概率很高', value: 3 },
      { label: '大概会做几天然后不了了之', value: 2 },
      { label: '只是说说，不用当真', value: 1 },
      { label: 'ta 这句话已经说过很多次了', value: 1 },
    ],
  },

  // So1 社交主动性
  {
    id: 'other_q13',
    dim: 'So1',
    text: 'ta 在多人聚会中更像：',
    options: [
      { label: '全场焦点，到处招呼人', value: 3 },
      { label: '跟认识的人聊得挺开，不主动认识新人', value: 2 },
      { label: '安静待着，被搭话才聊', value: 1 },
      { label: '能不去就不去', value: 1 },
    ],
  },

  // So2 人际边界感
  {
    id: 'other_q14',
    dim: 'So2',
    text: 'ta 被别人打探隐私时：',
    options: [
      { label: '礼貌但坚定地拒绝回答', value: 3 },
      { label: '模糊带过，不正面回应', value: 2 },
      { label: '虽然不太想说但还是说了', value: 1 },
      { label: '完全不在意，什么都可以聊', value: 2 },
    ],
  },

  // So3 表达与真实度
  {
    id: 'other_q15',
    dim: 'So3',
    text: '你觉得 ta 在社交场合展现的样子和私下差别大吗：',
    options: [
      { label: '几乎没差别，ta 什么场合都是那个样', value: 3 },
      { label: '有一些调整，但大体一致', value: 2 },
      { label: '差挺多的，像两个人', value: 1 },
      { label: '我也不确定哪个是真的 ta', value: 1 },
    ],
  },

  // ===== 第二批 15 题（每维度第 2 题）=====

  // S1 自尊自信
  {
    id: 'other_q16',
    dim: 'S1',
    text: 'ta 在一群人中做了件蠢事，之后更可能：',
    options: [
      { label: '带头把这事变成段子讲，比谁都能笑', value: 3 },
      { label: '嘴上假装没事，但回去会默默回放一遍', value: 2 },
      { label: '低调很久，恨不得没人记得', value: 1 },
      { label: '当场脸红，之后连那个群也不太想进了', value: 1 },
    ],
  },

  // S2 自我清晰度
  {
    id: 'other_q17',
    dim: 'S2',
    text: '以你对 ta 的了解，ta 对自己的评价准不准：',
    options: [
      { label: '非常准，ta 很了解自己，甚至有点坦然', value: 3 },
      { label: '大致准，但对某些缺点明显有盲区', value: 2 },
      { label: '时准时不准，状态好不好影响很大', value: 1 },
      { label: '感觉 ta 的自我认知跟我看到的差挺多', value: 1 },
    ],
  },

  // S3 核心价值
  {
    id: 'other_q18',
    dim: 'S3',
    text: 'ta 遇到一件「做了值得，不做也无所谓」的事，更可能：',
    options: [
      { label: '去做，觉得值得就干，不留遗憾', value: 3 },
      { label: '看心情，状态好就去，状态差就算了', value: 2 },
      { label: '大概率不去，懒得折腾', value: 1 },
      { label: '问一圈有没有人一起，没人陪就不去', value: 2 },
    ],
  },

  // E1 依恋安全感
  {
    id: 'other_q19',
    dim: 'E1',
    text: '你知道 ta 最近跟某个 ta 不熟的人走得比较近，ta 的反应更可能是：',
    options: [
      { label: '完全不在意，信任为主，不会多想', value: 3 },
      { label: '好奇问一嘴，不会上纲上线', value: 2 },
      { label: '表面没表示，但你能感觉到微妙的变化', value: 1 },
      { label: '会明显表现出不舒服，或者反复追问', value: 1 },
    ],
  },

  // E2 情感投入度
  {
    id: 'other_q20',
    dim: 'E2',
    text: '你们关系最近有些冷淡，ta 更可能：',
    options: [
      { label: '主动说「感觉我们最近联系少了」', value: 3 },
      { label: '用行动弥补，比如约出来或发些有的没的', value: 2 },
      { label: '等你先动，ta 不会主动提', value: 1 },
      { label: '好像根本没意识到有什么变化', value: 1 },
    ],
  },

  // E3 边界与依赖
  {
    id: 'other_q21',
    dim: 'E3',
    text: 'ta 一个人独处或独自旅行的频率，大概是：',
    options: [
      { label: '很少，喜欢和人在一起，独处会不舒服', value: 1 },
      { label: '偶尔，需要充电但不多', value: 2 },
      { label: '比较频繁，独处是刚需，不然会烦', value: 3 },
      { label: '没规律，有机会就去，没有也无所谓', value: 2 },
    ],
  },

  // A1 世界观倾向
  {
    id: 'other_q22',
    dim: 'A1',
    text: 'ta 去陌生城市需要向路人问路，ta 更可能：',
    options: [
      { label: '直接问，觉得大部分人都愿意帮忙', value: 3 },
      { label: '先观察一下这个人靠不靠谱再决定', value: 2 },
      { label: '宁可自己找，不想麻烦别人也不想被坑', value: 1 },
      { label: '直接看手机导航，不找人问', value: 2 },
    ],
  },

  // A2 规则与灵活度
  {
    id: 'other_q23',
    dim: 'A2',
    text: 'ta 参加一个「需要在规定时间段内签到」的活动，ta 更可能：',
    options: [
      { label: '提前到，绝对不踩点，就怕出意外', value: 3 },
      { label: '基本准时，偶尔晚个几分钟', value: 2 },
      { label: '能应付就行，规则是参考不是命令', value: 1 },
      { label: '到了就到了，没到也懒得解释', value: 1 },
    ],
  },

  // A3 人生意义感
  {
    id: 'other_q24',
    dim: 'A3',
    text: '在你们聊天里，ta 主动提「想做某件事/某个目标」的频率：',
    options: [
      { label: '经常，ta 总有新想法，而且在推进', value: 3 },
      { label: '偶尔，大部分时候聊的是当下的事', value: 2 },
      { label: '很少，ta 更多在聊眼前有什么', value: 1 },
      { label: '基本没有，ta 好像不太想未来的事', value: 1 },
    ],
  },

  // Ac1 动机导向
  {
    id: 'other_q25',
    dim: 'Ac1',
    text: 'ta 做一件事失败了，更可能的反应是：',
    options: [
      { label: '分析哪里出了问题，准备重来', value: 3 },
      { label: '失落一阵，但最终能想开、继续', value: 2 },
      { label: '安慰自己「本来也没那么想要」', value: 1 },
      { label: '直接放弃，不想再提这件事', value: 1 },
    ],
  },

  // Ac2 决策风格
  {
    id: 'other_q26',
    dim: 'Ac2',
    text: '你们要一起选旅行目的地，ta 更可能：',
    options: [
      { label: '5 分钟内拍板，直接说「就去这」', value: 3 },
      { label: '搜一下攻略，列几个选项让大家投票', value: 2 },
      { label: '说「我都行，你们定」然后跟着走', value: 1 },
      { label: '选了又觉得不好，反复改了好几次', value: 1 },
    ],
  },

  // Ac3 执行模式
  {
    id: 'other_q27',
    dim: 'Ac3',
    text: 'ta 手头有个没做完的任务，ta 面对它的状态通常是：',
    options: [
      { label: '不做完心里不踏实，会一直惦记', value: 3 },
      { label: '有时积极有时拖，看当天状态', value: 2 },
      { label: '明知道要做，但能拖就拖', value: 1 },
      { label: '找各种理由先做别的，那个任务？以后再说', value: 1 },
    ],
  },

  // So1 社交主动性
  {
    id: 'other_q28',
    dim: 'So1',
    text: '你们第一次认识时，是怎么开始的：',
    options: [
      { label: 'ta 主动来搭话的', value: 3 },
      { label: '我搭 ta 的，但 ta 很快就接上了', value: 2 },
      { label: '被人介绍的，ta 不太主动', value: 1 },
      { label: '一起的场合自然就认识了，谁也没特别主动', value: 1 },
    ],
  },

  // So2 人际边界感
  {
    id: 'other_q29',
    dim: 'So2',
    text: 'ta 跟认识不久的人聊天，会主动聊到私人话题吗：',
    options: [
      { label: '基本不会，刚认识就还是聊表面的', value: 3 },
      { label: '看对方，对方开放 ta 也会适度分享', value: 2 },
      { label: '比较容易放开，不太介意跟新认识的人聊私事', value: 1 },
      { label: '话匣子一开就停不住，根本不管认不认识', value: 1 },
    ],
  },

  // So3 表达与真实度
  {
    id: 'other_q30',
    dim: 'So3',
    text: 'ta 在不同圈子（家人 / 同事 / 死党 / 网上）里的状态：',
    options: [
      { label: '大体一致，基本上那就是 ta', value: 3 },
      { label: '有点差别，但核心的样子没变', value: 2 },
      { label: '差别挺明显，对不同人像不同版本', value: 1 },
      { label: '完全不同，搞不清楚哪个才是真实的 ta', value: 1 },
    ],
  },
]

export default questionsOther

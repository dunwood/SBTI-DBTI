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
    text: 'ta 发了一条朋友圈，半小时没人点赞，ta 更可能：',
    options: [
      { label: '删掉？不可能，ta 觉得是你们不配看', value: 3 },
      { label: '假装没事但偷偷看了八百遍', value: 2 },
      { label: '默默删了，当这条从未存在过', value: 1 },
      { label: '无所谓，ta 发朋友圈从来不看赞', value: 2 },
    ],
  },

  // S2 自我清晰度
  {
    id: 'other_q02',
    dim: 'S2',
    text: 'ta 打开外卖 App 点餐，更接近哪种状态：',
    options: [
      { label: '点开就下单，全程不超过30秒，像在执行任务', value: 3 },
      { label: '在三家店之间反复横跳，最后点了第一家', value: 2 },
      { label: '问了一圈朋友「你们吃什么」然后跟着点', value: 1 },
      { label: '翻了半小时，最后决定不吃了', value: 1 },
    ],
  },

  // S3 核心价值
  {
    id: 'other_q03',
    dim: 'S3',
    text: '双十一到了，ta 的购物车状态更像：',
    options: [
      { label: '早就塞满了，闹钟定好就等零点冲锋', value: 3 },
      { label: '需要什么买什么，不凑满减不玩花活', value: 2 },
      { label: '疯狂帮别人砍价助力，自己一件没买', value: 2 },
      { label: '啥也没买，ta 觉得这都是消费主义陷阱', value: 1 },
    ],
  },

  // E1 依恋安全感
  {
    id: 'other_q04',
    dim: 'E1',
    text: 'ta 给你发消息你没秒回，两小时后你看到 ta 的状态更像：',
    options: [
      { label: '完全没事，ta 可能自己都忘了发过消息了', value: 3 },
      { label: '看到你回了就回，节奏很稳', value: 2 },
      { label: '发了一个「？」或者一个表情包在试探', value: 1 },
      { label: '已读不回了，你感觉空气突然安静', value: 1 },
    ],
  },

  // E2 情感投入度
  {
    id: 'other_q05',
    dim: 'E2',
    text: 'ta 对喜欢的人，更像哪种动物：',
    options: [
      { label: '金毛犬——热情到让人有点招架不住', value: 3 },
      { label: '猫——在乎你但绝不让你看出来', value: 2 },
      { label: '变色龙——今天黏你明天消失', value: 1 },
      { label: '石头——你确定 ta 有感情这个功能？', value: 1 },
    ],
  },

  // E3 边界与依赖
  {
    id: 'other_q06',
    dim: 'E3',
    text: 'ta 和好朋友吵架后，第二天更可能：',
    options: [
      { label: '主动发消息，假装昨天什么都没发生', value: 3 },
      { label: '等对方先开口，但心里已经原谅了', value: 2 },
      { label: '在朋友圈发一条阴阳怪气的文案', value: 1 },
      { label: '直接删好友，ta 的世界没有「和好」这个选项', value: 1 },
    ],
  },

  // A1 世界观倾向
  {
    id: 'other_q07',
    dim: 'A1',
    text: '看到一条「路人扶老人被讹」的新闻，ta 更可能的反应：',
    options: [
      { label: '「这是个案啦，大部分人还是好的」', value: 3 },
      { label: '「所以说做好事之前先开录像」', value: 2 },
      { label: '「这个世界就是这样，你还指望什么」', value: 1 },
      { label: '直接划走，ta 对新闻免疫了', value: 2 },
    ],
  },

  // A2 规则与灵活度
  {
    id: 'other_q08',
    dim: 'A2',
    text: 'ta 走路到了红灯路口，一辆车都没有，ta：',
    options: [
      { label: '坚定地等绿灯，规矩是规矩', value: 3 },
      { label: '犹豫两秒，看看旁边有没有小孩在看自己', value: 2 },
      { label: '左右看一眼直接过，效率至上', value: 1 },
      { label: '看别人走不走，别人走就跟着走', value: 2 },
    ],
  },

  // A3 人生意义感
  {
    id: 'other_q09',
    dim: 'A3',
    text: '深夜三点 ta 还没睡，更可能是在：',
    options: [
      { label: '做工作计划或研究什么新东西', value: 3 },
      { label: '刷短视频刷到忘记时间了', value: 1 },
      { label: '躺在床上想「活着到底图啥」', value: 2 },
      { label: '打游戏或追剧，别问，问就是摆烂', value: 1 },
    ],
  },

  // Ac1 动机导向
  {
    id: 'other_q10',
    dim: 'Ac1',
    text: '如果 ta 打游戏，ta 更像：',
    options: [
      { label: '非要赢，输了会分析复盘甚至摔手柄', value: 3 },
      { label: '主要是好玩，赢了开心输了也开心', value: 2 },
      { label: '朋友叫才打，自己从来不主动开', value: 2 },
      { label: '打了两局就切出去刷手机了', value: 1 },
    ],
  },

  // Ac2 决策风格
  {
    id: 'other_q11',
    dim: 'Ac2',
    text: 'ta 逛商场看中两件衣服拿不定主意，更可能：',
    options: [
      { label: '两件都买了，别问', value: 3 },
      { label: '在试衣间反复换了四遍，最后买了先试的那件', value: 2 },
      { label: '拍照发群里问朋友选哪件', value: 1 },
      { label: '两件都没买，回家在网上找同款比价', value: 1 },
    ],
  },

  // Ac3 执行模式
  {
    id: 'other_q12',
    dim: 'Ac3',
    text: 'ta 说「我明天开始减肥」，根据你的经验：',
    options: [
      { label: 'ta 真的会开始，而且能坚持至少一个月', value: 3 },
      { label: '会开始，但大概一周后回归奶茶', value: 2 },
      { label: '明天 ta 会说「下周一再开始吧」', value: 1 },
      { label: '这话 ta 已经说了一年了，你甚至有点想录音做合集', value: 1 },
    ],
  },

  // So1 社交主动性
  {
    id: 'other_q13',
    dim: 'So1',
    text: '一场谁都不太认识的聚会上，ta 更像：',
    options: [
      { label: '15分钟后已经跟半场人交换了联系方式', value: 3 },
      { label: '找到一两个聊得来的，站在角落深度对话', value: 2 },
      { label: '全程低头玩手机，偶尔抬头微笑一下', value: 1 },
      { label: 'ta 根本不会出现在这种场合', value: 1 },
    ],
  },

  // So2 人际边界感
  {
    id: 'other_q14',
    dim: 'So2',
    text: '有人问 ta「你一个月挣多少钱」，ta 更可能：',
    options: [
      { label: '优雅地把话题岔开，绝不接招', value: 3 },
      { label: '「还行吧」「够用」模糊到极致', value: 2 },
      { label: '犹豫了一下还是说了，事后后悔', value: 1 },
      { label: '大大方方说出来，ta 觉得这有什么好藏的', value: 2 },
    ],
  },

  // So3 表达与真实度
  {
    id: 'other_q15',
    dim: 'So3',
    text: 'ta 在公司群和在朋友群里，像同一个人吗：',
    options: [
      { label: '完全一样，ta 没有切换模式这个功能', value: 3 },
      { label: '差不多，就是公司群少发表情包', value: 2 },
      { label: '完全是两个人，你有时怀疑 ta 有双重人格', value: 1 },
      { label: 'ta 在公司群从来不说话', value: 1 },
    ],
  },

  // ===== 第二批 15 题（每维度第 2 题）=====

  // S1 自尊自信
  {
    id: 'other_q16',
    dim: 'S1',
    text: '有人当面说「你这个想法不太行」，ta 的反应更像：',
    options: [
      { label: '直接回一句「你行你上」', value: 3 },
      { label: '微笑说「嗯你说得对」然后继续按自己的来', value: 3 },
      { label: '嘴上说好好好，心里难受一整天', value: 1 },
      { label: '认真想想对方说得有没有道理', value: 2 },
    ],
  },

  // S2 自我清晰度
  {
    id: 'other_q17',
    dim: 'S2',
    text: 'ta 人生的 slogan 更像哪句：',
    options: [
      { label: '「我知道我要什么，别废话」', value: 3 },
      { label: '「让我想想……再让我想想……」', value: 1 },
      { label: '「大家觉得怎样就怎样吧」', value: 1 },
      { label: '「我有方向，但 GPS 偶尔会重新规划路线」', value: 2 },
    ],
  },

  // S3 核心价值
  {
    id: 'other_q18',
    dim: 'S3',
    text: 'ta 请你吃饭时，更接近哪种画风：',
    options: [
      { label: '大手一挥「随便点」，菜单都不看一眼', value: 3 },
      { label: '认真点菜控预算，吃完还研究一下人均', value: 2 },
      { label: '请完你之后默默吃了一周泡面', value: 2 },
      { label: 'ta 从来不请人吃饭，你在想什么', value: 1 },
    ],
  },

  // E1 依恋安全感
  {
    id: 'other_q19',
    dim: 'E1',
    text: 'ta 对待「已读不回」这件事，态度更像：',
    options: [
      { label: '「有什么大不了的，忙呗」', value: 3 },
      { label: '「行吧，可能真有事」嘴上这么说但还是记住了', value: 2 },
      { label: '立刻开始分析「是不是我说错什么了」', value: 1 },
      { label: '直接打电话过去：「你是不是死了」', value: 2 },
    ],
  },

  // E2 情感投入度
  {
    id: 'other_q20',
    dim: 'E2',
    text: 'ta 记不记得你的生日：',
    options: [
      { label: '不仅记得，还会提前一周开始策划惊喜', value: 3 },
      { label: '记得，会发条祝福但不太搞大阵仗', value: 2 },
      { label: '想起来就祝一下，想不起来也正常', value: 1 },
      { label: 'ta 连自己生日都记不住你指望什么', value: 1 },
    ],
  },

  // E3 边界与依赖
  {
    id: 'other_q21',
    dim: 'E3',
    text: 'ta 搬新家或换新手机，更可能：',
    options: [
      { label: '自己搞定一切，你事后才知道', value: 3 },
      { label: '叫上你一起，但核心决策自己做', value: 2 },
      { label: '全程需要人陪，没人陪就瘫痪', value: 1 },
      { label: '发一条朋友圈问「有没有人帮我」', value: 1 },
    ],
  },

  // A1 世界观倾向
  {
    id: 'other_q22',
    dim: 'A1',
    text: 'ta 对「努力就能成功」这句话的态度：',
    options: [
      { label: '深信不疑，而且身体力行', value: 3 },
      { label: '「有道理，但还要看运气和出身」', value: 2 },
      { label: '「哈哈哈哈哈哈哈哈」', value: 1 },
      { label: '已读，不评价', value: 2 },
    ],
  },

  // A2 规则与灵活度
  {
    id: 'other_q23',
    dim: 'A2',
    text: 'ta 在电影院遇到有人大声打电话，更可能：',
    options: [
      { label: '直接回头说「请安静」', value: 3 },
      { label: '狂转头用眼神杀表达不满', value: 2 },
      { label: '忍着，但在心里已经写好了投诉小作文', value: 2 },
      { label: '戴上耳机，与世隔绝，这不是 ta 的战斗', value: 1 },
    ],
  },

  // A3 人生意义感
  {
    id: 'other_q24',
    dim: 'A3',
    text: 'ta 的五年计划状态：',
    options: [
      { label: '写在备忘录里，还定期复盘更新', value: 3 },
      { label: '有个大概方向，但没写下来过', value: 2 },
      { label: '五年？ta 连下周干嘛都不确定', value: 1 },
      { label: 'ta 的计划就是活到明天看明天的', value: 1 },
    ],
  },

  // Ac1 动机导向
  {
    id: 'other_q25',
    dim: 'Ac1',
    text: '如果有人说「这件事做不到」，ta 更可能的反应：',
    options: [
      { label: '「你说做不到？那我偏要做给你看」', value: 3 },
      { label: '「为什么做不到？我研究一下」', value: 2 },
      { label: '「做不到就做不到呗，又不是非做不可」', value: 1 },
      { label: '「好的那算了」然后去做别的事了', value: 1 },
    ],
  },

  // Ac2 决策风格
  {
    id: 'other_q26',
    dim: 'Ac2',
    text: '旅行时到了一个路口，地图说左边近但右边风景好，ta：',
    options: [
      { label: '三秒内选完，不回头', value: 3 },
      { label: '选了一条，走两步犹豫一下，然后继续走', value: 2 },
      { label: '「你们决定吧我都行」', value: 1 },
      { label: '在路口站了五分钟查攻略看评论', value: 2 },
    ],
  },

  // Ac3 执行模式
  {
    id: 'other_q27',
    dim: 'Ac3',
    text: 'ta 答应帮你做一件事，通常的结果是：',
    options: [
      { label: '说到做到，有时候比你预期的还快', value: 3 },
      { label: '会做，但需要你催一两次', value: 2 },
      { label: '做了，但质量堪忧，你后悔没自己来', value: 1 },
      { label: '你等到花都谢了，ta 说「啊我忘了」', value: 1 },
    ],
  },

  // So1 社交主动性
  {
    id: 'other_q28',
    dim: 'So1',
    text: 'ta 的微信消息提示音响了，ta 的反应：',
    options: [
      { label: '秒回，而且经常是语音+表情包+文字三连', value: 3 },
      { label: '看心情，有空就回，没空就先搁着', value: 2 },
      { label: '设置了免打扰，统一晚上回', value: 1 },
      { label: 'ta 把消息提示关了，你能收到回复算幸运', value: 1 },
    ],
  },

  // So2 人际边界感
  {
    id: 'other_q29',
    dim: 'So2',
    text: 'ta 的手机解锁密码，你觉得知道的人有几个：',
    options: [
      { label: '零个，ta 把手机保护得像国家机密', value: 3 },
      { label: '最亲的一两个人知道', value: 2 },
      { label: '好多人都知道，ta 自己都没意识到', value: 1 },
      { label: 'ta 根本没设密码，ta 觉得自己没什么好藏的', value: 2 },
    ],
  },

  // So3 表达与真实度
  {
    id: 'other_q30',
    dim: 'So3',
    text: '你觉得 ta 在你面前展示的自己，大概占真实的 ta 百分之多少：',
    options: [
      { label: '90% 以上，ta 在谁面前都差不多', value: 3 },
      { label: '70% 左右，有些东西 ta 不说但你知道', value: 2 },
      { label: '50% 吧，ta 在不同人面前差异挺大的', value: 1 },
      { label: '你也不确定，也许你看到的都是 ta 想让你看到的', value: 1 },
    ],
  },
]

export default questionsOther

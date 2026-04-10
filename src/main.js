import { calcDimensionScores, scoresToLevels, determineResult } from './engine.js'
import { createQuiz } from './quiz.js'
import { renderResult } from './result.js'

async function loadJSON(path) {
  const res = await fetch(path)
  return res.json()
}

async function init() {
  const [questions, dimensions, types, config] = await Promise.all([
    loadJSON('/data/questions.json'),
    loadJSON('/data/dimensions.json'),
    loadJSON('/data/types.json'),
    loadJSON('/data/config.json'),
  ])

  // 邀请参数检测（无 invite 时不影响任何现有逻辑）
  const inviteId = new URLSearchParams(window.location.search).get('invite') || null

  const pages = {
    intro: document.getElementById('page-intro'),
    quiz: document.getElementById('page-quiz'),
    result: document.getElementById('page-result'),
  }

  function showPage(name) {
    Object.values(pages).forEach((p) => p.classList.remove('active'))
    pages[name].classList.add('active')
    window.scrollTo(0, 0)
  }

  function onQuizComplete(answers, isDrunk) {
    const scores = calcDimensionScores(answers, questions.main)
    const levels = scoresToLevels(scores, config.scoring.levelThresholds)
    const result = determineResult(levels, dimensions.order, types.standard, types.special, { isDrunk })

    // 邀请流程：将自测结果额外存入 session 专属 key
    if (inviteId) {
      const LEVEL_NUM = { L: 1, M: 2, H: 3 }
      const vector   = dimensions.order.map(d => LEVEL_NUM[levels[d]] || 2)
      const levelsStr = dimensions.order.map(d => levels[d] || 'M').join('')
      localStorage.setItem('dbti_session_' + inviteId + '_self', JSON.stringify({
        type:       result.primary.code,
        typeCn:     result.primary.cn,
        similarity: result.primary.similarity,
        vector,
        levels: levelsStr,
        timestamp: Date.now(),
      }))
    }

    renderResult(result, levels, dimensions.order, dimensions.definitions, config)
    showPage('result')

    // 邀请流程：在结果页操作区顶部插入「查看 ta 眼中的你」按钮
    if (inviteId) {
      const compareBtn = document.createElement('a')
      compareBtn.href = '/compare.html?id=' + inviteId
      compareBtn.className = 'btn btn-primary'
      compareBtn.textContent = '查看 ta 眼中的你'
      compareBtn.style.cssText = 'display:block;width:100%;text-align:center;text-decoration:none;margin-bottom:10px;'
      const actions = document.querySelector('.result-actions')
      if (actions) actions.insertBefore(compareBtn, actions.firstChild)
    }
  }

  const quiz = createQuiz(questions, config, onQuizComplete)

  document.getElementById('btn-start').addEventListener('click', () => {
    quiz.start()
    showPage('quiz')
  })

  document.getElementById('btn-restart').addEventListener('click', () => {
    quiz.start()
    showPage('quiz')
  })
}

init()

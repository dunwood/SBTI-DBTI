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
  const urlParams = new URLSearchParams(window.location.search)
  const inviteId  = urlParams.get('invite') || null
  const otherD    = urlParams.get('d')      || null  // 他测向量（跨设备模式）
  const isInvite  = !!(inviteId || otherD)

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
    // 更新测试计数
    const _cnt = parseInt(localStorage.getItem('dbti_test_count') || '0')
    localStorage.setItem('dbti_test_count', String(_cnt + 1))

    const scores = calcDimensionScores(answers, questions.main)
    const levels = scoresToLevels(scores, config.scoring.levelThresholds)
    const result = determineResult(levels, dimensions.order, types.standard, types.special, { isDrunk })

    // 邀请流程：存自测数据 + 构建对照链接
    let compareBtnHref = null
    if (isInvite) {
      const LEVEL_NUM = { L: 1, M: 2, H: 3 }
      const vector    = dimensions.order.map(d => LEVEL_NUM[levels[d]] || 2)
      const levelsStr = dimensions.order.map(d => levels[d] || 'M').join('')

      // 同设备 localStorage fallback
      if (inviteId) {
        localStorage.setItem('dbti_session_' + inviteId + '_self', JSON.stringify({
          type:       result.primary.code,
          typeCn:     result.primary.cn,
          similarity: result.primary.similarity,
          vector,
          levels: levelsStr,
          timestamp: Date.now(),
        }))
      }

      // 构建对照链接（URL 携带全量数据，支持跨设备）
      const compareParams = new URLSearchParams()
      if (otherD) {
        compareParams.set('d',   otherD)
        compareParams.set('t',   urlParams.get('t')  || '')
        compareParams.set('r',   urlParams.get('r')  || '')
        compareParams.set('n',   urlParams.get('n')  || '')
        compareParams.set('tn',  urlParams.get('tn') || '')
      } else if (inviteId) {
        compareParams.set('id',  inviteId)  // 同设备 localStorage fallback
      }
      compareParams.set('sd',  levelsStr)
      compareParams.set('st',  result.primary.code)
      compareParams.set('stn', result.primary.cn)
      compareBtnHref = '/compare.html?' + compareParams
    }

    renderResult(result, levels, dimensions.order, dimensions.definitions, config)
    showPage('result')

    // 邀请流程：结果页操作区顶部插入「查看 ta 眼中的你」按钮
    if (compareBtnHref) {
      const compareBtn = document.createElement('a')
      compareBtn.href = compareBtnHref
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

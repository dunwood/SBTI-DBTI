/**
 * 观察风格计算器
 * @param {string[]} levelsArr - 长度 15 的数组，值为 'H'/'M'/'L'
 * @returns {string} 风格 key
 */
export function calculateObserverStyle(levelsArr) {
  const highCount = levelsArr.filter(l => l === 'H').length
  const lowCount  = levelsArr.filter(l => l === 'L').length
  const midCount  = levelsArr.filter(l => l === 'M').length

  const beautifyIndex = highCount / 15
  const harshIndex    = lowCount  / 15
  const vagueIndex    = midCount  / 15
  const extremeRate   = (highCount + lowCount) / 15

  if (beautifyIndex >= 0.6) return 'high_filter'
  if (harshIndex    >= 0.6) return 'high_guard'
  if (extremeRate   >= 0.7) return 'high_fantasy'
  if (vagueIndex    >= 0.6) return 'high_vague'
  if (beautifyIndex >= 0.4 && beautifyIndex < 0.6 && harshIndex < 0.3) return 'high_empathy'

  return 'high_empathy'
}

/**
 * 认知偏差计算引擎
 */

/**
 * 计算他测向量与自测向量的偏差
 * @param {number[]} otherVector - 15 个维度数值（L=1, M=2, H=3），他测方视角
 * @param {number[]} selfVector  - 15 个维度数值，被测方自测
 * @returns {{ totalDiff, deviationPercent, dimensionDiffs, level }}
 */
export function calculateDeviation(otherVector, selfVector) {
  let totalDiff = 0
  const maxDiff = 30 // 每维度最大差 2，共 15 维
  const dimensionDiffs = []

  for (let i = 0; i < 15; i++) {
    const diff = Math.abs((otherVector[i] || 2) - (selfVector[i] || 2))
    totalDiff += diff
    dimensionDiffs.push(diff)
  }

  const deviationPercent = Math.round((totalDiff / maxDiff) * 100)

  return {
    totalDiff,
    deviationPercent,
    dimensionDiffs,
    level: getDeviationLevel(deviationPercent),
  }
}

function getDeviationLevel(percent) {
  if (percent <= 15) return 'soulmate'   // 知己
  if (percent <= 30) return 'familiar'   // 熟人
  if (percent <= 50) return 'halfknown'  // 半生不熟
  if (percent <= 70) return 'parallel'   // 平行世界
  return 'misread'                       // 完全误读
}

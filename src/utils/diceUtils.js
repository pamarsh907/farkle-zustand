const getRollZoneDimensions = () => {
  const rollZone = document.querySelector('.rollZone')
  const rollZoneDimensions = rollZone.getBoundingClientRect()

  return ({ width: rollZoneDimensions.width, height: rollZoneDimensions.height })
}

const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNum
}

const getRandomXY = () => {
  const dieSize = 75
  const { width, height } = getRollZoneDimensions()

  return [getRandomNumber(dieSize, width - dieSize), getRandomNumber(dieSize, height - dieSize)]
}


export const getUniqueRandomXY = (min, max, existing, minDistance) => {

  for (let attempts = 0; attempts < 100; attempts++) {
    const point = getRandomXY()

    const overlaps = existing.some(([x, y]) => {
      const dx = point[0] - x
      const dy = point[1] - y

      return dx * dx + dy * dy < minDistance * minDistance
    })

    if (!overlaps) {
      return point;
    }
  }
  return getRandomXY()
}
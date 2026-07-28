const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomXY = (min, max) => {
    return [getRandomNumber(min, max), getRandomNumber(min, max)]
}

export const getUniqueRandomXY = (min, max, existing, minDistance) => {
  for (let attempts = 0; attempts < 100; attempts++) {
    const point = getRandomXY(min, max)

    const overlaps = existing.some(([x, y]) => {
      const dx = point[0] - x
      const dy = point[1] - y

      return dx * dx + dy * dy < minDistance * minDistance;
    });

    if (!overlaps) {
      return point;
    }
  }
  return getRandomXY(min, max)
}
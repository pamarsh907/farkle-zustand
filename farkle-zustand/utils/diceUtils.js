const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomXY = (min, max) => {
    return [getRandomNumber(min, max), getRandomNumber(min, max)]
}

export const getUniqueRandomXY = (min, max, otherRandoms, maxCloseness) => {
    let random = getRandomXY(min, max)
    let isOverlapping = true
    while(isOverlapping){
        let didOneOverlap = false
        for (const other of otherRandoms) {
            if((random[0] >= other[0] - maxCloseness && random[0] <= other[0] + maxCloseness) && 
                (random[1] >= other[1] - maxCloseness && random[1] <= other[1] + maxCloseness)) {
                random = getRandomXY(min, max)
                didOneOverlap = true
                break
            }
        }
        isOverlapping = didOneOverlap
    }
    return random
}
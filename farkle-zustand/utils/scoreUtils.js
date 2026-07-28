
function getCounts(dice) {
  return dice.reduce((counts, die) => {
    counts[die - 1]++
    return counts
  }, [0, 0, 0, 0, 0, 0])
}

function removeDice(counts, value, amount) {
  counts[value - 1] -= amount;
}

function getLeftoverDice(counts) {
  return counts.reduce((sum, count) => sum + count, 0)
}

function evaluateDice(diceArr) {
  let points = 0
  let dicePerNum = getCounts(diceArr)
  //if nested twice (total points) then flatten the array once
  while (true) {
    //algorighm
    //1) check highest point combinations first
    //2) when a match is found, add the score and remove those dice
    //3) calculate score for remaining dice (if there is a spare 1 or 5 etc)


    //can this be optimized?
    let triples = 0
    let doubles = 0
    let fourOfKind = 0
    dicePerNum.forEach(d => {
      if (d === 3) {
        triples++
      }
      if (d == 2) {
        doubles++
      }
      if (d == 4) {
        fourOfKind++
      }
    })
    //six of a kind 3000
    if (dicePerNum.includes(6)) {
      console.log("six of a kind")
      points += 3000
      dicePerNum = [0,0,0,0,0,0]
    } else if (dicePerNum.includes(5)) {
      //five of a kind 2000
      console.log("five of a kind")
      points += 2000
      removeDice(dicePerNum, dicePerNum.indexOf(5) + 1, 5)
    } else if (triples == 2) {
      // two triples 2500
      console.log("two triples")
      points += 2500
      dicePerNum = [0,0,0,0,0,0]
    } else if (dicePerNum.filter(d => d == 1).length == 6) {
      // 1-6 straight 1500
      console.log("1-6 straight")
      points += 1500
      dicePerNum = [0,0,0,0,0,0]
    } else if (doubles == 3) {
      //three pairs 1500
      console.log("three pairs")
      points += 1500
      dicePerNum = [0,0,0,0,0,0]
    } else if (fourOfKind == 1 && doubles == 1) {
      //four of a kind and a pair 1500
      console.log("four of a kind and a pair")
      points += 1500
      dicePerNum = [0,0,0,0,0,0]
    } else if (fourOfKind == 1) {
      //four of a kind 1000
      console.log("four of a kind")
      points += 1000
      removeDice(dicePerNum, dicePerNum.indexOf(4) + 1, 4)
      continue
    } else if (dicePerNum[5] == 3) {
      //three 6s 600 
      console.log("three 6s 600 ")
      points += 600
      removeDice(dicePerNum, 6, 3)
      continue
    } else if (dicePerNum[4] >= 3) {
      //three 5s 500 
      console.log("three 5s")
      points += 500
      removeDice(dicePerNum, 5, 3)
    } else if (dicePerNum[3] == 3) {
      //three 4s 400
      console.log("three 4s")
      points += 400
      removeDice(dicePerNum, 4, 3)
      continue
    } else if (dicePerNum[0] == 3) {
      //three 1s 300
      console.log("three 1s")
      points += 300
      removeDice(dicePerNum, 1, 3)
    } else if (dicePerNum[2] == 3) {
      //three 3s 300 
      console.log("three 3s")
      points += 300
      removeDice(dicePerNum, 3, 3)
      continue
    } else if (dicePerNum[1] == 3) {
      //three 2s 200
      console.log("three 2s")
      points += 200
      removeDice(dicePerNum, 2, 3)
      continue
    } else if (dicePerNum[0] >= 1 && dicePerNum[0] < 3) {
      //single 1 100
      console.log("single 1")
      points += 100
      removeDice(dicePerNum, 1, 1)
    } else if (dicePerNum[4] >= 1 && dicePerNum[4] < 3) {
      //single 5 50
      console.log("single 5")
      points += 50
      removeDice(dicePerNum, 5, 1)
    } else {
      //console.log("invalid selection")
      break
    }
  }
  const leftOverDice = getLeftoverDice(dicePerNum)
  const scoringDice = diceArr.length - leftOverDice
  console.log('points inside evalDice :', points)
  return { points, leftOverDice, scoringDice }
}

function evaluateDiceSet(diceSet) {
  console.log('diceSet in function :', diceSet)
  let total = 0
  diceSet.forEach(set => {
    console.log('set in evalDiceSet :', set)
    const result = evaluateDice(set)
    console.log('result in evalDiceSet :', result)
    total += result.points
  })
  console.log('total from evalDiceSet :', total)
  return total
}

export { evaluateDice, evaluateDiceSet }
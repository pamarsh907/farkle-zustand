//import { useState } from 'react'
import DiceRack from "../components/DiceRack/DiceRack"
import RollZone from "../components/RollZone/RollZone"
import Controls from "../components/Controls/Controls"
import { evaluateDice } from "../utils/scoreUtils"
import { useDice } from "../stores/dice"
import { useStatus } from "../stores/game"
import { useTotalPoints } from "../stores/game"

function App() {
  const selectedDice = useDice().filter(die => die.held)
  const turnPoints = evaluateDice(selectedDice)
  const totalPoints = useTotalPoints()
  const status = useStatus()

  return (
    <>
      <h1>{status}</h1>
      <h2>{`Total Points: ${totalPoints}`}</h2>
      <h2>{`Turn Points: ${turnPoints.points}`}</h2>
      <RollZone/>
      <DiceRack/>
      <Controls/>
    </>
  )
}

export default App

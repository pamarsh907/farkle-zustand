//import { useState } from 'react'
import DiceRack from "../components/DiceRack/DiceRack"
import RollZone from "../components/RollZone/RollZone"
import Controls from "../components/Controls/Controls"
import { useStatus } from "../stores/game"
import { useTotalPoints } from "../stores/game"
import { useTurns } from "../stores/game"
import { useCurrentTurn } from "../stores/game"

function App() {
  const totalPoints = useTotalPoints()
  const status = useStatus()
  const turns = useTurns()
  const currentTurn = useCurrentTurn()
  // console.log('turns :', turns)
  // console.log('currentTurn.rolls :', currentTurn.rolls)
  // console.log('currentTurn.heldDice :', currentTurn.heldDice)
  console.log('currentTurn :', currentTurn)
  return (
    <>
      <h1>{status}</h1>
      <h2>{`Total Points: ${totalPoints}`}</h2>
      <h2>{`Turn Points: ${currentTurn.points}`}</h2>
      {/* <div>{turns.map(turn => <div>{turn.rolls}</div>)}</div> */}
      {/* <div>{currentTurn.rolls}</div> */}
      <RollZone/>
      <DiceRack/>
      <Controls/>
      
    </>
  )
}

export default App

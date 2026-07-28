//import { useState } from 'react'
import DiceRack from "../components/DiceRack/DiceRack"
import RollZone from "../components/RollZone/RollZone"
import Controls from "../components/Controls/Controls"
import { useStatus } from "../stores/game"
import { useTotalPoints } from "../stores/game"
import { useCurrentTurn } from "../stores/game"
import { LayoutGroup } from "motion/react"

function App() {
  const totalPoints = useTotalPoints()
  const status = useStatus()
  const currentTurn = useCurrentTurn()
  console.log('currentTurn :', currentTurn)
  return (
    <>
      <h1>{status}</h1>
      <h2>{`Total Points: ${totalPoints}`}</h2>
      <h2>{`Turn Points: ${currentTurn.points}`}</h2>
      <LayoutGroup>
        <RollZone />
        <DiceRack />
      </LayoutGroup>
      <Controls />

    </>
  )
}

export default App

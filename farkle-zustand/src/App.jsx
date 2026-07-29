//import { useState } from 'react'
import DiceRack from "../components/DiceRack/DiceRack"
import RollZone from "../components/RollZone/RollZone"
import Controls from "../components/Controls/Controls"
import { useStatus } from "../stores/game"
import { useTotalPoints } from "../stores/game"
import { useCurrentTurn } from "../stores/game"
import { LayoutGroup } from "motion/react"
import GameBoard from "../components/GameBoard/GameBoard"
import Divider from '@mui/material/Divider'


function App() {
  const gameContainerStyle = {
    width: '80%',
    height: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  const totalPoints = useTotalPoints()
  const status = useStatus()
  const currentTurn = useCurrentTurn()
  console.log('currentTurn :', currentTurn)
  return (
    <>
      <div style={gameContainerStyle}>
        <GameBoard>
          <h1>{status}</h1>
          <h2>{`Total Points: ${totalPoints}`}</h2>
          <h2>{`Turn Points: ${currentTurn.points}`}</h2>
          <Divider/>
          <LayoutGroup>
            <RollZone />
            <Divider/>
            <DiceRack />
          </LayoutGroup>
          <Divider/>
          <Controls />
        </GameBoard>
      </div>
    </>
  )
}

export default App

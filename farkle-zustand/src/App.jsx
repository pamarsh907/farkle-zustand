import DiceRack from "../components/DiceRack/DiceRack"
import RollZone from "../components/RollZone/RollZone"
import Controls from "../components/Controls/Controls"
import FarkleNotification from "../components/FarkleNotification/FarkleNotification"
import { LayoutGroup } from "motion/react"
import GameBoard from "../components/GameBoard/GameBoard"
import Divider from '@mui/material/Divider'
import ScoreBoard from "../components/Scoreboard/Scoreboard"
import { useStatus } from "../stores/game"
import WinNotification from "../components/WinNotification/WinNotification"

function App() {
  const gameContainerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray'
  }

  const status = useStatus()

  return (
    <>
      <div style={gameContainerStyle}>
        <GameBoard>
          <ScoreBoard />
          <Divider />
          <LayoutGroup>
            <FarkleNotification status={status}/>
            <WinNotification status={status}/>
            <RollZone />
            <Divider />
            <DiceRack />
          </LayoutGroup>
          <Divider />
          <Controls />
        </GameBoard>
      </div >
    </>
  )
}

export default App

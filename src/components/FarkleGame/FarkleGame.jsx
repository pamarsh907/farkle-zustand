import DiceRack from "../DiceRack/DiceRack"
import RollZone from "../RollZone/RollZone"
import Controls from "../Controls/Controls"
import FarkleNotification from "../FarkleNotification/FarkleNotification"
import { LayoutGroup } from "motion/react"
import GameBoard from "../GameBoard/GameBoard"
import Divider from '@mui/material/Divider'
import ScoreBoard from "../Scoreboard/Scoreboard"
import { useStatus } from "../../stores/game"
import WinNotification from "../WinNotification/WinNotification"

function FarkleGame() {
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

export default FarkleGame

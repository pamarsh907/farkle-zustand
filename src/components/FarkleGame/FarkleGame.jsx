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
import { useMediaQuery } from "@mui/material"

function FarkleGame() {
  const gameContainerStyle = {
    width: '100%',
    height: '80vh',
    backgroundColor: 'lightgray',
    paddingTop: '5px',
    paddingBottom: '5px'
  }

  const gameBoardStyle = {
    diplay: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }

  const status = useStatus()

  return (
    <>
      <div style={gameContainerStyle}>
        <GameBoard>
          <ScoreBoard />
          <Divider />
          <LayoutGroup>
            <FarkleNotification status={status} />
            <WinNotification status={status} />
            <div style={gameBoardStyle} className='gameboard'>
              <RollZone />
              <Divider />
              <DiceRack />
            </div>
          </LayoutGroup>
          <Divider />
          <Controls />
        </GameBoard>
      </div >
    </>
  )
}

export default FarkleGame

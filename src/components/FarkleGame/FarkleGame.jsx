import DiceRack from "../DiceRack/DiceRack"
import RollZone from "../RollZone/RollZone"
import Controls from "../Controls/Controls"
import FarkleNotification from "../FarkleNotification/FarkleNotification"
import { LayoutGroup } from "motion/react"
import GameBoard from "../GameBoard/GameBoard"
import ScoreBoard from "../Scoreboard/Scoreboard"
import { useStatus } from "../../stores/game"
import WinNotification from "../WinNotification/WinNotification"
import { Container, Divider, Box } from "@mui/material"

function FarkleGame() {

  const gameBoardStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  }

  const status = useStatus()
  return (
    <>
      <Container maxWidth="md" sx={{
        height: "100%",
        flex: 1,
        py: 2,
        px: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}>
        <GameBoard sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <ScoreBoard />
          <Divider />
          <LayoutGroup>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
            >
              <FarkleNotification status={status} />
              <WinNotification status={status} />
              <div style={gameBoardStyle} className='gameboard'>
                <RollZone />
                <Divider />
                <DiceRack />
              </div>
            </Box>
          </LayoutGroup>
          <Divider />
          <Controls />
        </GameBoard>
      </Container>
    </>
  )
}

export default FarkleGame

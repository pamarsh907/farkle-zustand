import { useCurrentTurn } from "../../stores/game"
import { useTotalPoints } from "../../stores/game"
import PointDisplay from "../PointDisplay/PointDisplay"
import { useMediaQuery } from "@mui/material"

export default function ScoreBoard() {
  const smallScreen = useMediaQuery('(max-width:600px)')
  const totalPoints = useTotalPoints()
  const currentTurnPoints = useCurrentTurn().points

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'white',
    flexDirection: smallScreen ? 'column' : 'row',
    alignItems: 'center'
  }

  return (
    <div style={style}>
        <div>{`This turn: `}<PointDisplay value={currentTurnPoints} /></div>
        <div>{`Total: `}<PointDisplay value={totalPoints} /></div>
    </div>
  )
}



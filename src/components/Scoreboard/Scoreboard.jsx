import { useCurrentTurn } from "../../stores/game"
import { useTotalPoints } from "../../stores/game"
import PointDisplay from "../PointDisplay/PointDisplay"

export default function ScoreBoard() {
  const totalPoints = useTotalPoints()
  const currentTurnPoints = useCurrentTurn().points

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '10px',
    paddingRight: '10px'
  }

  return (
    <div style={style}>
        <h2>{`Turn Points: `}<PointDisplay value={currentTurnPoints} /></h2>
        <h2>{`Total Points: `}<PointDisplay value={totalPoints} /></h2>
    </div>
  )
}



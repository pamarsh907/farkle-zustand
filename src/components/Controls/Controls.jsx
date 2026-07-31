import Button from "@mui/material/Button"
import { useGameActions } from "../../stores/game"
import { useStatus } from "../../stores/game"

export default function Controls() {
  const { roll, endTurn, resetGame } = useGameActions()
  const status = useStatus()
  const disableRoll = status === 'farkle' || status === 'invalid' || status === 'win'
  const disableEndTurn = status === 'invalid' || status === 'preroll' || status === 'win'

  const style = {
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
    backgroundColor: 'white'
  }

  return (
    <div style={style}>
      <Button variant='contained' onClick={roll} disabled={disableRoll}>roll</Button>
      {status === 'win' && <Button variant='contained' onClick={resetGame}>Play Again</Button>}
      <Button variant='outlined' onClick={endTurn} disabled={disableEndTurn}>end turn</Button>
    </div>
  )
}
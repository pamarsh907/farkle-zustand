import Button from "@mui/material/Button"
import { useGameActions } from "../../stores/game"
import { useStatus } from "../../stores/game"

export default function Controls() {
  const { roll, endTurn } = useGameActions()
  const status = useStatus()
  const disableRoll = status === 'farkle' || status === 'invalid'
  const disableEndTurn = status === 'invalid' || status === 'preroll'

  const style = {
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px'
  }

  return (
    <div style={style}>
      <Button variant='contained' onClick={roll} disabled={disableRoll}>roll</Button>
      <Button variant='outlined' onClick={endTurn} disabled={disableEndTurn}>end turn</Button>
    </div>
  )
}
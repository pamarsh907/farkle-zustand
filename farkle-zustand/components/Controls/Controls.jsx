import { useDiceActions } from "../../stores/dice"
import { useGameActions } from "../../stores/game"
import { useStatus } from "../../stores/game"

export default function Controls() {
  const { roll, endTurn } = useGameActions()
  const status = useStatus()
  const disableRoll = status === 'farkle' || status === 'invalid'
  const disableEndTurn = status === 'invalid' || status === 'preroll'

  return (
    <div>
      <button onClick={roll} disabled={disableRoll}>roll</button>
      <button onClick={endTurn} disabled={disableEndTurn}>end turn</button>
    </div>
  )
}
import { useDiceActions } from "../../stores/dice"
import { useGameActions } from "../../stores/game"
import { useStatus } from "../../stores/game"

export default function Controls() {
  const { roll } = useGameActions()
  const status = useStatus()
  const disableRoll = status === 'farkle' || status === 'invalid'
  const disableEndTurn = status === 'invalid' || status === 'pregame'

  return (
    <div>
      <button onClick={roll} disabled={disableRoll}>roll</button>
      <button disabled={disableEndTurn}>end turn</button>
    </div>
  )
}
import { useDice } from "../../stores/dice"
import Die from "../Die/Die"

export default function RollZone() {
  const style = {
    height: '500px',
    position: 'relative',
  }

  const dice = useDice().filter(die => die.onBoard === true)

  return (
    <div style={style}>
      {dice.map(die => <Die die={die} key={`roll-${die.id}`}/>)}
    </div>
  )
}
import { useDice } from "../../stores/dice"
import Die from "../Die/Die"

export default function RollZone() {
  const style = {
    width: '500px',
    height: '500px',
    border: 'solid',
    backgroundColor: 'blue'
  }

  const selectedDice = useDice().filter(die => die.selected === false)

  return (
    <div style={style}>
      {selectedDice.map(die => <Die die={die}/>)}
    </div>
  )
}
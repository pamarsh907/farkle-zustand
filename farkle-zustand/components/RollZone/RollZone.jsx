import { useDice } from "../../stores/dice"
import Die from "../Die/Die"

export default function RollZone() {
  const style = {
    width: '500px',
    height: '500px',
    border: 'solid',
    backgroundColor: 'blue',
    position: 'relative',
    padding: '3px',
    margin: '3px'
  }

  const dice = useDice().filter(die => die.onBoard === true)

  return (
    <div style={style}>
      {dice.map(die => <Die die={die} key={die.id}/>)}
    </div>
  )
}
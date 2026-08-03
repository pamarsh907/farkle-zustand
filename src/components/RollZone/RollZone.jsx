import { useDice } from "../../stores/dice"
import Die from "../Die/Die"

export default function RollZone() {
  const style = {
    position: 'relative',
    height: '45dvh'
  }

  const dice = useDice().filter(die => die.onBoard === true)

  return (
    <div className='rollZone' style={style}>
      {dice.map(die => <Die die={die} key={`roll-${die.id}`}/>)}
    </div>
  )
}
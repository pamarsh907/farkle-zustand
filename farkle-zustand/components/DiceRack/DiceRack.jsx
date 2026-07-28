import Die from "../Die/Die";
import { useDice } from "../../stores/dice"

export default function DiceRack() {
  const dice = useDice().filter(die => die.onBoard === false)

  const style = {
    display: 'flex',
    width: '500px',
    height: '50px',
    justifyContent: 'space-around',
    gap: '12px',
    borderStyle: 'solid',
    borderWidth: '2px',
    padding: '3px',
    margin: '3px'
  }

  return (
    <>
    <div className='diceRack' style={style}>
      {dice.map(d => <Die die={d} key={d.id}/>)}  
    </div>
    </>
  )
}
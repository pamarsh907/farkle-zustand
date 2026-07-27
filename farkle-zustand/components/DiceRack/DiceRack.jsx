import Die from "../Die/Die";
import { useDiceActions, useDice } from "../../stores/dice"

export default function DiceRack() {
  const { rollDice } = useDiceActions()
  const dice = useDice().filter(die => die.onBoard === false)
  console.log(dice)

  const style = {
    display: 'flex',
    width: '500px',
    justifyContent: 'flex-start',
    gap: '12px'
  }

  return (
    <>
    <div className='diceRack' style={style}>
      {dice.map(d => <Die die={d} key={d.id}/>)} 
      <button onClick={rollDice}>roll</button>  
    </div>
    </>
  )
}
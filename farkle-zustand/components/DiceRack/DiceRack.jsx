import Die from "../Die/Die";
import { useDice, useDiceActions } from "../../stores/dice";

export default function DiceRack() {
  const { rollAllDice } = useDiceActions()
  const dice = useDice().filter(die => die.selected === true)
  console.log(dice)
  return (
    <>
      {dice.map(d => <Die die={d} key={d.id}/>)} 
      <button onClick={rollAllDice}>roll</button>  
    </>
  )
}
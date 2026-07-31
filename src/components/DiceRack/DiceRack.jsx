import { useDice } from "../../stores/dice"
import { useCurrentGrouping } from "../../stores/dice"
import DiceGroup from "../DiceGroup/DiceGroup";

export default function DiceRack() {
  const groupCount = useCurrentGrouping()
  const dice = useDice().filter(die => die.onBoard === false)

  const style = {
    display: 'flex',
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white'
  }

  let diceToDisplay = []
  for (let i = 0; i <= groupCount; i++) {
    //Get dice of a group
    let filteredDice = dice.filter(die => die.grouping === i)

    //If no dice in that group then skip
    if (filteredDice.length > 0) {

      //Sort dice of group by val
      const sortedDice = filteredDice.sort((a, b) => a.value - b.value)

      //Add each die to diceToDisplay
      diceToDisplay = [...diceToDisplay, sortedDice]
    }
  }
  //map diceToDisplay into Die components
  const mappedDiceGroups = diceToDisplay.map(dice => <DiceGroup dice={dice} key={dice[0].grouping}/>)

  return (
    <>
      <div className='diceRack' style={style}>
        {mappedDiceGroups}
      </div>
    </>
  )
}
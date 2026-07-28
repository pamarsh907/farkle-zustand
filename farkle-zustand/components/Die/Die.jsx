import './Die.css'
import { useDiceActions } from "../../stores/dice"
import { motion } from "motion/react"
import { useGameActions } from '../../stores/game'
import { useStatus } from '../../stores/game'

export default function Die({die}) {
  // const dieClass = 'die__' + value    
  const { holdDie } = useGameActions()
  const status = useStatus()



  const style = {
    backgroundColor: die.locked ? 'gray' : 'aquamarine',
    position: die.onBoard ? 'absolute' : 'relative',
    left: die.onBoard ? `${die.xLoc}px` : '0px',
    top: die.onBoard ? `${die.yLoc}px` : '0px',
    borderColor: die.locked ? 'red' : 'blue'
  }

  const handleOnClick = (id) => {
    if(status !== 'farkle'){
      holdDie(id)
    }
  }
  const disabled = status === 'farkle' || die.locked === true

  return <>
    <motion.button disabled={disabled} className='die' onClick={() => handleOnClick(die.id)} style={style} layoutId={`die-${die.id}`}>
      {die.value == 1 &&     
        <div className='die__1'>
          <div className='die__dot'></div>
        </div>
      }
      {die.value == 2 &&     
        <div className='die__2'>
          <div className='die__dot'></div>
          <div className='die__dot'></div>
        </div>
      }
      {die.value == 3 &&     
        <div className='die__3'>
          <div className='die__dot'></div>
          <div className='die__dot'></div>
          <div className='die__dot'></div>
        </div>
      }
      {die.value == 4 &&     
        <div className='die__4'>
          <div>
            <div className='die__dot'></div>
            <div className='die__dot'></div>
          </div>
          <div>
            <div className='die__dot'></div>
            <div className='die__dot'></div>
          </div>
        </div>
      }
      {die.value == 5 &&     
        <div className='die__5'>
          <div>
            <div className='die__dot'></div>
            <div className='die__dot'></div>
          </div>
          <div>
            <div className='die__dot'></div>
          </div>
          <div>
            <div className='die__dot'></div>
            <div className='die__dot'></div>     
          </div>
        </div>
      }
      {die.value == 6 &&     
        <div className='die__6'>
          <div>
            <div className='die__dot'></div>
            <div className='die__dot'></div>
            <div className='die__dot'></div>
          </div>
          <div>
            <div className='die__dot'></div>
            <div className='die__dot'></div>
            <div className='die__dot'></div>  
          </div>
        </div>
      }
    </motion.button>
  </>
}
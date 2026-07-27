import './Die.css'
import { useDiceActions } from "../../stores/dice";

export default function Die({die}) {
  // const dieClass = 'die__' + value    
  const { selectDie } = useDiceActions()

  const style = {
    backgroundColor: die.selected ? 'red' : 'gray'
  }

  return <>
    <button className='die' onClick={() => selectDie(die.id)} style={style}>
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
    </button>
  </>
}
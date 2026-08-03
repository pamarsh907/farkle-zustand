import './Die.css'
import { motion, useAnimationControls } from "motion/react"
import { useGameActions } from '../../stores/game'
import { useDiceActions } from '../../stores/dice'
import { useStatus } from '../../stores/game'
import { useEffect } from 'react'
import { useMediaQuery } from "@mui/material"

export default function Die({ die }) {
  const smallScreen = useMediaQuery('(max-width:600px)')
  const status = useStatus()
  const style = {
    backgroundColor: status === 'preroll' ? '#d8d3d3' : die.locked ? '#d8d3d3' : 'white',
    position: die.onBoard ? 'absolute' : 'relative',
    left: die.onBoard ? `${die.xLoc}px` : '0px',
    top: die.onBoard ? `${die.yLoc}px` : '0px',
    width: smallScreen ? '28px' : '40px',
    height: smallScreen ? '28px' : '40px'

  }
  const dieDotClass = smallScreen ? 'smallldie__dot' : 'die__dot'
  const { holdDie } = useGameActions()
  const { incrementLastAnimatedRoll, setRotation } = useDiceActions()

  const handleOnClick = (id) => {
    if (status !== 'farkle') {
      holdDie(id)
    }
  }
  const disabled = status === 'farkle' || die.locked
  const controls = useAnimationControls()

  useEffect(() => {
    if (die.rollCount !== 0 &&
      die.rollCount > die.lastAnimatedRoll
    ) {
      const restingAngle = -20 + Math.random() * 40
      const spins = 2 + Math.floor(Math.random() * 3)

      controls.start({
        rotate: spins * 360 + restingAngle,
        transition: {
          duration: 0.2 + Math.random() * 0.8
        }
      }).then(() => {
        setRotation(die.id, restingAngle)
        incrementLastAnimatedRoll(die.id)
      })
    }
  }, [controls, die.rollCount, die.lastAnimatedRoll, die.id, setRotation, incrementLastAnimatedRoll])

  useEffect(() => {
    if (die.rotation !== undefined) {
      controls.set({
        rotate: die.onBoard ? die.rotation : 0
      })
    }
  }, [die.onBoard, die.rotation, controls])

  const hoverAnimation = !die.locked && status !== 'farkle' ? {
    scale: 1.1,
    transition: { duration: 0.1 }
  } : {}

  return <>
    <motion.button
      disabled={disabled}
      className='die'
      onClick={() => handleOnClick(die.id)}
      style={style}
      layoutId={`die-${die.id}`}
      animate={controls}
      whileHover={hoverAnimation}
    >
      {die.value == 1 &&
        <div className='die__1'>
          <div className={dieDotClass}></div>
        </div>
      }
      {die.value == 2 &&
        <div className='die__2'>
          <div className={dieDotClass}></div>
          <div className={dieDotClass}></div>
        </div>
      }
      {die.value == 3 &&
        <div className='die__3'>
          <div className={dieDotClass}></div>
          <div className={dieDotClass}></div>
          <div className={dieDotClass}></div>
        </div>
      }
      {die.value == 4 &&
        <div className='die__4'>
          <div>
            <div className={dieDotClass}></div>
            <div className={dieDotClass}></div>
          </div>
          <div>
            <div className={dieDotClass}></div>
            <div className={dieDotClass}></div>
          </div>
        </div>
      }
      {die.value == 5 &&
        <div className='die__5'>
          <div>
            <div className={dieDotClass}></div>
            <div className={dieDotClass}></div>
          </div>
          <div>
            <div className={dieDotClass}></div>
          </div>
          <div>
            <div className={dieDotClass}></div>
            <div className={dieDotClass}></div>
          </div>
        </div>
      }
      {die.value == 6 &&
        <div className='die__6'>
          <div>
            <div className={dieDotClass}></div>
            <div className={dieDotClass}></div>
            <div className={dieDotClass}></div>
          </div>
          <div>
            <div className={dieDotClass}></div>
            <div className={dieDotClass}></div>
            <div className={dieDotClass}></div>
          </div>
        </div>
      }
    </motion.button>
  </>
}
import Die from "../Die/Die"
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

export default function DiceGroup({ dice }) {
  const groupColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo'
  ]

  const grouping = dice[0].grouping
  const color = groupColors[grouping]

 const ring  = {
  position: 'absolute',
  inset: '-5px',
  border: '2px solid',
  borderRadius: '18px',
  pointerEvents: 'none',
  borderColor: {color}
}

  return (
    <div className='group' style={{position: 'relative'}}>
      <AnimatePresence>
        {grouping !== 0 && (
          <motion.div
            style={ring}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            layout
          />
        )}
      </AnimatePresence>
      <div style={{display: 'flex'}}>
        {dice.map(die => <Die die={die} key={die.id} />)}
      </div>


    </div>
  )
}
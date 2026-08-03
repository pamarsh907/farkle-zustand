import Die from "../Die/Die"
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import { useMediaQuery } from "@mui/material"

export default function DiceGroup({ dice }) {
  const smallScreen = useMediaQuery('(max-width:600px)')
  const grouping = dice[0].grouping

 const ring  = {
  position: 'absolute',
  inset: '0px',
  border: '2px solid',
  borderRadius: '18px',
  pointerEvents: 'none',
  borderColor: 'gray',
}

  return (
    <div style={{position: 'relative', padding: smallScreen ? '5px' : '15px'}}>
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
        {dice.map(die => <Die die={die} key={`group-${die.id}`}/>)}
      </div>
    </div>
  )
}
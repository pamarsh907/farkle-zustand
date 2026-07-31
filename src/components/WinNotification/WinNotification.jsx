import Alert from "@mui/material/Alert"
import { AnimatePresence, motion } from "motion/react"

export default function WinNotification({ status }) {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence>
        {status === 'win' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              width: '100%'
            }}
          >
            <Alert severity="success">
              YOU WIN!
            </Alert>
          </motion.div>)}
      </AnimatePresence>
    </div>
  )
}
import Alert from "@mui/material/Alert"
import { AnimatePresence, motion } from "motion/react"

export default function FarkleNotification({ status }) {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence>
        {status === 'farkle' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: -20,
              transition: {
                duration: 0.3,
                delay: 0,
              },
            }}
            style={{
              position: "absolute",
              width: '100%'
            }}
          >
            <Alert severity="error">
              FARKLE
            </Alert>
          </motion.div>)}
      </AnimatePresence>
    </div>
  )
}
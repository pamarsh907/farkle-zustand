

import { useSpring, useTransform, motion } from 'motion/react'

export default function PointDisplay({ value }) {
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 20,
  })

  const display = useTransform(spring, (latest) =>
    Math.round(latest)
  )

  spring.set(value)

  return (
    <motion.span>
      {display}
    </motion.span>
  )

}



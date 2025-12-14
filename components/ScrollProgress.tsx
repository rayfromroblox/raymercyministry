'use client'

import { motion, useScroll } from 'framer-motion'
import { memo } from 'react'

// Thin bar that shows how far down the page you are
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-warm-400 to-primary-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default memo(ScrollProgress)


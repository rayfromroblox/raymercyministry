'use client'

import { motion, useScroll } from 'framer-motion'
import { memo } from 'react'

// Scroll Progress Bar
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


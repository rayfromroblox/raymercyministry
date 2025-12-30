'use client'

import { motion, useScroll } from 'framer-motion'
import { memo } from 'react'

// Thin bar that shows how far down the page you are
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#C85A4A] origin-left z-[150]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default memo(ScrollProgress)


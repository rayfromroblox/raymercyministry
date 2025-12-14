'use client'

import { motion } from 'framer-motion'
import { memo, useCallback } from 'react'
const Hero = () => {
  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section id="hero" className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden">
      {/* Backdrop photo with a soft gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-primary-900/75 to-primary-950/90 dark:from-primary-950/90 dark:via-primary-900/80 dark:to-primary-950/95" />
      </div>

      <div className="container-custom relative z-10 text-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          {/* Logo takes center stage on small screens */}
          <div className="mb-6 md:mb-8">
            <img
              src="/images/logo.png"
              alt="Ray Mercy Ministry"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
              fetchPriority="high"
            />
          </div>

          {/* Main heading stays legible on any screen */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 text-white drop-shadow-lg leading-tight">
            Bringing Hope to the <span className="text-secondary-400 italic block sm:inline mt-2 sm:mt-0">Vulnerable</span>
          </h1>

          {/* Supporting copy with friendlier spacing */}
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 mb-8 md:mb-10 max-w-2xl leading-relaxed px-4">
            Serving children and families across Kenya with compassion, dignity, and unwavering love.
          </p>

          {/* Big tap-friendly CTA */}
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto min-w-[200px] px-8 md:px-10 py-4 md:py-5 bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-600 text-white text-base md:text-lg font-semibold rounded-lg shadow-xl transition-colors duration-300 tracking-wide uppercase"
          >
            Our Mission
          </button>

          {/* Quick stats for credibility */}
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary-400 rounded-full" />
              <span>Bi-annual Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary-400 rounded-full" />
              <span>100+ Children Fed</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint we hide on phones */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2">
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  )
}

export default memo(Hero)

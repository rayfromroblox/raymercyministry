'use client'

import { motion } from 'framer-motion'
import { memo, useCallback } from 'react'

/**
 * Hero Section Component
 * 
 * Full-screen hero with background gradient, mission statement, and CTA
 * To customize:
 * - Change mission statement in the h1 tag
 * - Update background gradient colors in the className
 * - Replace background image by adding bg-[url('/path/to/image.jpg')] to the div
 */
const Hero = () => {
  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-800" />
      
      {/* Enhanced decorative elements with better positioning */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
      <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-warm-200 dark:bg-warm-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5" />
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo with transparent/blended background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="relative">
              <picture>
                <source 
                  srcSet="/images/logo-256.webp 256w, /images/logo-320.webp 320w, /images/logo-384.png 384w" 
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
                  type="image/webp"
                />
                <img 
                  src="/images/logo-256.png" 
                  alt="Ray Mercy Ministry" 
                  className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto drop-shadow-2xl relative z-10"
                  style={{ mixBlendMode: 'multiply' }}
                  fetchPriority="high"
                  decoding="async"
                  width="256"
                  height="256"
                />
              </picture>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-primary-200/30 dark:bg-primary-800/30 blur-2xl rounded-full transform scale-75" />
            </div>
          </motion.div>
          
          <h1 className="heading-primary mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-dark-100 dark:via-dark-200 dark:to-dark-100 bg-clip-text text-transparent">
            Ray Mercy Ministry
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-600 dark:text-dark-300 mb-4 tracking-wide">
            Bringing Hope to the Vulnerable
          </p>
          <p className="text-base md:text-lg text-gray-500 dark:text-dark-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Serving children and families across Kenya with compassion and dignity
          </p>
          
          <motion.button
            onClick={scrollToAbout}
            className="group btn-primary inline-flex items-center gap-2 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Learn More</span>
            <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.button>
        </motion.div>
      </div>

      {/* Smooth wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-24 md:h-32" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-white dark:fill-dark-800"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-white dark:fill-dark-800"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-white dark:fill-dark-800"
          />
        </svg>
      </div>
    </section>
  )
}

export default memo(Hero)


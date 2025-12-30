'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#F5F0E8] via-[#F8F3EB] to-[#F0E8DC]">
      {/* Sophisticated background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial from-[#C85A4A]/8 via-[#C85A4A]/3 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-gradient-radial from-[#8A9A84]/8 via-[#8A9A84]/3 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-10 order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 group"
            >
              <span className="text-[0.6rem] md:text-xs font-semibold text-[#C85A4A] uppercase tracking-[0.2em]">Kenya</span>
              <div className="h-px w-8 md:w-12 bg-[#C85A4A]" />
            </motion.div>

            <h1 className="text-4xl xs:text-5xl md:text-8xl lg:text-9xl xl:text-[10rem] font-serif leading-[0.9] text-[#1A1A1A] text-balance">
              Every child
              <span className="block mt-1 md:mt-2">deserves</span>
              <span className="block text-[#C85A4A] italic font-normal mt-2 md:mt-3">to be seen.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl lg:text-2xl text-[#4A4A4A] leading-[1.6] md:leading-[1.7] max-w-2xl font-light"
            >
              We're a small team in Kenya, showing up twice a year to provide nourishing meals and care to families who need it most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 pt-2"
            >
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full sm:w-auto"
              >
                Learn Our Story
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary w-full sm:w-auto"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Stats - Premium treatment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-10 md:gap-16 pt-8 md:pt-12 justify-center lg:justify-start border-t border-[#E0E0E0]/60 w-full"
            >
              <div>
                <div className="text-4xl md:text-7xl font-serif text-[#1A1A1A] mb-1 md:mb-2 leading-none">100+</div>
                <div className="text-[10px] md:text-xs text-[#6A6A6A] font-medium uppercase tracking-widest">Children</div>
              </div>
              <div>
                <div className="text-4xl md:text-7xl font-serif text-[#1A1A1A] mb-1 md:mb-2 leading-none">2x</div>
                <div className="text-[10px] md:text-xs text-[#6A6A6A] font-medium uppercase tracking-widest">Per Year</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with premium treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <div className="relative group max-w-[500px] mx-auto lg:max-w-none">
              {/* Main image with sophisticated frame */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-2xl shadow-[#C85A4A]/10 border-[8px] md:border-[12px] border-white">
                <img
                  src="/images/gallery/17.jpg"
                  alt="Children in Kenya"
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>

              {/* Premium decorative elements */}
              <div className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 w-32 md:w-40 h-32 md:h-40 bg-[#8A9A84]/15 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-20 md:w-24 h-20 md:h-24 bg-[#C85A4A]/10 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)

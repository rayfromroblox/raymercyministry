'use client'

import { useInView, motion } from 'framer-motion'
import { useRef, memo } from 'react'
import { FaEnvelope } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-padding bg-[#F5F0E8]" ref={ref}>
      <div className="container-custom">
        {/* Story Section - Large Editorial Layout */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 lg:gap-32 items-center mb-32 md:mb-64">
          {/* Visuals - Asymmetric Floating Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 space-y-8 md:space-y-12">
              <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white max-w-[95%] md:max-w-[90%]">
                <img
                  src="/images/gallery/8.jpg"
                  alt="Ray Mercy Feeding Program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 w-32 md:w-72 aspect-square bg-[#C85A4A] rounded-[1.5rem] md:rounded-[3rem] flex items-center justify-center p-4 md:p-12 text-white shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-700 z-20">
                <p className="text-sm md:text-2xl font-serif italic text-center leading-snug">
                  "Hope is found in the hands that serve."
                </p>
              </div>
            </div>
            {/* Background decorative blob */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#8A9A84]/15 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.div className="flex items-center gap-4 group">
                <span className="text-[10px] md:text-xs font-semibold text-[#C85A4A] uppercase tracking-[0.25em]" style={{ fontFamily: 'Sora, sans-serif' }}>Our Humble Start</span>
                <div className="h-[1px] w-12 md:w-20 bg-[#C85A4A]/30 group-hover:w-24 transition-all duration-700" />
              </motion.div>
              <h2 className="text-4xl md:text-7xl lg:text-9xl font-serif leading-[0.95] md:leading-[0.92] text-[#1A1A1A] tracking-tighter">
                A mission <br /> born from <br className="hidden md:block" />
                <span className="text-[#C85A4A] italic font-normal">pure heart.</span>
              </h2>
            </div>

            <div className="space-y-5 md:space-y-10 text-base md:text-2xl text-[#4A4A4A] leading-[1.6] md:leading-[1.8] font-light max-w-2xl">
              <p>
                Ray Mercy Ministry began with a simple truth we couldn't ignore: no child should face hunger or feel alone. What started as small acts of kindness in Kenya has grown into a lifelong commitment.
              </p>
              <p>
                We believe in showing up, consistently and with care. Our biannual programs meet immediate needs, while our home visits build relationships that last. We are not just providing meals; we are providing a sense of belonging.
              </p>
            </div>

            <div className="pt-6 md:pt-10 border-t border-[#E0E0E0]">
              <p className="text-sm md:text-lg font-medium text-[#1A1A1A] flex items-center gap-4 italic opacity-80">
                <span className="w-6 md:w-12 h-px bg-[#C85A4A]" />
                Goal: A permanent home for orphans in Kenya.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default memo(About)

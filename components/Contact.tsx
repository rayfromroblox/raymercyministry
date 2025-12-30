'use client'

import { useInView, motion } from 'framer-motion'
import { useRef, memo } from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const info = [
    {
      icon: FaPhone,
      title: "Speak with us",
      value: "+254 721 826905",
      link: "tel:+254721826905",
      shape: "rounded-full"
    },
    {
      icon: FaEnvelope,
      title: "Write to us",
      value: "rachelmacharia80@gmail.com",
      link: "mailto:rachelmacharia80@gmail.com",
      shape: "rounded-[1.5rem] scale-y-110"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-[#F5F0E8] overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-center">
          {/* Invitation Copy */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 md:space-y-10 text-center lg:text-left"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center justify-center lg:justify-start gap-4 group w-full lg:w-auto">
                <span className="text-[10px] md:text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.2em]" style={{ fontFamily: 'Sora, sans-serif' }}>Open Hearts</span>
                <div className="h-px w-10 bg-[#C85A4A]" />
              </div>
              <h2 className="text-4xl md:text-8xl font-serif text-[#1A1A1A] leading-[0.95] tracking-tighter mx-auto lg:mx-0">
                Let’s change <br />
                the <span className="text-[#C85A4A] italic font-normal">narrative.</span>
              </h2>
            </div>

            <p className="text-base md:text-xl text-[#4A4A4A] leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Every conversation starts a journey. Whether you wish to partner, volunteer or simply hear more about the children we serve; we invite you to reach out.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a href="tel:+254721826905" className="btn-primary w-full sm:w-auto">
                Start a Conversation
              </a>
              <a href="mailto:rachelmacharia80@gmail.com" className="btn-secondary w-full sm:w-auto">
                Send an Email
              </a>
            </div>
          </motion.div>

          {/* Contact Details Card - Compact Rework */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 blur-2xl -z-10" />

              <div className="bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-14 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.06)] border border-white/60 relative z-10">
                <div className="space-y-6 md:space-y-12 relative z-10">
                  {info.map((item, i) => (
                    <div key={i} className="flex gap-4 md:gap-8 items-center group">
                      <div className={`flex-shrink-0 w-10 h-10 md:w-16 md:h-16 bg-[#F5F0E8] flex items-center justify-center transition-all duration-700 group-hover:bg-[#C85A4A] ${item.shape}`}>
                        <item.icon className="text-sm md:text-xl text-[#C85A4A] group-hover:text-white transition-colors duration-500" />
                      </div>

                      <div className="space-y-0.5 md:space-y-1 min-w-0 flex-1">
                        <p className="text-[0.5rem] md:text-[0.6rem] font-bold text-[#A0A0A0] uppercase tracking-[0.2em]" style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="text-sm md:text-2xl font-serif font-black text-[#1A1A1A] hover:text-[#C85A4A] transition-colors leading-tight block truncate">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm md:text-2xl font-serif font-black text-[#1A1A1A] leading-tight truncate">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-[#F0F0F0] flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-sm md:text-base flex-shrink-0">
                    ♡
                  </div>
                  <p className="text-xs md:text-sm font-light text-[#6A6A6A] leading-relaxed">
                    Our doors and hearts are always open to those who believe in a brighter future.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)

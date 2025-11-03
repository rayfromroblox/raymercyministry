'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, memo, useMemo } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

// Move static data outside component
const CONTACT_INFO = [
  {
    icon: FaPhone,
    title: "Phone",
    value: "+254 721 826905",
    link: "tel:+254721826905",
    gradient: "from-primary-400 to-primary-600"
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "rachelmacharia80@gmail.com",
    link: "mailto:rachelmacharia80@gmail.com",
    gradient: "from-primary-500 to-primary-700"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Kenya",
    link: null,
    gradient: "from-primary-400 to-primary-500"
  }
] as const

// Contact Section Component
const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Memoize animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }), [])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }), [])

  return (
    <section id="contact" className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-primary-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 text-center shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-400/10 rounded-full filter blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                Support Our Mission
              </h2>
              <p className="text-white/90 text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Partner with us to bring hope to vulnerable children and families across Kenya
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 max-w-4xl mx-auto">
                {CONTACT_INFO.map((info, index) => (
                  <div key={index} className="text-center">
                    {info.link ? (
                      <a
                        href={info.link}
                        className="group block bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                          <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center md:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                            <info.icon className="text-white text-lg md:text-xl" />
                          </div>
                          <div className="flex-1 text-left md:text-center">
                            <h3 className="text-xs md:text-sm font-semibold text-white/80 mb-1 md:mb-2 uppercase tracking-wider">
                              {info.title}
                            </h3>
                            <p className="text-white font-medium text-sm md:text-base group-hover:text-white transition-colors break-all">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                        <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                          <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center md:mb-3`}>
                            <info.icon className="text-white text-lg md:text-xl" />
                          </div>
                          <div className="flex-1 text-left md:text-center">
                            <h3 className="text-xs md:text-sm font-semibold text-white/80 mb-1 md:mb-2 uppercase tracking-wider">
                              {info.title}
                            </h3>
                            <p className="text-white/90 font-medium text-sm md:text-base">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto">
                <motion.a
                  href="tel:+254721826905"
                  className="group px-8 md:px-10 py-4 md:py-5 bg-white text-primary-600 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-primary-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Call Now
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </motion.a>
                <motion.a
                  href="mailto:rachelmacharia80@gmail.com"
                  className="group px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Email
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 dark:bg-dark-800 rounded-full border border-gray-200 dark:border-dark-700">
              <div className="flex gap-2">
                <FaFacebookF className="text-gray-400 dark:text-dark-400 text-lg" />
                <FaInstagram className="text-gray-400 dark:text-dark-400 text-lg" />
                <FaTwitter className="text-gray-400 dark:text-dark-400 text-lg" />
              </div>
              <span className="text-gray-500 dark:text-dark-300 text-sm font-medium">Social media coming soon</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Contact)


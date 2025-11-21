'use client'

import { useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

// Contact Section Component
const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Call Us",
      value: "+254 721 826905",
      link: "tel:+254721826905",
      action: "Tap to Call"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      value: "rachelmacharia80@gmail.com",
      link: "mailto:rachelmacharia80@gmail.com",
      action: "Tap to Email"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Find Us",
      value: "Kenya",
      link: null,
      action: null
    }
  ]

  return (
    <section id="contact" className="py-12 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 dark:from-dark-950 dark:to-dark-900" />
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary-200/30 dark:bg-secondary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 md:w-80 h-56 md:h-80 bg-primary-200/30 dark:bg-primary-800/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className={`transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <FaHeart className="text-secondary-500 text-xl md:text-2xl animate-pulse" />
              <span className="text-secondary-600 dark:text-secondary-400 font-semibold uppercase tracking-wider text-sm">Partner With Us</span>
              <FaHeart className="text-secondary-500 text-xl md:text-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-primary-100 mb-4 md:mb-6">
              Together, We Can Make a Difference
            </h2>

            {/* Mobile: Short version, Desktop: Full version */}
            <p className="text-gray-700 dark:text-dark-200 text-base md:text-lg leading-relaxed mb-3 md:mb-4 px-2">
              <span className="md:hidden">
                Your support plants seeds of hope in vulnerable communities across Kenya.
              </span>
              <span className="hidden md:inline">
                Every call, every email, every connection brings us closer to changing a child's life.
                Your support, whether big or small, plants seeds of hope in vulnerable communities across Kenya.
              </span>
            </p>

            <p className="text-primary-700 dark:text-primary-300 font-medium italic text-base md:text-lg">
              "Alone we can do so little; together we can do so much."
            </p>
          </div>

          {/* Contact Cards - Mobile: Stacked, Desktop: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index}>
                {info.link ? (
                  <a
                    href={info.link}
                    className="group block bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-dark-700 hover:border-primary-400 dark:hover:border-primary-500 active:scale-95 md:active:scale-100 md:hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="text-primary-600 dark:text-primary-400 text-2xl" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-dark-400 mb-2 uppercase tracking-wide">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 dark:text-white font-medium mb-3 break-all text-sm md:text-base">
                        {info.value}
                      </p>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                        {info.action} →
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-dark-700 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl flex items-center justify-center mb-4">
                        <info.icon className="text-primary-600 dark:text-primary-400 text-2xl" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-dark-400 mb-2 uppercase tracking-wide">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 dark:text-white font-medium text-sm md:text-base">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 md:p-8 max-w-2xl w-full border border-primary-200/50 dark:border-primary-700/50">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-gray-600 dark:text-dark-300 mb-6 leading-relaxed text-sm md:text-base px-2">
                Reach out to learn how you can support our feeding programs, sponsor a child, or volunteer your time
              </p>

              {/* Mobile: Stacked buttons, Desktop: Side by side */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a
                  href="tel:+254721826905"
                  className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPhone className="text-sm" />
                  Call Rachel
                </a>

                <a
                  href="mailto:rachelmacharia80@gmail.com"
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-dark-700 text-primary-600 dark:text-primary-400 font-semibold rounded-lg border-2 border-primary-600 dark:border-primary-500 hover:bg-primary-50 dark:hover:bg-dark-600 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaEnvelope className="text-sm" />
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)

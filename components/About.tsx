'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import { FaHeart, FaHandHoldingHeart, FaHome } from 'react-icons/fa'

/**
 * About Section Component
 * 
 * Tells the story of the ministry with alternating image-text layout
 * To customize:
 * - Edit the mission statement and vision text
 * - Replace placeholder images in the public/images folder
 * - Adjust the three core values (icons and text)
 */
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-white dark:bg-dark-900 relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-secondary mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          {/* Mission and Vision - Grid Layout on Desktop */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Mission */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-dark-100 mb-4">
                Mission
              </h3>
              <p className="text-gray-600 dark:text-dark-300 text-lg leading-loose mb-6">
                We serve vulnerable children and families through feeding programs and community outreach. 
                Twice yearly, we provide meals and support to those in need across Kenya.
              </p>
              <div className="pl-6 border-l-4 border-primary-400 dark:border-primary-500 py-2">
                <p className="text-primary-700 dark:text-primary-300 text-lg italic font-medium">
                  "Whoever brings refreshment will be refreshed."
                </p>
                <p className="text-primary-600 dark:text-primary-400 text-sm mt-1">— Proverbs 11:25</p>
              </div>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-dark-100 mb-4">
                Vision
              </h3>
              <p className="text-gray-600 dark:text-dark-300 text-lg leading-loose mb-6">
                To establish a children's home providing safety, education, and care for orphaned and 
                vulnerable children in Kenya.
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-warm-50 dark:from-primary-900/20 dark:to-warm-900/20 p-6 rounded-xl border border-primary-100 dark:border-primary-800/50">
                <p className="text-gray-700 dark:text-dark-200 text-base leading-relaxed">
                  Founded by <span className="font-semibold text-gray-900 dark:text-dark-100">Rachel Macharia</span>, our ministry continues to expand its reach, serving more families each year with God's love and compassion.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16">
            {[
              {
                icon: FaHeart,
                title: "Compassion",
                description: "Serving with dignity and respect",
                color: "from-primary-400 to-primary-500"
              },
              {
                icon: FaHandHoldingHeart,
                title: "Service",
                description: "Bi-annual feeding programs and outreach",
                color: "from-primary-500 to-primary-600"
              },
              {
                icon: FaHome,
                title: "Hope",
                description: "Building a future children's home",
                color: "from-warm-400 to-warm-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700 overflow-hidden"
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ willChange: 'transform' }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${value.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="text-white text-3xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-3 tracking-tight">{value.title}</h4>
                  <p className="text-gray-600 dark:text-dark-300 leading-relaxed">{value.description}</p>
                </div>
                
                {/* Decorative dot */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-300 dark:bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(About)


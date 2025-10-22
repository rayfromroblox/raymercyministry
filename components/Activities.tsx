'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import { FaChild, FaHandsHelping } from 'react-icons/fa'

// Activities Section Component
const Activities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const activities = [
    {
      icon: FaChild,
      title: "Children & Family Support",
      description: "Bi-annual feeding programs serving hundreds of children and families. Regular visits to children's homes providing meals, supplies, and companionship to orphaned and vulnerable children.",
      image: "children",
      gradient: "from-primary-400 to-primary-600"
    },
    {
      icon: FaHandsHelping,
      title: "Community Outreach",
      description: "Support services for the sick, elderly, and homebound. Holiday celebrations and special event programs bringing hope, gifts, and assistance to communities in need.",
      image: "outreach",
      gradient: "from-primary-500 to-primary-700"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="activities" className="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-primary-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="heading-secondary mb-4">
              Our Programs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
                whileHover={{ y: -8 }}
                style={{ willChange: 'transform' }}
              >
                <div className={`relative h-72 md:h-80 bg-gradient-to-br ${activity.gradient} flex items-center justify-center overflow-hidden`}>
                  <activity.icon className="text-white text-7xl group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 tracking-tight">
                      {activity.title}
                    </h3>
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-600 dark:text-dark-300 leading-loose">
                    {activity.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-warm-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Activities)


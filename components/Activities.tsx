'use client'

import { useInView } from 'framer-motion'
import { useRef, memo, useState } from 'react'
import { FaChild, FaHandsHelping, FaUtensils, FaGift, FaChevronDown } from 'react-icons/fa'

// Activities Section Component
const Activities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false) // Collapsed by default on mobile

  const programs = [
    {
      icon: FaUtensils,
      title: "Feeding Programs",
      frequency: "Twice Yearly",
      description: "We serve nutritious meals to hundreds of children and families during our bi-annual feeding programs. Each meal is prepared with love and served with dignity.",
      mobileDescription: "Nutritious meals for hundreds twice a year",
      impact: "100+ children fed per program"
    },
    {
      icon: FaChild,
      title: "Children's Home Visits",
      frequency: "Regular",
      description: "Regular visits to children's homes where we provide meals, essential supplies, and spend quality time with orphaned and vulnerable children.",
      mobileDescription: "Meals, supplies, and love for orphaned kids",
      impact: "Building lasting relationships"
    },
    {
      icon: FaHandsHelping,
      title: "Community Support",
      frequency: "Ongoing",
      description: "Reaching out to the sick, elderly, and homebound in our communities with practical support and compassionate care.",
      mobileDescription: "Caring for the sick, elderly, and homebound",
      impact: "Multiple communities served"
    },
    {
      icon: FaGift,
      title: "Holiday Celebrations",
      frequency: "Seasonal",
      description: "Special holiday programs bringing joy, gifts, and hope to families in need during Christmas and other significant occasions.",
      mobileDescription: "Bringing joy during holidays",
      impact: "Creating cherished memories"
    }
  ]

  return (
    <section id="activities" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white dark:bg-dark-950" ref={ref}>
      <div className="container-custom">
        <div className={`transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-primary-100 mb-4">
              Our Programs
            </h2>
            <div className="w-16 md:w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4 md:mb-6" />
            <p className="text-gray-600 dark:text-dark-300 text-base md:text-lg max-w-2xl mx-auto px-4">
              Practical ways we serve our community with compassion and dedication
            </p>
          </div>

          {/* Mobile: Collapsed Summary, Desktop: Full Grid */}
          <div className="max-w-5xl mx-auto">
            {/* Mobile Expandable Container */}
            <div className="md:hidden bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-md">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between mb-4"
              >
                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white">
                  View All Programs
                </h3>
                <FaChevronDown className={`w-5 h-5 text-primary-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Summary - Always Visible */}
              {!isExpanded && (
                <div className="space-y-3">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center gap-3 py-2">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <program.icon className="text-primary-600 dark:text-primary-400 text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{program.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{program.frequency}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Mobile Expanded - Details */}
              {isExpanded && (
                <div className="space-y-4">
                  {programs.map((program, index) => (
                    <div key={index} className="pb-4 border-b border-gray-200 dark:border-dark-700 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <program.icon className="text-primary-600 dark:text-primary-400 text-xl" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-serif font-bold text-gray-900 dark:text-white text-lg mb-1">
                            {program.title}
                          </h4>
                          <span className="inline-block text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full uppercase">
                            {program.frequency}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-dark-300 text-sm leading-relaxed mb-2">
                        {program.mobileDescription}
                      </p>
                      <p className="text-sm font-medium text-primary-700 dark:text-primary-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                        {program.impact}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Grid - Always Visible */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-neutral-50 dark:from-dark-900 dark:to-dark-850 rounded-2xl p-6 border border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-300">
                      <program.icon className="text-primary-600 dark:text-primary-400 text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                        {program.title}
                      </h3>
                      <span className="inline-block text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full uppercase tracking-wide">
                        {program.frequency}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-dark-300 leading-relaxed mb-4 text-base">
                    {program.description}
                  </p>

                  <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                    <p className="text-sm font-medium text-primary-700 dark:text-primary-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                      {program.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 md:p-8 max-w-2xl w-full border border-primary-200/50 dark:border-primary-700/50">
              <p className="text-gray-700 dark:text-dark-200 text-base md:text-lg leading-relaxed mb-6">
                Want to support or participate in our programs? We'd love to hear from you!
              </p>
              <a
                href="#contact"
                className="inline-block w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-semibold rounded-lg transition-colors duration-300 text-base"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Activities)

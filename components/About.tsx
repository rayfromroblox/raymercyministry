'use client'

import { useInView } from 'framer-motion'
import { useRef, memo, useState } from 'react'
import { FaHeart, FaHandHoldingHeart, FaSeedling, FaChevronDown } from 'react-icons/fa'

// About Section Component
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const values = [
    {
      icon: FaHeart,
      title: "Compassion",
      description: "Serving with dignity and respect, showing Christ's love to every person we encounter",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/30"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Service",
      description: "Bi-annual feeding programs and outreach, meeting practical needs with excellence",
      color: "from-primary-500 to-primary-700",
      bgColor: "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/30"
    },
    {
      icon: FaSeedling,
      title: "Hope",
      description: "Building a future children's home and nurturing dreams for tomorrow",
      color: "from-secondary-500 to-amber-600",
      bgColor: "bg-gradient-to-br from-secondary-50 to-amber-100 dark:from-secondary-900/20 dark:to-amber-900/30"
    }
  ]

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section id="about" className="py-12 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary-200/30 dark:bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-56 md:w-80 h-56 md:h-80 bg-secondary-200/30 dark:bg-secondary-800/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className={`transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-primary-100 mb-4">
              About Us
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-dark-300 mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg px-4">
              Serving with compassion • Building with hope • Growing through faith
            </p>
          </div>

          {/* Mission & Vision - Mobile Expandable */}
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 lg:gap-16 mb-12 md:mb-20">
            {/* Mission */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 md:p-0 md:bg-transparent shadow-md md:shadow-none">
              <button
                onClick={() => toggleSection('mission')}
                className="w-full flex items-center justify-between md:cursor-default"
              >
                <div className="flex-1 text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary-900 dark:text-primary-100 mb-2">
                    Mission
                  </h3>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                </div>
                <FaChevronDown className={`md:hidden w-5 h-5 text-primary-600 transition-transform ${expandedSection === 'mission' ? 'rotate-180' : ''}`} />
              </button>

              <div className={`mt-4 space-y-4 md:mt-6 md:block ${expandedSection === 'mission' || typeof window === 'undefined' ? 'block' : 'hidden md:block'}`}>
                <p className="text-gray-700 dark:text-dark-200 text-base md:text-lg leading-relaxed">
                  We serve vulnerable children and families through feeding programs and community outreach.
                  Twice yearly, we provide meals and support to those in need across Kenya.
                </p>
                <div className="relative pl-4 md:pl-6 py-3 md:py-4 border-l-4 border-primary-500 dark:border-primary-400">
                  <div className="absolute -left-2 top-4 md:top-6 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full" />
                  <p className="text-primary-800 dark:text-primary-200 text-base md:text-lg italic font-medium">
                    "Whoever brings refreshment will be refreshed."
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 text-xs md:text-sm mt-2 font-semibold">— Proverbs 11:25</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 md:p-0 md:bg-transparent shadow-md md:shadow-none">
              <button
                onClick={() => toggleSection('vision')}
                className="w-full flex items-center justify-between md:cursor-default"
              >
                <div className="flex-1 text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary-900 dark:text-primary-100 mb-2">
                    Vision
                  </h3>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full" />
                </div>
                <FaChevronDown className={`md:hidden w-5 h-5 text-primary-600 transition-transform ${expandedSection === 'vision' ? 'rotate-180' : ''}`} />
              </button>

              <div className={`mt-4 space-y-4 md:mt-6 md:block ${expandedSection === 'vision' || typeof window === 'undefined' ? 'block' : 'hidden md:block'}`}>
                <p className="text-gray-700 dark:text-dark-200 text-base md:text-lg leading-relaxed">
                  To establish a children's home providing safety, education, and care for orphaned and
                  vulnerable children in Kenya.
                </p>
                <div className="relative overflow-hidden bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-primary-500/5 dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-primary-400/5 p-6 md:p-8 rounded-2xl border-2 border-primary-200/50 dark:border-primary-700/50">
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-secondary-400/20 dark:bg-secondary-500/10 rounded-full blur-2xl" />
                  <p className="relative text-gray-800 dark:text-dark-100 text-sm md:text-base leading-relaxed">
                    Founded by <span className="font-bold text-primary-700 dark:text-primary-300">Rachel Macharia</span>, our ministry continues to expand its reach, serving more families each year with God's love and compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values - Mobile Compact, Desktop Full */}
          <div className="mt-12 md:mt-24">
            <div className="text-center mb-6 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-dark-50 mb-2 md:mb-3">Our Core Values</h3>
              <p className="text-gray-600 dark:text-dark-300 text-sm md:text-lg">The foundation of everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative active:scale-95 md:hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Mobile: Compact Horizontal Card */}
                  <div className={`md:hidden relative ${value.bgColor} p-4 rounded-xl overflow-hidden flex items-center gap-4`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-active:opacity-20 transition-opacity duration-300`} />

                    <div className={`relative flex-shrink-0 inline-flex p-3 bg-gradient-to-br ${value.color} rounded-xl shadow-md`}>
                      <value.icon className="text-white text-2xl" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-1">{value.title}</h4>
                      <p className="text-gray-700 dark:text-dark-200 leading-snug text-xs line-clamp-2">{value.description}</p>
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`} />
                  </div>

                  {/* Desktop: Full Card */}
                  <div className={`hidden md:block relative ${value.bgColor} p-8 rounded-3xl overflow-hidden min-h-[280px]`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                    <div className="relative mb-6">
                      <div className={`inline-flex p-5 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                        <value.icon className="text-white text-4xl" />
                      </div>
                    </div>

                    <h4 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                    <p className="text-gray-700 dark:text-dark-200 leading-relaxed text-base">{value.description}</p>

                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)

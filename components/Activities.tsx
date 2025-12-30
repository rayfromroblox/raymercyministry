'use client'

import { useInView, motion } from 'framer-motion'
import { useRef, memo } from 'react'

const Activities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const programs = [
    {
      title: "Bi-Annual Nourishment",
      tagline: "Twice a year, we nourish hearts and bodies.",
      description: "Our biannual feeding programs gather hundreds of families for nutritious meals and essential supplies. It's more than food; it's a celebration of community and unconditional care.",
      image: "/images/gallery/2.jpg",
    },
    {
      title: "Compassionate Presence",
      tagline: "Visiting the corners of our community.",
      description: "We go where the need is most personal. Our home visits provide medical supplies, food, and companionship to families who find themselves isolated by circumstance or disability.",
      image: "/images/gallery/7.jpg",
    },
    {
      title: "Local Partnerships",
      tagline: "United in service across Kenya.",
      description: "By working with healthcare professionals and local leaders, we create a network of support that ensures no child or elderly person is invisible to the community.",
      image: "/images/gallery/13.jpg",
    }
  ]

  return (
    <section id="activities" className="section-padding bg-[#F5F0E8] overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-48 max-w-5xl"
        >
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
            <span className="text-[10px] md:text-xs font-semibold text-[#C85A4A] uppercase tracking-[0.3em]" style={{ fontFamily: 'Sora, sans-serif' }}>Our Impact</span>
            <div className="h-px w-16 md:w-32 bg-[#C85A4A]/20 rounded-full" />
          </div>
          <h2 className="text-5xl md:text-9xl font-serif text-[#1A1A1A] leading-[0.9] tracking-tighter">
            How we serve <br />
            <span className="text-[#C85A4A] italic font-normal">the resilient.</span>
          </h2>
        </motion.div>

        {/* Programs - Alternating Large Visual Blocks */}
        <div className="space-y-24 md:space-y-64">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className={`grid lg:grid-cols-12 gap-10 md:gap-16 lg:gap-32 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                  </div>
                  {/* Floating index number */}
                  <div className={`absolute -top-6 md:-top-12 ${index % 2 === 1 ? '-right-6 md:-right-12' : '-left-6 md:-left-12'} text-6xl md:text-[12rem] font-serif text-[#C85A4A]/5 leading-none select-none z-0`}>
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-5 space-y-4 md:space-y-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2 md:space-y-6">
                  <p className="text-[#C85A4A] font-semibold uppercase tracking-[0.2em] text-[0.6rem] md:text-xs" style={{ fontFamily: 'Sora, sans-serif' }}>{program.tagline}</p>
                  <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif text-[#1A1A1A] leading-tight font-bold">
                    {program.title}
                  </h3>
                </div>
                <p className="text-base md:text-xl lg:text-2xl text-[#4A4A4A] leading-relaxed font-light">
                  {program.description}
                </p>
                <div className="pt-6">
                  <div className="h-px w-24 bg-[#E0E0E0]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default memo(Activities)

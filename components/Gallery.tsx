'use client'

import { useInView, motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, memo } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const images = [9, 10, 12, 14, 4, 1, 2, 3, 5, 6, 7, 8, 11, 13, 15, 16].map((imgId, i) => ({
    id: imgId,
    src: `/images/gallery/${imgId}.jpg`,
    alt: `Moment of Mercy ${imgId}`,
    className: i === 0 ? "md:col-span-2 md:row-span-2" : i === 5 ? "md:row-span-2" : i === 8 ? "md:col-span-2" : ""
  }))

  const openLightbox = (idx: number) => {
    setSelectedImage(idx)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = ''
  }

  const displayedImages = isExpanded ? images : images.slice(0, 5)

  return (
    <section id="gallery" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-32 space-y-6 md:space-y-8"
        >
          <div className="inline-flex items-center gap-4 group">
            <span className="text-xs font-semibold text-[#8A9A84] uppercase tracking-[0.3em]" style={{ fontFamily: 'Sora, sans-serif' }}>The Visual Story</span>
            <div className="h-[1px] w-20 bg-[#8A9A84]/40" />
          </div>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif text-[#1A1A1A] leading-[0.95] md:leading-[0.9]">
            Moments <br />of <span className="text-[#8A9A84] italic font-normal">tangible hope.</span>
          </h2>
        </motion.div>

        {/* Boutique Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedImages.map((img) => {
              const fullIdx = images.findIndex(i => i.id === img.id)
              return (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`group relative overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl ${img.className}`}
                  style={{ transformOrigin: 'center' }}
                  onClick={() => openLightbox(fullIdx)}
                >
                  <div className="w-full h-full aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#C85A4A]/0 group-hover:bg-[#C85A4A]/5 transition-colors duration-700" />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Action Button */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 md:mt-24 text-center"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn-secondary px-10 py-4 text-sm tracking-widest uppercase font-bold border-[#8A9A84]/20 text-[#1A1A1A] hover:bg-[#8A9A84]/5"
          >
            {isExpanded ? 'Show Less' : 'Explore the Archive'}
          </button>
        </motion.div>
      </div>

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#1A1A1A]/98 backdrop-blur-3xl flex items-center justify-center p-6 md:p-20"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 md:top-12 md:right-12 w-12 h-12 md:w-20 md:h-20 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/5"
              onClick={closeLightbox}
            >
              <FaTimes size={18} />
            </button>

            <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center gap-12" onClick={(e) => e.stopPropagation()}>
              <div className="w-full h-full relative rounded-[4rem] overflow-hidden shadow-2xl border border-white/5 bg-black/20">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center gap-6 md:gap-12 bg-white/5 backdrop-blur-md px-8 md:px-12 py-4 md:py-6 rounded-full border border-white/10 text-white shadow-2xl">
                <button
                  onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaChevronLeft size={16} />
                </button>
                <div className="text-center">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] opacity-60 mb-0.5" style={{ fontFamily: 'Sora, sans-serif' }}>Detail</p>
                  <p className="font-serif italic text-lg md:text-2xl">{selectedImage + 1} of {images.length}</p>
                </div>
                <button
                  onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default memo(Gallery)

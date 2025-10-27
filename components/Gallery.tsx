'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, memo, useCallback } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa'

// Gallery Section Component
const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const galleryImages = [
    { id: 1, src: '/images/gallery/1.jpg', alt: 'Ministry outreach with children', color: 'from-primary-300 to-primary-400' },
    { id: 2, src: '/images/gallery/2.jpg', alt: 'Children receiving care and support', color: 'from-primary-400 to-primary-500' },
    { id: 3, src: '/images/gallery/3.jpg', alt: 'Community service event', color: 'from-primary-500 to-primary-600' },
    { id: 4, src: '/images/gallery/4.jpg', alt: 'Bringing hope to vulnerable children', color: 'from-primary-300 to-primary-500' },
    { id: 5, src: '/images/gallery/5.jpg', alt: 'Feeding program initiative', color: 'from-primary-400 to-primary-600' },
    { id: 6, src: '/images/gallery/6.jpg', alt: 'Serving the community with love', color: 'from-primary-500 to-primary-700' },
    { id: 7, src: '/images/gallery/7.jpg', alt: 'Ministry work in action', color: 'from-primary-300 to-primary-400' },
    { id: 8, src: '/images/gallery/8.jpg', alt: 'Making a difference in children lives', color: 'from-primary-400 to-primary-500' },
    { id: 9, src: '/images/gallery/9.jpg', alt: 'Spreading hope and joy', color: 'from-primary-500 to-primary-600' },
    { id: 10, src: '/images/gallery/10.jpg', alt: 'Empowering vulnerable communities', color: 'from-primary-300 to-primary-500' },
    { id: 11, src: '/images/gallery/11.jpg', alt: 'Mercy and compassion in action', color: 'from-primary-400 to-primary-600' },
    { id: 12, src: '/images/gallery/12.jpg', alt: 'Serving with dedication', color: 'from-primary-500 to-primary-700' },
    { id: 13, src: '/images/gallery/13.jpg', alt: 'Transforming lives through service', color: 'from-primary-300 to-primary-400' },
    { id: 14, src: '/images/gallery/14.jpg', alt: 'Building a brighter future together', color: 'from-primary-400 to-primary-500' },
  ]

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }, [])

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }, [selectedImage, galleryImages.length])

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }, [selectedImage, galleryImages.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="gallery" className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-white dark:bg-dark-900 relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-secondary mb-4">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-8" />
            
            {!isGalleryOpen && (
              <motion.button
                onClick={() => setIsGalleryOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Gallery
              </motion.button>
            )}
          </motion.div>

          {isGalleryOpen && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                onClick={() => openLightbox(index)}
                style={{ willChange: 'transform' }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-medium text-lg">{image.alt}</p>
                    <div className="w-12 h-1 bg-white/60 mt-2 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
              </div>
              
              <div className="text-center mt-8">
                <button
                  onClick={() => setIsGalleryOpen(false)}
                  className="px-6 py-3 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors hover:scale-105"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary-400 transition-colors z-10"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>

          <button
            className="absolute left-4 text-white text-4xl hover:text-primary-400 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <FaChevronLeft />
          </button>

          <motion.div
            key={selectedImage}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="rounded-lg max-h-[80vh] w-auto object-contain mx-auto"
              decoding="async"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage].alt}
            </p>
          </motion.div>

          <button
            className="absolute right-4 text-white text-4xl hover:text-primary-400 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default memo(Gallery)


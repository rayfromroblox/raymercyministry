'use client'

import { useInView, AnimatePresence, motion } from 'framer-motion'
import { useRef, memo, useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const media = [
        { type: 'image', url: "/images/testimonials/wheelchair-1.jpeg" },
        { type: 'image', url: "/images/testimonials/wheelchair-2.jpg" },
        { type: 'image', url: "/images/testimonials/wheelchair-3.jpg" },
        { type: 'video', url: "/images/testimonials/wheelchair-4.mp4" },
    ]

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % media.length)
        setIsPlaying(false)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
        setIsPlaying(false)
    }

    useEffect(() => {
        if (media[currentIndex].type === 'video' && isPlaying) return
        const timer = setInterval(next, 8000)
        return () => clearInterval(timer)
    }, [currentIndex, isPlaying])

    return (
        <section id="testimonials" className="section-padding bg-white" ref={ref}>
            <div className="container-custom">
                <div className="grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-20">
                    {/* Left - Story */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 group"
                        >
                            <span className="text-xs font-semibold text-[#C85A4A] uppercase tracking-[0.15em]">A Real Story</span>
                            <div className="h-px w-12 bg-[#C85A4A] group-hover:w-16 transition-all duration-500" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-3xl xs:text-4xl md:text-7xl lg:text-8xl font-serif leading-[1.1] md:leading-[0.92] text-[#1A1A1A] text-balance"
                        >
                            When a wheelchair <span className="text-[#C85A4A] italic font-normal">changed everything</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 md:space-y-7 text-sm md:text-xl text-[#4A4A4A] leading-[1.7] md:leading-[1.8] font-light"
                        >
                            <p>
                                In October 2025, we met a father who had to make an impossible choice every day: go to work, or stay home with his 7-year-old daughter who has a disability. She had no way to move, so she stayed home alone.
                            </p>
                            <p>
                                We reached out to our network, and within a week, we found a wheelchair. We took them to CDM Murang'a, where she was fitted with a chair made just for her.
                            </p>
                            <p className="italic text-[#C85A4A] font-medium text-base md:text-xl">
                                "Seeing her smile as she moved around freely, that's what this work is about."
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex items-center gap-5 pt-8 border-t border-[#E0E0E0]/60"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#C85A4A]/10 flex items-center justify-center text-[#C85A4A] font-serif font-bold text-xl">
                                R&S
                            </div>
                            <div>
                                <div className="font-serif font-bold text-[#1A1A1A] text-lg">Rachel & Stella</div>
                                <div className="text-sm text-[#6A6A6A] uppercase tracking-wider">Co-Founders</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Media */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-white shadow-2xl border-[8px] border-white"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {media[currentIndex].type === 'image' ? (
                                        <img
                                            src={media[currentIndex].url}
                                            alt="Impact story"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <video
                                            src={media[currentIndex].url}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            onPlay={() => setIsPlaying(true)}
                                            onPause={() => setIsPlaying(false)}
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {/* Premium Controls */}
                        <div className="flex items-center justify-between mt-6 md:mt-8 relative z-10 px-2 md:px-4">
                            <div className="flex gap-1.5 md:gap-2">
                                {media.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-[#C85A4A] w-6 md:w-10' : 'bg-[#E0E0E0] w-1 md:w-1.5'
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2 md:gap-3">
                                <button
                                    onClick={prev}
                                    className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[#E0E0E0] flex items-center justify-center text-[#4A4A4A] hover:border-[#C85A4A] hover:text-[#C85A4A] hover:bg-[#C85A4A]/5 transition-all duration-300 bg-white shadow-sm"
                                >
                                    <FaChevronLeft size={14} />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#C85A4A] flex items-center justify-center text-white hover:bg-[#B54A3A] hover:shadow-lg transition-all duration-300"
                                >
                                    <FaChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Testimonials)

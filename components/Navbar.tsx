'use client'

import { useState, useEffect, memo, useCallback } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }, [])

  const links = [
    { name: 'Philosophy', id: 'about' },
    { name: 'Impact', id: 'activities' },
    { name: 'Archive', id: 'gallery' },
    { name: 'Witness', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-2' : 'py-3 md:py-4'}`}>
      <div className="container-custom">
        <div className={`relative flex items-center justify-between px-6 md:px-8 py-2.5 md:py-3 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-[#E8E8E8]' : 'bg-transparent'
          }`}>
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 md:gap-4 group"
          >
            <div className={`transition-all duration-500 rounded-xl md:rounded-2xl bg-white flex items-center justify-center p-2 md:p-2.5 shadow-xl ring-1 ring-[#E8E8E8] ${isScrolled ? 'w-9 h-9 md:w-10 h-10' : 'w-11 h-11 md:w-14 md:h-14'
              }`}>
              <img src="/images/logo.png" alt="Ray Mercy Ministry" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <div className={`font-serif font-black text-[#1A1A1A] leading-none tracking-tighter transition-all duration-500 ${isScrolled ? 'text-[0.9rem] sm:text-base md:text-lg' : 'text-base sm:text-xl md:text-2xl'
                }`}>Ray Mercy Ministry</div>
              <div className="text-[0.5rem] md:text-[0.55rem] font-bold text-[#C85A4A] tracking-[0.3em] uppercase mt-0.5" style={{ fontFamily: 'Sora, sans-serif' }}>Kenya</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="group relative py-1"
              >
                <span className="text-[0.65rem] font-bold text-[#1A1A1A] uppercase tracking-[0.15em] transition-colors duration-500 group-hover:text-[#C85A4A]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C85A4A] transition-all duration-500 ease-out group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary py-2.5 px-7 text-[0.6rem] shadow-none hover:shadow-lg transition-all duration-500"
            >
              Get Involved
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center text-[#1A1A1A] shadow-md transition-all active:scale-95"
          >
            {isOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-white z-[110] flex flex-col pt-32 px-8 pb-12"
          >
            {/* Close button in drawer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#1A1A1A]"
            >
              <FaTimes size={16} />
            </button>

            <div className="space-y-6">
              {links.map((link, i) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[0.6rem] font-bold text-[#C85A4A]/50 uppercase tracking-[0.2em]" style={{ fontFamily: 'Sora, sans-serif' }}>0{i + 1}</span>
                    <span className="text-4xl xs:text-5xl font-serif font-black text-[#1A1A1A] group-active:text-[#C85A4A] transition-colors">{link.name}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-auto space-y-8">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary w-full py-5 text-sm"
              >
                Get Involved
              </button>
              <div className="pt-8 border-t border-[#F0F0F0] flex items-center justify-between">
                <span className="text-[0.55rem] font-bold text-[#A0A0A0] uppercase tracking-[0.4em]" style={{ fontFamily: 'Sora, sans-serif' }}>Ray Mercy Ministry • Kenya</span>
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-[0.5rem]">♡</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default memo(Navbar)

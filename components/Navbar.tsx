'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, memo, useCallback, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const ticking = useRef(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Programs', id: 'activities' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-2xl shadow-lg border-b border-gray-100 dark:border-dark-800'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-custom px-6">
        <div className="flex items-center justify-between h-20">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src="/images/logo.png" 
              alt="Ray Mercy Ministry" 
              className="w-12 h-12 rounded-full transition-transform group-hover:scale-110 shadow-md logo-blend"
              fetchPriority="high"
              decoding="async"
              width="48"
              height="48"
            />
            <span className="font-semibold text-gray-900 dark:text-dark-100 hidden md:block">
              Ray Mercy Ministry
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2 text-gray-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-full transition-all duration-300 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-8 transition-all duration-300 rounded-full" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileMenu navLinks={navLinks} scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const MobileMenu = ({ navLinks, scrollToSection }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 right-0 bg-white/90 dark:bg-dark-900/90 backdrop-blur-xl border-b border-white/20 dark:border-dark-800/50 shadow-2xl"
        >
          <div className="container-custom px-6 py-4">
            {navLinks.map((link: any) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id)
                  setIsOpen(false)
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default memo(Navbar)


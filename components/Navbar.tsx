'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, memo, useCallback } from 'react'
import ThemeToggle from './ThemeToggle'
import { FaTimes } from 'react-icons/fa'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMobileMenuOpen(false) // Collapse the drawer once a section is chosen
  }, [])

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Programs', id: 'activities' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-6'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-custom px-6">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/images/logo.png"
                alt="Ray Mercy Ministry"
                className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 drop-shadow-lg"
                fetchPriority="high"
                decoding="async"
                width="48"
                height="48"
              />
              <span className={`font-serif font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary-900 dark:text-white' : 'text-white drop-shadow-md'}`}>
                Ray Mercy Ministry
              </span>
            </motion.button>

            {/* Desktop links stay visible here */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${isScrolled
                    ? 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white'
                    : 'text-white/80 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`} />
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <ThemeToggle isScrolled={isScrolled} />
              </div>

              {/* Hamburger button for smaller screens */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`}
                aria-label="Open menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-height mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] md:hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-dark-900 dark:via-dark-950 dark:to-black overflow-y-auto"
          >
            <div className="min-h-full flex flex-col">
              {/* Drawer header stays pinned */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-primary-700/95 dark:bg-dark-950/95 backdrop-blur-sm z-10">
                <img
                  src="/images/logo.png"
                  alt="Ray Mercy Ministry"
                  className="w-12 h-12"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Make theme switching easy on mobile */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Theme</span>
                  <ThemeToggle isScrolled={true} />
                </div>
              </div>

              {/* Oversized links for comfy tapping */}
              <nav className="flex-1 px-8 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group text-left py-5 border-b border-white/10 last:border-0 w-full"
                  >
                    <span className="text-3xl font-serif font-bold text-white group-hover:text-secondary-300 transition-colors">
                      {link.name}
                    </span>
                    <div className="h-1 w-0 bg-secondary-400 group-hover:w-16 transition-all duration-300 mt-2" />
                  </motion.button>
                ))}
              </nav>

              {/* Keep the call-to-action within reach */}
              <div className="p-6 border-t border-white/10 sticky bottom-0 bg-primary-700/95 dark:bg-dark-950/95 backdrop-blur-sm">
                <a
                  href="tel:+254721826905"
                  className="block w-full px-6 py-4 bg-secondary-500 hover:bg-secondary-400 text-white font-semibold rounded-full transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(Navbar)

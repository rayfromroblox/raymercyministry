'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useState, useMemo, useCallback } from 'react'

// Move static data outside component
const THEMES = [
  { 
    value: 'light' as const, 
    label: 'Light', 
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  { 
    value: 'dark' as const, 
    label: 'Dark', 
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  },
  { 
    value: 'system' as const, 
    label: 'System', 
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
] as const

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const currentTheme = useMemo(() => 
    THEMES.find(t => t.value === theme) || THEMES[0], 
    [theme]
  )

  const handleThemeChange = useCallback((newTheme: typeof THEMES[number]['value']) => {
    setTheme(newTheme)
    setIsOpen(false)
  }, [setTheme])

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        onClick={toggleOpen}
        className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 text-gray-700 dark:text-dark-200 hover:bg-white/20 dark:hover:bg-dark-700/50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-500/50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentTheme.icon}
        </motion.div>
        <span className="text-sm font-medium hidden sm:block">
          {currentTheme.label}
        </span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-40 bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl border border-white/20 dark:border-dark-700/50 rounded-2xl shadow-2xl overflow-hidden z-50 focus:outline-none"
            onMouseLeave={handleMouseLeave}
          >
            {THEMES.map((themeOption) => (
              <motion.button
                key={themeOption.value}
                onClick={() => handleThemeChange(themeOption.value)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 group ${
                  theme === themeOption.value
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-dark-200 hover:bg-gray-50 dark:hover:bg-dark-700/50'
                }`}
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className={`transition-colors duration-200 ${
                    theme === themeOption.value
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-500 dark:text-dark-400 group-hover:text-gray-700 dark:group-hover:text-dark-200'
                  }`}
                >
                  {themeOption.icon}
                </motion.div>
                <span className="text-sm font-medium">{themeOption.label}</span>
                {theme === themeOption.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeToggle

'use client'

import { memo } from 'react'
import { FaHeart } from 'react-icons/fa'

// Footer with a closing scripture reminder
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
      
      <div className="container-custom px-6 relative z-10">
        <div className="flex justify-center mb-6">
          <img 
            src="/images/logo.png" 
            alt="Ray Mercy Ministry" 
            className="w-24 h-24 rounded-full opacity-90 hover:opacity-100 transition-opacity shadow-lg"
            loading="lazy"
            decoding="async"
            width="96"
            height="96"
          />
        </div>

        <div className="flex justify-center mb-8">
          <p className="text-gray-300 dark:text-dark-300 flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> for God's work
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 dark:text-dark-300 text-center md:text-left">
            © {currentYear} Ray Mercy Ministry. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a 
              href="#about" 
              className="text-gray-300 dark:text-dark-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#activities" 
              className="text-gray-300 dark:text-dark-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              Activities
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 dark:text-dark-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700/50 dark:border-dark-700/50 mt-8 pt-8">
          <p className="text-gray-400 dark:text-dark-400 text-sm text-center italic leading-relaxed">
            "Whoever refreshes others will be refreshed."
            <span className="block text-gray-500 dark:text-dark-500 text-xs mt-2 not-italic">Proverbs 11:25</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)


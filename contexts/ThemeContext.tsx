'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Resolve theme based on system preference
  const resolveTheme = useCallback((currentTheme: Theme): 'light' | 'dark' => {
    if (currentTheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return currentTheme
  }, [])

  // Optimized setTheme to batch updates
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    // Use requestAnimationFrame to batch DOM updates
    requestAnimationFrame(() => {
      localStorage.setItem('theme', newTheme)
    })
  }, [])

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme
    if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
      setThemeState(storedTheme)
    }
    setMounted(true)
  }, [])

  // Update resolved theme when theme or system preference changes
  useEffect(() => {
    if (!mounted) return

    const updateResolvedTheme = () => {
      const newResolvedTheme = resolveTheme(theme)
      setResolvedTheme(newResolvedTheme)
      
      // Batch DOM updates using requestAnimationFrame
      requestAnimationFrame(() => {
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(newResolvedTheme)
      })
    }

    updateResolvedTheme()

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', updateResolvedTheme)
      return () => mediaQuery.removeEventListener('change', updateResolvedTheme)
    }
  }, [theme, mounted, resolveTheme])

  const value = {
    theme,
    setTheme,
    resolvedTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

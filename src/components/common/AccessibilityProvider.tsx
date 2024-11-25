'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface AccessibilityContextType {
  fontSize: number
  increaseFontSize: () => void
  decreaseFontSize: () => void
  resetFontSize: () => void
  highContrast: boolean
  toggleHighContrast: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-primary-blue'
    skipLink.textContent = 'Skip to main content'
    document.body.insertBefore(skipLink, document.body.firstChild)

    // Apply ARIA landmarks
    const main = document.querySelector('main')
    if (main) {
      main.setAttribute('role', 'main')
      main.setAttribute('id', 'main-content')
    }

    // Add keyboard navigation support
    const handleKeyboardNav = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav')
      }
    }
    
    window.addEventListener('keydown', handleKeyboardNav)
    return () => window.removeEventListener('keydown', handleKeyboardNav)
  }, [])

  // Update document styles based on accessibility settings
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`
    if (highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [fontSize, highContrast])

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24))
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12))
  const resetFontSize = () => setFontSize(16)
  const toggleHighContrast = () => setHighContrast(prev => !prev)

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        highContrast,
        toggleHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const accountMenuItems = [
    { name: 'Profile', href: '/account/profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Orders', href: '/account/orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'Prescriptions', href: '/account/prescriptions', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { name: 'Settings', href: '/account/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="h-[var(--header-height)] border-b border-gray-100">
          <nav className="container-custom h-full">
            <div className="flex items-center justify-between h-full">
              {/* Logo */}
              <Link href="/" className="relative z-50">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo.png"
                    alt="A2Care Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="text-xl font-bold text-primary-blue hidden sm:block">A2Care</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link ${
                      pathname === item.href ? 'nav-link-active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-4">
                <Link href="/cart" className="relative p-2 hover:text-primary-blue transition-colors">
                  <span className="sr-only">Shopping Cart</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-primary-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
                <div className="relative">
                  <button 
                    onClick={() => setShowAccountMenu(!showAccountMenu)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Account</span>
                  </button>

                  <AnimatePresence>
                    {showAccountMenu && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="fixed inset-0 z-30"
                          onClick={() => setShowAccountMenu(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-40"
                        >
                          <div className="p-4 border-b border-gray-100">
                            <Link
                              href="/auth/login"
                              className="block w-full px-4 py-2 text-center text-white bg-primary-blue rounded-md hover:bg-blue-700 transition-colors mb-2"
                              onClick={() => setShowAccountMenu(false)}
                            >
                              Login
                            </Link>
                            <Link
                              href="/auth/signup"
                              className="block w-full px-4 py-2 text-center text-primary-blue border-2 border-primary-blue rounded-md hover:bg-blue-50 transition-colors"
                              onClick={() => setShowAccountMenu(false)}
                            >
                              Sign Up
                            </Link>
                          </div>
                          <div className="py-2">
                            {accountMenuItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                                onClick={() => setShowAccountMenu(false)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                </svg>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-50 p-2 -mr-2"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span 
                    className={`bg-gray-600 h-0.5 w-5 rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                    }`} 
                  />
                  <span 
                    className={`bg-gray-600 h-0.5 w-5 rounded-full transition-all duration-300 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`} 
                  />
                  <span 
                    className={`bg-gray-600 h-0.5 w-5 rounded-full transition-all duration-300 ${
                      isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-xl lg:hidden overflow-y-auto z-50"
            >
              <div className="flex flex-col p-6">
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block text-lg ${
                        pathname === item.href 
                          ? 'text-primary-blue font-medium' 
                          : 'text-gray-600 hover:text-primary-blue'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <div className="space-y-4">
                    <Link 
                      href="/cart"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <span>Cart</span>
                    </Link>
                    <div className="space-y-2">
                      <Link
                        href="/auth/login"
                        className="block w-full px-4 py-2 text-center text-white bg-primary-blue rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/auth/signup"
                        className="block w-full px-4 py-2 text-center text-primary-blue border-2 border-primary-blue rounded-md hover:bg-blue-50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header Spacer */}
      <div className="h-[var(--header-height)]" />
    </>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-blue transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/cart"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-blue transition-colors"
            >
              <FiShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link
              href="/account"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-blue transition-colors"
            >
              <FiUser className="w-5 h-5" />
              <span>Account</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden absolute left-0 right-0 bg-white shadow-lg transition-transform duration-200 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col gap-4 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              href="/cart"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link
              href="/account"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiUser className="w-5 h-5" />
              <span>Account</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/components/cart/CartProvider'
import { AccessibilityProvider } from '@/components/common/AccessibilityProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.URL || process.env.NETLIFY_URL || 'http://localhost:3005'
  ),
  title: {
    template: '%s | A2Care - Your Trusted Online Pharmacy',
    default: 'A2Care - Premium Healthcare Products & Prescription Services',
  },
  description: 'A2Care offers high-quality healthcare products, prescription services, and expert medical guidance. Shop our wide range of medications, supplements, and medical supplies with professional care and convenient delivery.',
  keywords: [
    'online pharmacy',
    'prescription services',
    'healthcare products',
    'medical supplies',
    'pharmacy online',
    'medications',
    'health supplements',
    'prescription medications',
    'over-the-counter medicine',
    'healthcare essentials'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'A2Care - Your Trusted Online Pharmacy',
    description: 'Premium healthcare products and prescription services with expert guidance.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A2Care Online Pharmacy',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <AccessibilityProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            {process.env.NODE_ENV === 'development' && (
              <div className="breakpoint-indicator" />
            )}
          </CartProvider>
        </AccessibilityProvider>
      </body>
    </html>
  )
}

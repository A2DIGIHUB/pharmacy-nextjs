'use client'

import { FiPackage, FiTruck, FiCreditCard, FiCheckCircle } from 'react-icons/fi'

const steps = [
  {
    title: 'Browse & Select',
    description: 'Browse through our extensive catalog of medications and healthcare products. Add items to your cart.',
    icon: FiPackage,
  },
  {
    title: 'Secure Checkout',
    description: 'Complete your purchase through our secure checkout process with various payment options.',
    icon: FiCreditCard,
  },
  {
    title: 'Fast Shipping',
    description: 'We process your order quickly and ship it directly to your doorstep.',
    icon: FiTruck,
  },
  {
    title: 'Track & Receive',
    description: 'Track your order in real-time and receive your medications safely and securely.',
    icon: FiCheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">How It Works</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Getting your medications from A2Care is simple, secure, and convenient. Follow these easy steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Ready to Get Started?</h2>
          <a
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-blue hover:bg-primary-blue-dark transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    </div>
  )
}

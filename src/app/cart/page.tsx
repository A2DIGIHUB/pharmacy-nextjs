'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'

// Mock cart data - will be replaced with real data later
const cartItems = [
  {
    id: 1,
    name: 'Pain Relief Tablets',
    price: 9.99,
    quantity: 2,
    image: '/images/products/pain-relief.jpg',
  },
  {
    id: 2,
    name: 'First Aid Kit Premium',
    price: 29.99,
    quantity: 1,
    image: '/images/products/first-aid.jpg',
  },
]

export default function Cart() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.06 // 6% tax rate
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-6 border-b last:border-b-0"
                  >
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-text-primary">{item.name}</h3>
                      <p className="text-primary-blue font-medium">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <FiMinus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <FiPlus className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-full">
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-text-secondary mb-4">Your cart is empty</p>
                <Link
                  href="/products"
                  className="text-primary-blue hover:text-primary-blue-dark font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-xl font-bold text-text-primary mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-bold text-text-primary">Total</span>
                  <span className="font-bold text-primary-blue">${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="block w-full text-center px-6 py-3 bg-primary-blue text-white rounded-md hover:bg-primary-blue-dark transition-colors mt-6"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

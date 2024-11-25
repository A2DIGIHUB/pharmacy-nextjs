'use client'

import { useState } from 'react'
import WishlistButton from './WishlistButton'
import ProductRating from './ProductRating'
import { Product } from '@/types'

interface ProductInteractiveSectionProps {
  product: Product
}

export function ProductInteractiveSection({ product }: ProductInteractiveSectionProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  return (
    <div className="mt-4 space-y-6">
      <div className="flex items-center gap-4">
        <ProductRating rating={product.rating} totalReviews={product.reviews} />
        <WishlistButton productId={product.id} />
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <button
            className="px-3 py-1 text-gray-600 hover:text-primary-blue"
            onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
          >
            -
          </button>
          <span className="px-3 py-1 border-x">{selectedQuantity}</span>
          <button
            className="px-3 py-1 text-gray-600 hover:text-primary-blue"
            onClick={() => setSelectedQuantity(selectedQuantity + 1)}
          >
            +
          </button>
        </div>
        
        <button
          className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-primary-blue/90 transition-colors"
          onClick={() => {
            // Add to cart logic here
            console.log(`Adding ${selectedQuantity} of ${product.name} to cart`)
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

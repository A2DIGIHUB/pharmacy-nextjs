'use client'

import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'

interface WishlistButtonProps {
  productId: string
}

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const toggleWishlist = () => {
    // Here you would typically make an API call to update the wishlist
    setIsWishlisted(!isWishlisted)
    console.log(`${isWishlisted ? 'Removed from' : 'Added to'} wishlist: ${productId}`)
  }

  return (
    <button
      onClick={toggleWishlist}
      className={`p-2 rounded-full transition-colors ${
        isWishlisted
          ? 'bg-red-50 text-red-500 hover:bg-red-100'
          : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
      }`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <FiHeart
        className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`}
      />
    </button>
  )
}

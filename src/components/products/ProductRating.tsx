'use client'

import { FiStar } from 'react-icons/fi'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

interface ProductRatingProps {
  rating: number
  totalReviews: number
  size?: 'sm' | 'md' | 'lg'
}

export default function ProductRating({
  rating,
  totalReviews,
  size = 'md',
}: ProductRatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating)
    const halfFilled = i === Math.floor(rating) && rating % 1 !== 0

    return (
      <span key={i} className="text-primary-blue">
        {filled ? (
          <BsStarFill className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
        ) : halfFilled ? (
          <BsStarHalf className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
        ) : (
          <FiStar className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
        )}
      </span>
    )
  })

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      <span className={`text-gray-600 ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}`}>
        ({totalReviews})
      </span>
    </div>
  )
}

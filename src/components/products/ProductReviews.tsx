import { useState } from 'react'
import ProductRating from './ProductRating'

interface Review {
  id: number
  author: string
  rating: number
  date: string
  content: string
  helpful: number
}

interface ProductReviewsProps {
  productId: number
  reviews: Review[]
}

export default function ProductReviews({
  productId,
  reviews,
}: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState('recent')
  const [showReviewForm, setShowReviewForm] = useState(false)

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'helpful':
        return b.helpful - a.helpful
      case 'highest':
        return b.rating - a.rating
      case 'lowest':
        return a.rating - b.rating
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Reviews Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">
            Customer Reviews
          </h2>
          <div className="mt-2">
            <ProductRating rating={averageRating} totalReviews={reviews.length} size="lg" />
          </div>
        </div>
        <button
          onClick={() => setShowReviewForm(true)}
          className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Write a Review
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // Handle review submission here
            setShowReviewForm(false)
          }}
          className="bg-gray-50 p-6 rounded-lg space-y-4"
        >
          <h3 className="text-lg font-semibold text-text-primary">
            Write Your Review
          </h3>
          <div>
            <label className="block text-sm text-text-secondary mb-1">
              Rating
            </label>
            <select
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-blue"
            >
              <option value="">Select rating</option>
              {[5, 4, 3, 2, 1].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} {rating === 1 ? 'Star' : 'Stars'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-text-secondary mb-1">
              Review
            </label>
            <textarea
              required
              rows={4}
              placeholder="Share your experience with this product..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-blue"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="px-4 py-2 text-text-secondary hover:text-text-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}

      {/* Sort Reviews */}
      <div className="flex items-center space-x-2">
        <span className="text-text-secondary">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-blue"
        >
          <option value="recent">Most Recent</option>
          <option value="helpful">Most Helpful</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-start justify-between">
              <div>
                <ProductRating rating={review.rating} totalReviews={0} size="sm" />
                <p className="mt-1 font-medium text-text-primary">
                  {review.author}
                </p>
                <p className="text-sm text-text-secondary">{review.date}</p>
              </div>
              <button
                onClick={() => {
                  // Handle helpful click
                }}
                className="text-sm text-text-secondary hover:text-primary-blue"
              >
                Helpful ({review.helpful})
              </button>
            </div>
            <p className="mt-3 text-text-primary">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

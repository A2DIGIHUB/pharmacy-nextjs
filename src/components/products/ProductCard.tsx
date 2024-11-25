'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
  category: string
  slug: string
}

interface ProductCardProps {
  product: Product
  viewMode: 'grid' | 'list'
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const handleAddToCart = () => {
    console.log('Adding to cart:', product)
    // TODO: Implement cart functionality
  }

  const handleAddToWishlist = () => {
    console.log('Adding to wishlist:', product)
    // TODO: Implement wishlist functionality
  }

  if (viewMode === 'list') {
    return (
      <div className="flex gap-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="relative w-48 h-48 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <Link href={`/products/${product.slug}`} className="hover:text-primary-blue">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              </Link>
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
            <button
              onClick={handleAddToWishlist}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <FiHeart className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
              <p className="text-2xl font-bold text-primary-blue">${product.price.toFixed(2)}</p>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 px-6 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/90 transition-colors"
            >
              <FiShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${
      viewMode === 'grid' ? 'w-full' : 'flex'
    }`}>
      <div className={viewMode === 'grid' ? 'w-full' : 'w-1/3'}>
        <div className="relative h-48">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </div>

      <div className={`p-4 ${viewMode === 'list' ? 'w-2/3' : 'w-full'}`}>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-blue">
            {product.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-primary-blue">
            ${product.price.toFixed(2)}
          </span>

          <div className="flex space-x-2">
            <button
              onClick={handleAddToWishlist}
              className="p-2 text-gray-500 hover:text-primary-blue transition-colors"
              aria-label="Add to wishlist"
            >
              <FiHeart className="w-5 h-5" />
            </button>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-1 px-3 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue-dark transition-colors"
              aria-label="Add to cart"
            >
              <FiShoppingCart className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

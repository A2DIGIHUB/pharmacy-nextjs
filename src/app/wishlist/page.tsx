import type { Metadata } from 'next'
import Link from 'next/link'
import ProductCard from '@/components/products/ProductCard'

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'View and manage your saved products.',
}

// This will be replaced with actual API data later
const mockWishlist = [1, 2, 5] // Product IDs in wishlist

export default function WishlistPage() {
  // This will be replaced with actual API data later
  const wishlistedProducts = mockProducts.filter((product) =>
    mockWishlist.includes(product.id)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-8">My Wishlist</h1>

      {wishlistedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-text-secondary mb-4">
            Your wishlist is empty
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      )}
    </div>
  )
}

// Mock products data - this should match the data in products page
const mockProducts = [
  {
    id: 1,
    title: 'Pain Relief Tablets',
    price: 9.99,
    image: '/images/products/pain-relief.jpg',
    category: 'Pain Relief',
    description: 'Fast-acting pain relief tablets for headaches and body pain.',
    slug: 'pain-relief-tablets',
  },
  {
    id: 2,
    title: 'Vitamin C Supplements',
    price: 14.99,
    image: '/images/products/vitamin-c.jpg',
    category: 'Vitamins',
    description: 'High-strength vitamin C supplements for immune support.',
    slug: 'vitamin-c-supplements',
  },
  {
    id: 5,
    title: 'Allergy Relief',
    price: 12.99,
    image: '/images/products/allergy.jpg',
    category: 'Allergy',
    description: 'Fast-acting allergy relief medication.',
    slug: 'allergy-relief',
  },
]

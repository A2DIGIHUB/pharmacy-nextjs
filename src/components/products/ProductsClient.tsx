'use client'

import { useState } from 'react'
import ProductCard from '@/components/products/ProductCard'
import ProductSearch from '@/components/products/ProductSearch'
import ProductFilters from '@/components/products/ProductFilters'
import ProductSort from '@/components/products/ProductSort'
import Pagination from '@/components/products/Pagination'

const ITEMS_PER_PAGE = 6

interface Product {
  id: number
  title: string
  price: number
  image: string
  category: string
  description: string
  slug: string
}

interface ProductsClientProps {
  products: Product[]
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Get unique categories from products
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  )

  // Filter products based on category, price range, and search query
  let filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesSearch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesPriceRange && matchesSearch
  })

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name-asc':
        return a.title.localeCompare(b.title)
      case 'name-desc':
        return b.title.localeCompare(a.title)
      default:
        return 0
    }
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  // Reset to first page when filters change
  const handleFiltersChange = (newCategory: string) => {
    setSelectedCategory(newCategory)
    setCurrentPage(1)
  }

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange)
    setCurrentPage(1)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      {/* Filters Sidebar */}
      <div className="md:col-span-1">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleFiltersChange}
          priceRange={priceRange}
          onPriceRangeChange={handlePriceChange}
        />
      </div>

      {/* Products Grid */}
      <div className="md:col-span-3">
        {/* Search Bar and Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex-grow">
            <ProductSearch onSearch={handleSearch} />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid'
                    ? 'bg-primary-blue text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
                aria-label="Grid view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list'
                    ? 'bg-primary-blue text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
                aria-label="List view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>

        {/* Results Count */}
        <p className="text-text-secondary mb-4">
          Showing {startIndex + 1}-
          {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of{' '}
          {filteredProducts.length} products
        </p>

        {/* Product Grid */}
        <div className={`grid gap-6 mb-8 ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
        }`}>
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-text-secondary">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

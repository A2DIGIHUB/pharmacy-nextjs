'use client'

import { useState } from 'react'
import { FiGrid, FiList } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { ProductCard } from '@/components/products/ProductCard'
import ProductFilters from '@/components/products/ProductFilters'
import ProductSort from '@/components/products/ProductSort'
import ProductSearch from '@/components/products/ProductSearch'

interface CategoryContentProps {
  slug: string
}

export function CategoryContent({ slug }: CategoryContentProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  // Placeholder products data
  const products = [
    {
      id: 1,
      name: 'Pain Relief Medication',
      price: 12.99,
      image: '/images/products/pain-relief.jpg',
      description: 'Fast-acting pain relief medication for headaches and body aches.',
      category: 'Pain Relief',
      slug: 'pain-relief-medication'
    },
    {
      id: 2,
      name: 'First Aid Kit',
      price: 24.99,
      image: '/images/products/first-aid.jpg',
      description: 'Complete first aid kit for emergency situations.',
      category: 'First Aid',
      slug: 'first-aid-kit'
    },
    // Add more placeholder products as needed
  ]

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Mobile Filters */}
      <div className="lg:hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-600 mb-4"
        >
          <span>Filters</span>
          <motion.span animate={{ rotate: showFilters ? 180 : 0 }}>▼</motion.span>
        </button>
        
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <ProductFilters />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <ProductFilters />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <ProductSearch />
          
          <div className="flex items-center gap-4">
            <ProductSort />
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid' ? 'bg-primary-blue text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list' ? 'bg-primary-blue text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

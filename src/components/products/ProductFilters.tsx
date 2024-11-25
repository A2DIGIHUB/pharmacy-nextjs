'use client'

import { useState } from 'react'

export default function ProductFilters() {
  const [categories] = useState(['Pain Relief', 'First Aid', 'Vitamins', 'Personal Care'])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [localMinPrice, setLocalMinPrice] = useState('0')
  const [localMaxPrice, setLocalMaxPrice] = useState('1000')

  const handlePriceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const min = Math.max(0, Number(localMinPrice))
    const max = Math.max(min, Number(localMaxPrice))
    setPriceRange([min, max])
  }

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className="rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <form onSubmit={handlePriceSubmit} className="space-y-4">
          <div className="flex items-center gap-4">
            <div>
              <label className="text-sm text-gray-600">Min</label>
              <input
                type="number"
                min="0"
                value={localMinPrice}
                onChange={(e) => setLocalMinPrice(e.target.value)}
                className="w-24 mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-blue"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Max</label>
              <input
                type="number"
                min="0"
                value={localMaxPrice}
                onChange={(e) => setLocalMaxPrice(e.target.value)}
                className="w-24 mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-blue"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/90 transition-colors"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  )
}

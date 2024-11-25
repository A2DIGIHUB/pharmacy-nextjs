'use client'

import { useState } from 'react'

interface SortProps {
  sortBy: string
  onSortChange: (sort: string) => void
}

export default function ProductSort() {
  const [sortBy, setSortBy] = useState('featured')

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-text-secondary">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-blue"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  )
}

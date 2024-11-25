'use client'

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function ProductSearch() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search query:', query)
    // TODO: Implement search functionality
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full py-2 pl-10 pr-4 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-blue focus:border-primary-blue"
      />
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
    </form>
  )
}

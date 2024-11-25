'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiSearch, FiGrid, FiList } from 'react-icons/fi'

interface Category {
  id: number
  name: string
  slug: string
  description: string
  image: string
  productCount: number
  featured?: boolean
  subcategories?: string[]
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Prescription Medicines',
    slug: 'prescription-medicines',
    description: 'Quality prescription medications with proper documentation and expert guidance.',
    image: '/images/categories/prescription.jpg',
    productCount: 245,
    featured: true,
    subcategories: ['Antibiotics', 'Heart Medications', 'Diabetes Care', 'Pain Management'],
  },
  {
    id: 2,
    name: 'Over-the-Counter',
    slug: 'otc',
    description: 'Common medications available without prescription for everyday health needs.',
    image: '/images/categories/otc.jpg',
    productCount: 189,
    featured: true,
    subcategories: ['Pain Relief', 'Cold & Flu', 'Digestive Health', 'First Aid'],
  },
  {
    id: 3,
    name: 'Personal Care',
    slug: 'personal-care',
    description: 'Premium hygiene and personal care products for your daily wellness routine.',
    image: '/images/categories/personal-care.jpg',
    productCount: 156,
    subcategories: ['Skin Care', 'Oral Care', 'Hair Care', 'Body Care'],
  },
  {
    id: 4,
    name: 'Vitamins & Supplements',
    slug: 'vitamins-supplements',
    description: 'High-quality nutritional supplements and vitamins for optimal health.',
    image: '/images/categories/vitamins.jpg',
    productCount: 203,
    featured: true,
    subcategories: ['Multivitamins', 'Minerals', 'Protein & Fitness', 'Immunity Support'],
  },
  {
    id: 5,
    name: 'Medical Supplies',
    slug: 'medical-supplies',
    description: 'Essential medical equipment and supplies for home healthcare needs.',
    image: '/images/categories/medical-supplies.jpg',
    productCount: 167,
    subcategories: ['Bandages', 'Medical Devices', 'Mobility Aids', 'Home Tests'],
  },
  {
    id: 6,
    name: 'Mother & Baby Care',
    slug: 'mother-baby-care',
    description: 'Specialized products for maternal and infant health and wellness.',
    image: '/images/categories/mother-baby.jpg',
    productCount: 134,
    subcategories: ['Baby Care', 'Maternity Care', 'Baby Food', 'Nursing Supplies'],
  },
  {
    id: 7,
    name: 'Health Devices',
    slug: 'health-devices',
    description: 'Modern health monitoring and therapeutic devices for home use.',
    image: '/images/categories/health-devices.jpg',
    productCount: 98,
    subcategories: ['BP Monitors', 'Glucose Meters', 'Thermometers', 'Nebulizers'],
  },
  {
    id: 8,
    name: 'Wellness & Lifestyle',
    slug: 'wellness-lifestyle',
    description: 'Products to support a healthy and balanced lifestyle.',
    image: '/images/categories/wellness.jpg',
    productCount: 145,
    subcategories: ['Aromatherapy', 'Fitness & Nutrition', 'Sleep & Relaxation', 'Natural Remedies'],
  }
]

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredCategories, setFilteredCategories] = useState(categories)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  useEffect(() => {
    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.subcategories?.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredCategories(filtered)
  }, [searchTerm])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-green text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Categories</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Explore our comprehensive range of healthcare products organized in easy-to-navigate categories.
          </p>
        </div>
      </div>

      {/* Search and View Toggle */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="relative flex-grow max-w-2xl">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-blue text-white' : 'bg-white text-gray-600'}`}
              aria-label="Grid view"
            >
              <FiGrid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-blue text-white' : 'bg-white text-gray-600'}`}
              aria-label="List view"
            >
              <FiList size={20} />
            </button>
          </div>
        </div>

        {/* Featured Categories */}
        {searchTerm === '' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.filter(cat => cat.featured).map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative h-48 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.productCount} Products</p>
                  </div>
                  <Link href={`/categories/${category.slug}`} className="absolute inset-0" aria-label={`View ${category.name} category`} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}
        >
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-video'}`}>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-4">
                  {category.subcategories && (
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.map((sub, index) => (
                        <span
                          key={index}
                          className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.productCount} Products</span>
                    <Link
                      href={`/categories/${category.slug}`}
                      className="inline-flex items-center text-primary-blue hover:text-primary-blue/80"
                    >
                      Browse Products
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse all categories</p>
          </div>
        )}
      </div>
    </div>
  )
}

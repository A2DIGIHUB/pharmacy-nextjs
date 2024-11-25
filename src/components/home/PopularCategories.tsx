'use client'

import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    name: 'Prescription Medicines',
    description: 'Quality prescription medications',
    href: '/categories/prescription',
    image: '/images/categories/prescription.jpg',
    count: '200+ Items'
  },
  {
    name: 'Vitamins & Supplements',
    description: 'Boost your health naturally',
    href: '/categories/vitamins',
    image: '/images/categories/vitamins.jpg',
    count: '150+ Items'
  },
  {
    name: 'Personal Care',
    description: 'Daily care essentials',
    href: '/categories/personal-care',
    image: '/images/categories/personal-care.jpg',
    count: '100+ Items'
  },
  {
    name: 'Medical Devices',
    description: 'Professional medical equipment',
    href: '/categories/devices',
    image: '/images/categories/devices.jpg',
    count: '50+ Items'
  }
]

export const PopularCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our most popular categories and find exactly what you need
            for your health and wellness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-square"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm mb-2">{category.description}</p>
                <span className="text-white/60 text-sm">{category.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

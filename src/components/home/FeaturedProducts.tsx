'use client'

import Image from 'next/image'
import ProductRating from '../products/ProductRating'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRef } from 'react'

const featuredProducts = [
  {
    id: 1,
    name: 'Multivitamin Complex',
    description: 'Complete daily nutrition support',
    price: 29.99,
    originalPrice: 39.99,
    image: '/images/products/multivitamin.jpg',
    rating: 4.5,
    reviews: 128,
    category: 'Vitamins'
  },
  {
    id: 2,
    name: 'Advanced Pain Relief',
    description: 'Fast-acting pain relief formula',
    price: 19.99,
    originalPrice: 24.99,
    image: '/images/products/pain-relief.jpg',
    rating: 4.8,
    reviews: 95,
    category: 'Medicine'
  },
  {
    id: 3,
    name: 'Digital BP Monitor',
    description: 'Professional blood pressure monitoring',
    price: 49.99,
    originalPrice: 59.99,
    image: '/images/products/bp-monitor.jpg',
    rating: 4.7,
    reviews: 74,
    category: 'Devices'
  },
  {
    id: 4,
    name: 'Premium First Aid Kit',
    description: 'Complete emergency care package',
    price: 34.99,
    image: '/images/products/first-aid.jpg',
    rating: 4.9,
    reviews: 156,
    category: 'First Aid'
  },
  {
    id: 5,
    name: 'Omega-3 Fish Oil',
    description: 'Heart and brain health support',
    price: 24.99,
    originalPrice: 29.99,
    image: '/images/products/fish-oil.jpg',
    rating: 4.6,
    reviews: 203,
    category: 'Supplements'
  },
  {
    id: 6,
    name: 'Immune Support Bundle',
    description: 'Complete immune system boost',
    price: 39.99,
    originalPrice: 49.99,
    image: '/images/products/immune.jpg',
    rating: 4.8,
    reviews: 167,
    category: 'Wellness'
  }
]

export const FeaturedProducts = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium healthcare products,
            chosen for their quality and effectiveness.
          </p>
        </div>

        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all focus:outline-none hidden md:block"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all focus:outline-none hidden md:block"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-primary-blue/30',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary-blue',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="!pb-12"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4 bg-white/90 px-2 py-1 rounded text-sm font-medium text-gray-600">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <div className="mb-3">
                      <ProductRating rating={product.rating} totalReviews={product.reviews} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-primary-blue">${product.price}</span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-blue/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

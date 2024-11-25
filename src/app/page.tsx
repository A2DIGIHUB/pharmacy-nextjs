import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { PopularCategories } from '@/components/home/PopularCategories'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { ServicesSection } from '@/components/home/ServicesSection'
import { HealthBlog } from '@/components/home/HealthBlog'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/hero/main-hero.jpg"
          alt="A2Care Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 to-primary-green/80">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Trusted Online <br />
                Healthcare Partner
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Experience healthcare shopping made simple with A2Care. 
                Quality medications, expert care, and convenient delivery to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-block bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                </Link>
                <Link
                  href="/categories"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-all"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Popular Categories */}
      <PopularCategories />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Health Blog */}
      <HealthBlog />

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter for exclusive offers, health tips, and updates on new products.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-primary-blue">100,000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-primary-blue">50+</p>
              <p className="text-gray-600">Store Locations</p>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-primary-blue">24/7</p>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-primary-blue">15+</p>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Common Medications',
    excerpt: 'A comprehensive guide to understanding different types of medications and their uses.',
    image: '/images/blog/medications.jpg',
    date: 'March 15, 2024',
    category: 'Health Education',
  },
  {
    id: 2,
    title: 'Tips for Medication Safety',
    excerpt: 'Essential tips for safely storing and managing your medications at home.',
    image: '/images/blog/safety.jpg',
    date: 'March 10, 2024',
    category: 'Safety',
  },
  {
    id: 3,
    title: 'The Future of Online Pharmacies',
    excerpt: 'How technology is transforming the way we access healthcare and medications.',
    image: '/images/blog/future.jpg',
    date: 'March 5, 2024',
    category: 'Industry News',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Health & Wellness Blog</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Stay informed with the latest health news, medication guides, and wellness tips from our expert pharmacists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary-blue font-medium">{post.category}</span>
                  <span className="text-sm text-text-secondary">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-text-primary mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-primary-blue transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-text-secondary mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary-blue hover:text-primary-blue-dark font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Subscribe to Our Newsletter</h2>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue-dark transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Vitamin D Deficiency',
    excerpt: 'Learn about the importance of vitamin D and how to maintain healthy levels.',
    image: '/images/products/vitamin-c.jpg',
    author: 'Dr. Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Wellness'
  },
  {
    id: 2,
    title: 'Essential First Aid Kit Items',
    excerpt: 'A comprehensive guide to building and maintaining your home first aid kit.',
    image: '/images/products/first-aid.jpg',
    author: 'Dr. Michael Chen',
    date: 'March 12, 2024',
    readTime: '4 min read',
    category: 'Health Tips'
  },
  {
    id: 3,
    title: 'Blood Pressure Management',
    excerpt: 'Tips and strategies for maintaining healthy blood pressure levels.',
    image: '/images/products/bp-monitor.jpg',
    author: 'Dr. Emily White',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Healthcare'
  }
]

export const HealthBlog = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Health & Wellness Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest health tips, medical research, and wellness advice
            from our team of healthcare professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-primary-blue">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{post.author}</span>
                  <Link
                    href="/blog"
                    className="text-primary-blue font-medium hover:text-primary-blue/80 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold border-2 border-primary-blue hover:bg-primary-blue hover:text-white transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

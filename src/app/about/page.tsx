'use client'

import Image from 'next/image'

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Products Available', value: '5000+' },
  { label: 'Satisfied Customers', value: '100K+' },
  { label: 'Professional Staff', value: '50+' },
]

const values = [
  {
    title: 'Quality Assurance',
    description: 'We ensure all our products meet the highest quality standards and are sourced from reliable manufacturers.',
    icon: '🏆',
  },
  {
    title: 'Customer Care',
    description: 'Our dedicated team provides exceptional support and guidance for all your healthcare needs.',
    icon: '💝',
  },
  {
    title: 'Fast Delivery',
    description: 'We offer quick and reliable delivery services to ensure you receive your medications on time.',
    icon: '🚚',
  },
  {
    title: 'Professional Expertise',
    description: 'Our team of licensed pharmacists provides expert advice and consultation services.',
    icon: '👨‍⚕️',
  },
]

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Pharmacist',
    image: '/images/team/sarah.jpg',
    bio: 'With over 15 years of experience in pharmaceutical care.',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    image: '/images/team/michael.jpg',
    bio: 'Expert in healthcare logistics and supply chain management.',
  },
  {
    name: 'Dr. Emily Martinez',
    role: 'Clinical Advisor',
    image: '/images/team/emily.jpg',
    bio: 'Specializes in medication therapy management.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-blue to-primary-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              About PharmaCare
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-white sm:text-2xl md:mt-5 md:max-w-3xl">
              Your trusted partner in health and wellness since 2009
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-blue">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              To provide accessible, high-quality healthcare products and services while ensuring 
              the well-being of our community through professional guidance and support.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-blue">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            <p className="mt-4 text-xl text-white">
              Have questions? Our team is here to help you.
            </p>
            <button className="mt-8 bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

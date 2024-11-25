'use client'

import { IconType } from 'react-icons'
import {
  FaPrescriptionBottleAlt,
  FaTruck,
  FaUserMd,
  FaClinicMedical
} from 'react-icons/fa'

const services = [
  {
    title: 'Online Prescription',
    description: 'Upload your prescription and get medicines delivered to your doorstep',
    icon: FaPrescriptionBottleAlt,
    color: 'text-blue-500'
  },
  {
    title: 'Same Day Delivery',
    description: 'Free delivery for orders above $50 with same-day shipping option',
    icon: FaTruck,
    color: 'text-green-500'
  },
  {
    title: 'Expert Consultation',
    description: 'Get expert advice from our team of qualified healthcare professionals',
    icon: FaUserMd,
    color: 'text-purple-500'
  },
  {
    title: 'Store Locator',
    description: 'Find our physical stores near you for immediate purchase',
    icon: FaClinicMedical,
    color: 'text-red-500'
  }
]

export const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience healthcare made simple with our comprehensive range of services
            designed to meet all your medical needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

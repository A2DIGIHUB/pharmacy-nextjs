'use client'

import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiPhone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', 'Mon-Fri: 8am - 8pm EST'],
  },
  {
    icon: FiMail,
    title: 'Email',
    details: ['support@a2care.com', 'We usually respond within 24 hours'],
  },
  {
    icon: FiMapPin,
    title: 'Address',
    details: ['123 Healthcare Ave', 'Ann Arbor, MI 48104'],
  },
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactInfo.map((info) => {
            const Icon = info.icon
            return (
              <div
                key={info.title}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">{info.title}</h3>
                {info.details.map((detail, index) => (
                  <p
                    key={index}
                    className={`${
                      index === 0 ? 'text-primary-blue font-medium' : 'text-text-secondary'
                    }`}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            )
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-blue text-white rounded-md hover:bg-primary-blue-dark transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

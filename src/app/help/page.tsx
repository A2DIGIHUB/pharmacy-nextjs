import React from 'react';

export default function HelpCenter() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Help Center</h1>
        
        <div className="space-y-8">
          {/* Common Questions Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Questions</h2>
            <div className="space-y-4">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How do I place an order?</h3>
                <p className="text-gray-600">Browse our products, add items to your cart, and proceed to checkout. Follow the simple steps to complete your purchase.</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What are the shipping options?</h3>
                <p className="text-gray-600">We offer standard and express shipping. Delivery times and costs vary based on your location.</p>
              </div>
            </div>
          </section>

          {/* Contact Support Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Support</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">support@a2care.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">1-800-PHARMA</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Available 24/7</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/faq" className="bg-white shadow rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">FAQ</h3>
                <p className="text-gray-600">Find answers to frequently asked questions</p>
              </a>
              <a href="/how-it-works" className="bg-white shadow rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How It Works</h3>
                <p className="text-gray-600">Learn about our ordering process</p>
              </a>
              <a href="/shipping" className="bg-white shadow rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Shipping Info</h3>
                <p className="text-gray-600">View shipping options and policies</p>
              </a>
              <a href="/contact" className="bg-white shadow rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Get in touch with our support team</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

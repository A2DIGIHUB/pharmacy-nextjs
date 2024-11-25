'use client'

const shippingMethods = [
  {
    name: 'Standard Delivery',
    time: '2-3 Business Days',
    cost: 'Free for orders over $50',
    details: [
      'Available for most locations in the continental US',
      'Tracking number provided via email',
      'Delivery by USPS or FedEx',
      '$5.99 for orders under $50',
    ],
  },
  {
    name: 'Express Delivery',
    time: 'Next Business Day',
    cost: '$12.99',
    details: [
      'Order by 2 PM EST for next-day delivery',
      'Available Monday through Friday',
      'Not available for some rural areas',
      'Delivery by FedEx or UPS',
    ],
  },
  {
    name: 'Same-Day Delivery',
    time: 'Within 4 hours',
    cost: '$19.99',
    details: [
      'Available in select metropolitan areas',
      'Order by 4 PM local time',
      'Real-time delivery tracking',
      'Direct delivery to your door',
    ],
  },
]

const restrictions = [
  {
    title: 'Temperature-Sensitive Items',
    description: 'Special packaging is used for medications requiring temperature control. Additional handling fees may apply.',
  },
  {
    title: 'Controlled Substances',
    description: 'Special shipping procedures apply. Signature required upon delivery. Not eligible for same-day delivery.',
  },
  {
    title: 'International Shipping',
    description: 'Currently only shipping within the continental United States. International shipping coming soon.',
  },
  {
    title: 'P.O. Boxes',
    description: 'We cannot ship to P.O. boxes for prescription medications or temperature-controlled items.',
  },
]

const additionalInfo = [
  {
    title: 'Tracking Your Order',
    content: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order through your account dashboard.',
  },
  {
    title: 'Delivery Instructions',
    content: 'You can add specific delivery instructions during checkout. For apartments or office buildings, please provide detailed directions.',
  },
  {
    title: 'Missing or Damaged Items',
    content: 'Contact us within 24 hours of delivery if your package is damaged or items are missing. We\'ll process a replacement or refund.',
  },
  {
    title: 'Address Changes',
    content: 'Order address can be modified before shipping. Contact customer service immediately if you need to change the delivery address.',
  },
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Shipping Information
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Fast, reliable delivery options for your healthcare needs
          </p>
        </div>

        {/* Shipping Methods */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Delivery Options
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shippingMethods.map((method) => (
              <div
                key={method.name}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {method.name}
                </h3>
                <div className="mt-2 text-primary-blue font-semibold">
                  {method.time}
                </div>
                <div className="mt-1 text-gray-600">{method.cost}</div>
                <ul className="mt-4 space-y-2">
                  {method.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary-green mt-0.5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Restrictions */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Shipping Restrictions
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {restrictions.map((restriction) => (
              <div
                key={restriction.title}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {restriction.title}
                </h3>
                <p className="mt-2 text-gray-600">{restriction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Additional Information
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {additionalInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {info.title}
                </h3>
                <p className="mt-2 text-gray-600">{info.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Need Help with Shipping?
          </h2>
          <p className="mt-4 text-gray-600">
            Our customer service team is available 24/7 to assist you with any
            shipping-related questions.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-primary-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Contact Support
            </button>
            <button className="border border-primary-blue text-primary-blue px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

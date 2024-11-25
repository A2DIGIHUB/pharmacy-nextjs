'use client'

import { useState } from 'react'

interface FAQCategory {
  name: string
  questions: {
    question: string
    answer: string
  }[]
}

const faqCategories: FAQCategory[] = [
  {
    name: 'Ordering & Delivery',
    questions: [
      {
        question: 'How do I place an order?',
        answer: 'You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. You\'ll need to create an account or sign in to complete your purchase.',
      },
      {
        question: 'What are the delivery options?',
        answer: 'We offer standard delivery (2-3 business days) and express delivery (next business day) options. Delivery times may vary based on your location and product availability.',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Currently, we only ship within the United States. We\'re working on expanding our delivery services to other countries.',
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order is shipped, you\'ll receive a tracking number via email. You can also track your order in your account dashboard under "Order History".',
      },
    ],
  },
  {
    name: 'Prescriptions',
    questions: [
      {
        question: 'How do I submit a prescription?',
        answer: 'You can upload a photo of your prescription during checkout, have your doctor send it directly to us, or bring it to one of our physical locations.',
      },
      {
        question: 'Can I transfer my prescription from another pharmacy?',
        answer: 'Yes, you can transfer your prescription. Simply provide us with your current pharmacy\'s information, and we\'ll handle the transfer process.',
      },
      {
        question: 'How long are prescriptions valid?',
        answer: 'Prescription validity varies by medication type and state regulations. Generally, most prescriptions are valid for one year from the date written.',
      },
    ],
  },
  {
    name: 'Returns & Refunds',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We accept returns of unopened, non-prescription items within 30 days of purchase. Prescription medications cannot be returned due to safety regulations.',
      },
      {
        question: 'How do I initiate a return?',
        answer: 'To initiate a return, log into your account, go to "Order History," select the order, and click "Return Items." Follow the instructions to complete the return process.',
      },
      {
        question: 'When will I receive my refund?',
        answer: 'Refunds are processed within 5-7 business days after we receive and inspect the returned items. The refund will be issued to your original payment method.',
      },
    ],
  },
  {
    name: 'Account & Security',
    questions: [
      {
        question: 'How do I create an account?',
        answer: 'Click the "Sign Up" button, enter your email address and create a password. You\'ll need to verify your email address to complete the registration.',
      },
      {
        question: 'How is my personal information protected?',
        answer: 'We use industry-standard encryption and security measures to protect your personal and medical information. Read our Privacy Policy for more details.',
      },
      {
        question: 'What if I forget my password?',
        answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email to reset your password.',
      },
    ],
  },
  {
    name: 'Payment & Insurance',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and FSA/HSA cards. For prescription medications, we also work with most major insurance providers.',
      },
      {
        question: 'Do you accept insurance?',
        answer: 'Yes, we work with most major insurance providers. You can add your insurance information to your account or during checkout.',
      },
      {
        question: 'How do I update my insurance information?',
        answer: 'Log into your account, go to "Insurance Information" under your profile settings, and follow the instructions to add or update your insurance details.',
      },
    ],
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-3 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <nav className="space-y-1">
              {filteredCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeCategory === category.name
                      ? 'bg-primary-blue text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8 lg:mt-0 lg:col-span-9">
            {filteredCategories.map(
              (category) =>
                activeCategory === category.name && (
                  <div key={category.name} className="space-y-6">
                    {category.questions.map((item) => (
                      <div
                        key={item.question}
                        className="bg-white rounded-lg shadow-sm p-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.question}
                        </h3>
                        <p className="mt-2 text-gray-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Still have questions?
          </h2>
          <p className="mt-4 text-gray-600">
            Can't find the answer you're looking for? Please contact our customer
            support team.
          </p>
          <button className="mt-6 bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

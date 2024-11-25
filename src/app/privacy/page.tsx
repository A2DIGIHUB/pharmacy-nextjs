'use client'

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information that you provide directly to us, including:
    • Personal information (name, email address, phone number)
    • Shipping and billing information
    • Medical information related to prescriptions
    • Account credentials
    • Communication preferences`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the collected information for:
    • Processing and fulfilling your orders
    • Communicating about your orders and our services
    • Sending promotional communications (with your consent)
    • Improving our services and user experience
    • Complying with legal obligations
    • Protecting against fraudulent or illegal activity`,
  },
  {
    title: 'Information Sharing',
    content: `We may share your information with:
    • Healthcare providers and pharmacies (with your consent)
    • Service providers who assist our operations
    • Legal authorities when required by law
    • Business partners (in anonymized, aggregated form)
    We never sell your personal information to third parties.`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information, including:
    • Encryption of sensitive data
    • Regular security assessments
    • Access controls and authentication
    • Secure data storage and transmission
    • Regular staff training on data protection`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to:
    • Access your personal information
    • Correct inaccurate information
    • Request deletion of your information
    • Opt-out of marketing communications
    • Withdraw consent for data processing
    • File a complaint with supervisory authorities`,
  },
  {
    title: 'Cookies and Tracking',
    content: `We use cookies and similar technologies to:
    • Remember your preferences
    • Analyze site usage
    • Personalize content
    • Improve site functionality
    You can control cookie settings through your browser preferences.`,
  },
  {
    title: 'Children\'s Privacy',
    content: `We do not knowingly collect information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.`,
  },
  {
    title: 'Changes to Privacy Policy',
    content: `We may update this privacy policy periodically. We will notify you of any material changes through our website or email.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: February 2024
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 sm:p-8">
            <p className="text-gray-600 mb-8">
              At PharmaCare, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information.
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-600">
                <p>Email: privacy@pharmacare.com</p>
                <p>Phone: 1-800-PHARMA-CARE</p>
                <p>Address: 123 Healthcare Street, Medical District, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

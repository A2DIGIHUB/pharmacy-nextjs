'use client'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's services, you shall be subject to any posted guidelines or rules applicable to such services.`,
  },
  {
    title: 'Medical Information Disclaimer',
    content: `The content on this website is provided for general information only. It is not intended to amount to medical advice and you should not rely on it as such. You should always seek professional medical advice before taking any medication or treatment.`,
  },
  {
    title: 'Prescription Policy',
    content: `• Valid prescriptions are required for all prescription medications
    • Prescriptions must be issued by licensed healthcare providers
    • We reserve the right to verify all prescriptions
    • We may refuse to fill prescriptions that don't meet our requirements
    • Prescription medications cannot be returned`,
  },
  {
    title: 'Order and Delivery',
    content: `• Orders are subject to availability
    • Delivery times are estimates and not guaranteed
    • We are not responsible for delays beyond our control
    • Risk of loss and title passes to you upon delivery
    • You must inspect products upon delivery`,
  },
  {
    title: 'Payment Terms',
    content: `• Prices are subject to change without notice
    • We accept major credit cards and other specified payment methods
    • Payment must be received in full before order processing
    • All prices are in USD unless otherwise specified
    • You agree to pay all charges at the prices listed`,
  },
  {
    title: 'Return Policy',
    content: `• Non-prescription items may be returned within 30 days
    • Items must be unused and in original packaging
    • Prescription medications cannot be returned
    • Shipping costs for returns are customer's responsibility
    • Refunds will be processed within 5-7 business days`,
  },
  {
    title: 'Account Responsibilities',
    content: `• You are responsible for maintaining account confidentiality
    • You must be 18 or older to create an account
    • You agree to provide accurate information
    • We may terminate accounts at our discretion
    • You are responsible for all account activity`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of PharmaCare and is protected by copyright and other intellectual property laws.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the fullest extent permitted by law, PharmaCare shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.`,
  },
  {
    title: 'Governing Law',
    content: `These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: February 2024
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 sm:p-8">
            <p className="text-gray-600 mb-8">
              Please read these terms and conditions carefully before using our service.
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
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 text-gray-600">
                <p>Email: legal@pharmacare.com</p>
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

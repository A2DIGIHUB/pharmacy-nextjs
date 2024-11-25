export interface Category {
  id: number
  name: string
  slug: string
  description: string
  image: string
  productCount: number
  featured?: boolean
  subcategories: string[]
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Prescription Medicines',
    slug: 'prescription-medicines',
    description: 'Quality prescription medications with proper documentation and expert guidance.',
    image: '/images/categories/prescription.jpg',
    productCount: 245,
    featured: true,
    subcategories: ['Antibiotics', 'Heart Medications', 'Diabetes Care', 'Pain Management'],
  },
  {
    id: 2,
    name: 'Over-the-Counter',
    slug: 'otc',
    description: 'Common medications available without prescription for everyday health needs.',
    image: '/images/products/vitamin-c.jpg', // Using prescription image as fallback
    productCount: 189,
    featured: true,
    subcategories: ['Pain Relief', 'Cold & Flu', 'Digestive Health', 'First Aid'],
  },
  {
    id: 3,
    name: 'Personal Care',
    slug: 'personal-care',
    description: 'Premium hygiene and personal care products for your daily wellness routine.',
    image: '/images/categories/personal-care.jpg',
    productCount: 156,
    subcategories: ['Skin Care', 'Oral Care', 'Hair Care', 'Body Care'],
  },
  {
    id: 4,
    name: 'Vitamins & Supplements',
    slug: 'vitamins-supplements',
    description: 'High-quality nutritional supplements and vitamins for optimal health.',
    image: '/images/categories/vitamins.jpg',
    productCount: 203,
    featured: true,
    subcategories: ['Multivitamins', 'Minerals', 'Protein & Fitness', 'Immunity Support'],
  },
  {
    id: 5,
    name: 'Medical Supplies',
    slug: 'medical-supplies',
    description: 'Essential medical equipment and supplies for home healthcare needs.',
    image: '/images/categories/devices.jpg', // Using devices image as fallback
    productCount: 167,
    subcategories: ['Bandages', 'Medical Devices', 'Mobility Aids', 'Home Tests'],
  },
  {
    id: 6,
    name: 'Mother & Baby Care',
    slug: 'mother-baby-care',
    description: 'Specialized products for maternal and infant health and wellness.',
    image: '/images/categories/personal-care.jpg', // Using personal care image as fallback
    productCount: 134,
    subcategories: ['Baby Care', 'Maternity Care', 'Baby Food', 'Nursing Supplies'],
  },
  {
    id: 7,
    name: 'Health Devices',
    slug: 'health-devices',
    description: 'Modern health monitoring and therapeutic devices for home use.',
    image: '/images/categories/devices.jpg',
    productCount: 98,
    subcategories: ['BP Monitors', 'Glucose Meters', 'Thermometers', 'Nebulizers'],
  },
  {
    id: 8,
    name: 'Wellness & Lifestyle',
    slug: 'wellness-lifestyle',
    description: 'Products to support a healthy and balanced lifestyle.',
    image: '/images/categories/vitamins.jpg', // Using vitamins image as fallback
    productCount: 145,
    subcategories: ['Aromatherapy', 'Fitness & Nutrition', 'Sleep & Relaxation', 'Natural Remedies'],
  }
]

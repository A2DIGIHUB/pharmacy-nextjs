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
    image: '/images/products/pain-relief.jpg',
    productCount: 245,
    featured: true,
    subcategories: ['Antibiotics', 'Heart Medications', 'Diabetes Care', 'Pain Management'],
  },
  {
    id: 2,
    name: 'Over-the-Counter',
    slug: 'otc',
    description: 'Common medications available without prescription for everyday health needs.',
    image: '/images/products/vitamin-c.jpg',
    productCount: 189,
    featured: true,
    subcategories: ['Pain Relief', 'Cold & Flu', 'Digestive Health', 'First Aid'],
  },
  {
    id: 3,
    name: 'Personal Care',
    slug: 'personal-care',
    description: 'Premium hygiene and personal care products for your daily wellness routine.',
    image: '/images/products/sanitizer.jpg',
    productCount: 156,
    subcategories: ['Skin Care', 'Oral Care', 'Hair Care', 'Body Care'],
  },
  {
    id: 4,
    name: 'Vitamins & Supplements',
    slug: 'vitamins-supplements',
    description: 'High-quality nutritional supplements and vitamins for optimal health.',
    image: '/images/products/multivitamin.jpg',
    productCount: 203,
    featured: true,
    subcategories: ['Multivitamins', 'Minerals', 'Protein & Fitness', 'Immunity Support'],
  },
  {
    id: 5,
    name: 'Medical Devices',
    slug: 'medical-devices',
    description: 'Reliable medical devices and equipment for home healthcare needs.',
    image: '/images/products/bp-monitor.jpg',
    productCount: 78,
    featured: true,
    subcategories: ['Blood Pressure', 'Diabetes Care', 'Respiratory Care', 'Pain Management'],
  },
  {
    id: 6,
    name: 'First Aid',
    slug: 'first-aid',
    description: 'Essential first aid supplies and emergency medical products.',
    image: '/images/products/first-aid.jpg',
    productCount: 92,
    subcategories: ['Bandages', 'Antiseptics', 'Emergency Care', 'Wound Care'],
  }
];

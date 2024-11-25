export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  subcategory: string
  rating: number
  reviews: number
  featured?: boolean
  inStock: boolean
  requiresPrescription: boolean
  dosageForm?: string
  strength?: string
  manufacturer?: string
  packSize?: string
  usage?: string
  sideEffects?: string[]
  warnings?: string[]
}

export const products: Product[] = [
  // OTC Products
  {
    id: 1,
    name: 'Advanced Pain Relief',
    slug: 'advanced-pain-relief',
    description: 'Fast-acting pain relief tablets for headaches, muscle pain, and fever.',
    price: 12.99,
    originalPrice: 15.99,
    image: '/images/products/pain-relief.jpg',
    images: [
      '/images/products/pain-relief.jpg',
    ],
    category: 'Over-the-Counter',
    subcategory: 'Pain Relief',
    rating: 4.8,
    reviews: 245,
    featured: true,
    inStock: true,
    requiresPrescription: false,
    dosageForm: 'Tablet',
    strength: '500mg',
    manufacturer: 'A2Care Pharmaceuticals',
    packSize: '24 tablets',
    usage: 'Take 1-2 tablets every 4-6 hours as needed',
    sideEffects: ['Upset stomach', 'Drowsiness'],
    warnings: ['Do not exceed 8 tablets in 24 hours', 'Avoid alcohol'],
  },
  {
    id: 2,
    name: 'First Aid Kit Premium',
    slug: 'first-aid-kit-premium',
    description: 'Comprehensive first aid kit for emergency situations.',
    price: 29.99,
    image: '/images/products/first-aid.jpg',
    category: 'Medical Supplies',
    subcategory: 'First Aid',
    rating: 4.9,
    reviews: 189,
    featured: true,
    inStock: true,
    requiresPrescription: false,
    manufacturer: 'A2Care Medical',
    packSize: '100+ pieces',
  },
  {
    id: 3,
    name: 'Digital Blood Pressure Monitor',
    slug: 'digital-bp-monitor',
    description: 'Accurate and easy-to-use blood pressure monitor for home use.',
    price: 89.99,
    originalPrice: 99.99,
    image: '/images/products/bp-monitor.jpg',
    category: 'Health Devices',
    subcategory: 'BP Monitors',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    requiresPrescription: false,
    manufacturer: 'A2Care Medical Devices',
    usage: 'Follow user manual for accurate readings',
  },
  
  // Personal Care Products
  {
    id: 4,
    name: 'Hand Sanitizer Pack',
    slug: 'hand-sanitizer-pack',
    description: 'Effective hand sanitizer with moisturizing properties.',
    price: 15.99,
    image: '/images/products/sanitizer.jpg',
    category: 'Personal Care',
    subcategory: 'Hand Care',
    rating: 4.9,
    reviews: 312,
    featured: true,
    inStock: true,
    requiresPrescription: false,
    packSize: '3 x 250ml',
  },
  
  // Vitamins & Supplements
  {
    id: 5,
    name: 'Daily Multivitamin Complex',
    slug: 'daily-multivitamin-complex',
    description: 'Complete daily nutrition with essential vitamins and minerals.',
    price: 24.99,
    image: '/images/products/multivitamin.jpg',
    category: 'Vitamins & Supplements',
    subcategory: 'Multivitamins',
    rating: 4.8,
    reviews: 178,
    featured: true,
    inStock: true,
    requiresPrescription: false,
    dosageForm: 'Tablet',
    packSize: '60 tablets',
    usage: 'Take one tablet daily with food',
  },
  
  {
    id: 6,
    name: 'Omega-3 Fish Oil',
    slug: 'omega-3-fish-oil',
    description: 'High-quality fish oil supplement for heart and brain health.',
    price: 19.99,
    image: '/images/products/fish-oil.jpg',
    category: 'Vitamins & Supplements',
    subcategory: 'Supplements',
    rating: 4.7,
    reviews: 234,
    featured: true,
    inStock: true,
    requiresPrescription: false,
    dosageForm: 'Softgel',
    strength: '1000mg',
    packSize: '90 softgels',
  },
  
  {
    id: 7,
    name: 'Digital Thermometer',
    slug: 'digital-thermometer',
    description: 'Fast and accurate temperature readings with digital display.',
    price: 12.99,
    image: '/images/products/thermometer.jpg',
    category: 'Health Devices',
    subcategory: 'Thermometers',
    rating: 4.9,
    reviews: 145,
    featured: true,
    inStock: true,
    requiresPrescription: false,
    manufacturer: 'A2Care Medical Devices',
  },
  
  {
    id: 8,
    name: 'Allergy Relief Tablets',
    slug: 'allergy-relief-tablets',
    description: 'Fast-acting allergy relief for seasonal allergies.',
    price: 14.99,
    image: '/images/products/allergy.jpg',
    category: 'Over-the-Counter',
    subcategory: 'Allergy Relief',
    rating: 4.8,
    reviews: 167,
    featured: true,
    inStock: true,
    requiresPrescription: false,
    dosageForm: 'Tablet',
    packSize: '30 tablets',
    usage: 'Take one tablet daily',
  },
]

import type { Metadata } from 'next'
import ProductsClient from '@/components/products/ProductsClient'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our wide selection of healthcare products and medications.',
}

// This will be replaced with actual API data later
const mockProducts = [
  {
    id: 1,
    title: 'Pain Relief Tablets',
    price: 9.99,
    image: '/images/products/pain-relief.jpg',
    category: 'Pain Relief',
    description: 'Fast-acting pain relief tablets for headaches and body pain.',
    slug: 'pain-relief-tablets',
  },
  {
    id: 2,
    title: 'Vitamin C Supplements',
    price: 14.99,
    image: '/images/products/vitamin-c.jpg',
    category: 'Vitamins',
    description: 'High-strength vitamin C supplements for immune support.',
    slug: 'vitamin-c-supplements',
  },
  {
    id: 3,
    title: 'First Aid Kit',
    price: 29.99,
    image: '/images/products/first-aid.jpg',
    category: 'First Aid',
    description: 'Complete first aid kit for emergency situations.',
    slug: 'first-aid-kit',
  },
  {
    id: 4,
    title: 'Digital Thermometer',
    price: 19.99,
    image: '/images/products/thermometer.jpg',
    category: 'Medical Devices',
    description: 'Accurate digital thermometer for temperature monitoring.',
    slug: 'digital-thermometer',
  },
  {
    id: 5,
    title: 'Allergy Relief',
    price: 12.99,
    image: '/images/products/allergy.jpg',
    category: 'Allergy',
    description: 'Fast-acting allergy relief medication.',
    slug: 'allergy-relief',
  },
  {
    id: 6,
    title: 'Multivitamin Complex',
    price: 24.99,
    image: '/images/products/multivitamin.jpg',
    category: 'Vitamins',
    description: 'Complete daily multivitamin for overall health.',
    slug: 'multivitamin-complex',
  },
  {
    id: 7,
    title: 'Blood Pressure Monitor',
    price: 49.99,
    image: '/images/products/bp-monitor.jpg',
    category: 'Medical Devices',
    description: 'Digital blood pressure monitor for home use.',
    slug: 'blood-pressure-monitor',
  },
  {
    id: 8,
    title: 'Hand Sanitizer',
    price: 4.99,
    image: '/images/products/sanitizer.jpg',
    category: 'Personal Care',
    description: 'Antibacterial hand sanitizer for on-the-go protection.',
    slug: 'hand-sanitizer',
  },
  {
    id: 9,
    title: 'Omega-3 Fish Oil',
    price: 19.99,
    image: '/images/products/fish-oil.jpg',
    category: 'Vitamins',
    description: 'High-quality omega-3 supplements for heart health.',
    slug: 'omega-3-fish-oil',
  },
  {
    id: 10,
    title: 'Elastic Bandage',
    price: 7.99,
    image: '/images/products/bandage.jpg',
    category: 'First Aid',
    description: 'Flexible elastic bandage for sprains and strains.',
    slug: 'elastic-bandage',
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-8">Our Products</h1>
      <ProductsClient products={mockProducts} />
    </div>
  )
}

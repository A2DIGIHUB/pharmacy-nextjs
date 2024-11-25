export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Generic Paracetamol',
    slug: 'generic-paracetamol',
    description: 'Fast-acting pain relief medication suitable for headaches, toothaches, and fever.',
    price: 5.99,
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Pain Relief',
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  // Add more products as needed
];

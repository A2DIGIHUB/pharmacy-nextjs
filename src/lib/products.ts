// This will be replaced with actual API calls
export async function getProduct(slug: string) {
  // Mock data for now
  return {
    id: 1,
    title: 'Pain Relief Tablets',
    price: 9.99,
    images: [
      '/images/products/pain-relief.jpg',
      '/images/products/pain-relief-2.jpg',
      '/images/products/pain-relief-3.jpg',
    ],
    category: 'Pain Relief',
    description: 'Fast-acting pain relief tablets for headaches and body pain.',
    slug: 'pain-relief-tablets',
    details: {
      dosage: '1-2 tablets every 4-6 hours',
      ingredients: 'Active ingredient: Paracetamol 500mg',
      warnings: 'Do not exceed stated dose. Consult your doctor if symptoms persist.',
      specifications: {
        'Pack Size': '30 tablets',
        'Form': 'Tablet',
        'Storage': 'Store below 25°C',
        'Manufacturer': 'PharmaCare Labs',
        'Expiry': '24 months from manufacture',
      },
    },
    rating: 4.5,
    totalReviews: 128,
    requiresPrescription: false,
    stock: 50,
  }
}

export async function getProducts() {
  // Mock data for now
  return [
    await getProduct('pain-relief-tablets'),
    // Add more products as needed
  ]
}

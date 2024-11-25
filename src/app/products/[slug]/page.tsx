import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/data/products'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: ProductPageProps
): Promise<Metadata> {
  const product = products.find(p => p.slug === params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found | A2Care',
      description: 'The requested product could not be found.'
    }
  }

  return {
    title: `${product.name} | A2Care`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]]
    }
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The requested product could not be found.</p>
          <Link href="/" className="text-primary-blue hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary-blue">
          Home
        </Link>
        <span>/</span>
        <Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-primary-blue">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary-blue mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Availability:</span>
              <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Rating:</span>
              <span className="text-yellow-500">★</span>
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>
            
            <button
              className={`w-full py-3 rounded-lg font-medium ${
                product.inStock
                  ? 'bg-primary-blue text-white hover:bg-primary-blue/90'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

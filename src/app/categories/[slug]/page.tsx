import Link from 'next/link'
import { products } from '@/data/products'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryProducts = products.filter(
    p => p.category.toLowerCase() === params.slug.replace(/-/g, ' ')
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary-blue">
          Home
        </Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-primary-blue">
          Categories
        </Link>
        <span>/</span>
        <span className="text-gray-900">{params.slug.replace(/-/g, ' ')}</span>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h1>
          <p className="text-gray-600 mb-6">No products found in this category.</p>
          <Link href="/categories" className="text-primary-blue hover:underline">
            Browse all categories
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
            {params.slug.replace(/-/g, ' ')}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                
                <div className="p-4">
                  <Link href={`/products/${product.slug}`} className="hover:text-primary-blue">
                    <h2 className="font-semibold mb-2 line-clamp-2">{product.name}</h2>
                  </Link>
                  
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-primary-blue">${product.price.toFixed(2)}</p>
                    <button
                      className={`px-4 py-2 rounded-md font-medium ${
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
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

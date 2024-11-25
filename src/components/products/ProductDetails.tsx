'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProductGallery } from '@/components/products/ProductGallery'
import { ProductInteractiveSection } from '@/components/products/ProductInteractiveSection'
import { products } from '@/data/products'
import type { Product } from '@/types'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <ProductGallery images={product.images} name={product.name} />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary-blue mb-6">${product.price.toFixed(2)}</p>
          
          <div className="prose prose-sm max-w-none mb-6">
            <p>{product.description}</p>
          </div>

          {/* Interactive Section */}
          <ProductInteractiveSection product={product} />

          {/* Additional Info */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium">Category:</span> {product.category}</li>
              <li><span className="font-medium">SKU:</span> {product.id}</li>
              <li><span className="font-medium">Stock:</span> {product.inStock ? 'In Stock' : 'Out of Stock'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                <div className="group">
                  <div className="relative aspect-square mb-3">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-primary-blue transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-600">${relatedProduct.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

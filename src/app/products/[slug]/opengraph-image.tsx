import { ImageResponse } from 'next/og'
import { getProduct } from '@/lib/products'
 
export const runtime = 'edge'
 
export const alt = 'Product Image'
export const size = {
  width: 1200,
  height: 630,
}
 
export default async function Image({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {product.title}
      </div>
    ),
    {
      ...size,
    }
  )
}

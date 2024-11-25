import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // This will be replaced with actual API call
  const product = {
    title: 'Pain Relief Tablets',
    description: 'Fast-acting pain relief tablets for headaches and body pain.',
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      type: 'website',
    },
  }
}

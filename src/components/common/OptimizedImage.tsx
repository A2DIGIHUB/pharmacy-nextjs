'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'

interface OptimizedImageProps extends Omit<ImageProps, 'onError' | 'onLoad'> {
  fallbackSrc?: string
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/images/products/placeholder.jpg',
  className,
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        {...props}
        className={clsx(
          'transition-opacity duration-300',
          loading ? 'opacity-0' : 'opacity-100'
        )}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
      />
      {loading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  )
}

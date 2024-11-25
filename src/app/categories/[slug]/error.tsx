'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function CategoryError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto text-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Something went wrong!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again later or contact our support team if the problem persists.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-primary-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
          >
            Try again
          </button>
          <Link
            href="/categories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-blue bg-primary-blue/10 hover:bg-primary-blue/20"
          >
            Back to Categories
          </Link>
        </div>
      </div>
    </div>
  )
}

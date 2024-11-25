import { FiGrid } from 'react-icons/fi'

export default function CategoryLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="relative h-[300px] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300/80 to-gray-400/80">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="h-4 w-48 bg-gray-300 rounded mb-4" />
            <div className="h-8 w-96 bg-gray-300 rounded mb-4" />
            <div className="h-4 w-72 bg-gray-300 rounded" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Controls Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-10 w-10 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar Skeleton */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
              <div className="flex items-center gap-4">
                <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* Products Grid Skeleton */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-gray-200" />
                  <div className="p-4">
                    <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
                    <div className="h-6 w-48 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-full bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded mb-4" />
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-20 bg-gray-200 rounded" />
                      <div className="h-10 w-28 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

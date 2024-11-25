interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => {
      if (totalPages <= 5) return i + 1
      if (currentPage <= 3) return i + 1
      if (currentPage >= totalPages - 2)
        return totalPages - 4 + i
      return currentPage - 2 + i
    }
  )

  const renderPageButton = (pageNum: number) => (
    <button
      key={pageNum}
      onClick={() => onPageChange(pageNum)}
      className={`px-4 py-2 rounded-md ${
        currentPage === pageNum
          ? 'bg-primary-blue text-white'
          : 'text-text-secondary hover:bg-gray-100'
      }`}
    >
      {pageNum}
    </button>
  )

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md text-text-secondary hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        Previous
      </button>

      {totalPages > 5 && currentPage > 3 && (
        <>
          {renderPageButton(1)}
          <span className="px-2">...</span>
        </>
      )}

      {pageNumbers.map((pageNum) => renderPageButton(pageNum))}

      {totalPages > 5 && currentPage < totalPages - 2 && (
        <>
          <span className="px-2">...</span>
          {renderPageButton(totalPages)}
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md text-text-secondary hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        Next
      </button>
    </div>
  )
}

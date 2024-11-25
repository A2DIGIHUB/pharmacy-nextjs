import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-blue"
      >
        {/* Cross Symbol */}
        <path
          d="M13 4H19V28H13V4Z"
          fill="currentColor"
        />
        <path
          d="M4 13H28V19H4V13Z"
          fill="currentColor"
        />
        {/* Circular Border */}
        <circle
          cx="16"
          cy="16"
          r="15"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <span className="text-xl font-bold text-gray-900">
        A2
        <span className="text-primary-blue">Care</span>
      </span>
    </Link>
  )
}

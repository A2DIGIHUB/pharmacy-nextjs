/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static page generation for faster loads
  output: 'standalone',
  
  // Image optimization settings
  images: {
    domains: ['images.unsplash.com'], // Add other image domains if needed
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Optimize page loading with experimental features
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    scrollRestoration: true, // Restore scroll position on navigation
  },

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable page caching for faster subsequent loads
  generateEtags: true,

  // Minimize code in production
  swcMinify: true,

  // Configure headers for better caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
}

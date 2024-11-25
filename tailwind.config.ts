import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#3B82F6',
          green: '#34D399',
        },
        accent: {
          coral: '#FF6B6B',
        },
        background: {
          light: '#F9FAFB',
        },
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
        }
      },
    },
  },
  plugins: [],
}
export default config

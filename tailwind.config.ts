import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          soft: '#F5FAFF',
          tint: '#EAF6FF',
          sky: '#5BB7F5',
          skySoft: '#8DD3FF',
          navy: '#123B5D',
          ink: '#102A43',
          muted: '#627D98',
          border: '#D9EAF7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-blue': '0 10px 40px -10px rgba(91, 183, 245, 0.14)',
        'editorial': '0 20px 50px -15px rgba(16, 42, 67, 0.08)',
        'nav': '0 8px 30px rgba(16, 42, 67, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config

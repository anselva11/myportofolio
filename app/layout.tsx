import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Hansel Varian — Technology, Business & Finance',
  description:
    'Business Information Technology professional working across technology, entrepreneurship, business analysis, investment, and strategic business development.',
  keywords: [
    'Hansel Varian',
    'Technology Business Finance',
    'Business Information Technology',
    'Personal Branding Portfolio',
    'Pacific Investment Capital',
    'Global Expor Indonesia',
    'Hansai Ocean Industries',
    'BINUS University',
  ],
  authors: [{ name: 'Hansel Varian' }],
  openGraph: {
    title: 'Hansel Varian — Technology × Business × Finance',
    description: 'Build. Analyze. Lead. Create Value.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Hansel Varian',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-brand-ink antialiased">
        {children}
      </body>
    </html>
  )
}

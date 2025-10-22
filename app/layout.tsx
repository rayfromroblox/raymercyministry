import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ray Mercy Ministry - Spreading Love and Hope',
  description: 'Ray Mercy Ministry focuses on visiting the needy and vulnerable—especially children and the sick. Join us in spreading love and hope.',
  keywords: 'charity, ministry, children, vulnerable, mercy, hope, Kenya, Rachel Macharia, feeding programs, community outreach',
  authors: [{ name: 'Rachel Macharia' }],
  creator: 'Ray Mercy Ministry',
  publisher: 'Ray Mercy Ministry',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raymercyministry.netlify.app',
    title: 'Ray Mercy Ministry - Spreading Love and Hope',
    description: 'Ray Mercy Ministry focuses on visiting the needy and vulnerable—especially children and the sick. Join us in spreading love and hope.',
    siteName: 'Ray Mercy Ministry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ray Mercy Ministry - Spreading Love and Hope',
    description: 'Ray Mercy Ministry focuses on visiting the needy and vulnerable—especially children and the sick. Join us in spreading love and hope.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


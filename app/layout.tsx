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
  title: 'Ray Mercy Ministry - Bringing Hope to the Vulnerable',
  description: 'Serving children and families across Kenya with compassion and dignity through feeding programs and community outreach.',
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
    title: 'Ray Mercy Ministry - Bringing Hope to the Vulnerable',
    description: 'Serving children and families across Kenya with compassion and dignity through feeding programs and community outreach.',
    siteName: 'Ray Mercy Ministry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ray Mercy Ministry - Bringing Hope to the Vulnerable',
    description: 'Serving children and families across Kenya with compassion and dignity through feeding programs and community outreach.',
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
      <head>
        {/* Google Search Console Verification - Replace YOUR_VERIFICATION_CODE_HERE with the actual code from Google */}
        <meta name="google-site-verification" content="t59QmlN1scjF2bbE5CjX_yIFn48VZuwo3gWDO-BnLiY" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FCFAF4',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://growthstackguide.com'),
  title: {
    default: 'Growth Stack Guide — AI-Powered Productivity & Digital Systems',
    template: '%s | Growth Stack Guide',
  },
  description:
    'Battle-tested AI workflows, modular Notion systems, and practical productivity architectures for creators, freelancers and solopreneurs.',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    other: {
      'p:domain_verify': '45f8a4001b44ef59618dfd8523bb46a0',
    },
  },
  icons: {
    icon: [
      { url: '/images/brand/favicon.ico', sizes: 'any' },
      { url: '/images/brand/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/brand/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Growth Stack Guide — AI-Powered Productivity & Digital Systems',
    description:
      'Battle-tested AI workflows, modular Notion systems, and practical productivity architectures for creators, freelancers and solopreneurs.',
    url: 'https://growthstackguide.com',
    siteName: 'Growth Stack Guide',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Stack Guide — AI-Powered Productivity & Digital Systems',
    description:
      'Battle-tested AI workflows, modular Notion systems, and practical productivity architectures for creators, freelancers and solopreneurs.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/brand/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/brand/favicon.png" type="image/png" />
        <meta name="p:domain_verify" content="45f8a4001b44ef59618dfd8523bb46a0" />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-dark)] antialiased font-sans flex flex-col">
        {/* Google Analytics 4 Script */}
        <GoogleAnalytics />

        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#11152F] focus:text-[#FFFFFF] focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Universal Shell Structure */}
        <div className="flex-1 flex flex-col w-full min-h-screen min-w-0 overflow-x-clip">
          <Header />
          <main id="main-content" className="flex-1 w-full min-w-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

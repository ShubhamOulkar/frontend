import '@/app/ui/global.css';
import { inter } from './ui/font';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Financial dashboard web app',
    default: 'Financial dashboard By Shubhu',
  },
  description: 'The Financial Dashboard, built with nextjs App Router.',
  generator: 'Next.js',
  applicationName: 'The Financial Dashboard using Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Shubham', url: 'https://github.com/ShubhamOulkar' }],
  creator: 'Shubham Oulkar',
  publisher: 'Shubham Oulkar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://financialdashboard-beige.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://financialdashboard-beige.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://financialdashboard-beige.vercel.app/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://financialdashboard-beige.vercel.app/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Financial Dashboard',
    description: 'The Financial Dashboard, built with nextjs App Router.',
    siteId: '1467726470533754880',
    creator: '@shubham',
    creatorId: '1467726470533754880',
    images: ['https://financialdashboard-beige.vercel.app/og.png'], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body className={`${inter.className} antialised`}>{children}</body>
      {/* No vercel web vitals send to the server during development. 
          Hydration Error is there during development. See console for more info. */}
      <SpeedInsights />
    </html>
  );
}

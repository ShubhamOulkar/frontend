import '@/app/ui/global.css';
import { inter } from './ui/font';
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
  metadataBase: new URL('https://financial-dashboard-shubhu-oulkar.vercel.app'),
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
    url: 'https://financial-dashboard-shubhu-oulkar.vercel.app',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://financial-dashboard-shubhu-oulkar.vercel.app/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://financial-dashboard-shubhu-oulkar.vercel.app/og-alt.png', // Must be an absolute URL
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
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://financial-dashboard-shubhu-oulkar.vercel.app/og.png'], // Must be an absolute URL
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // icons: {
  //   icon: [
  //     { url: '/icon.png' },
  //     new URL(
  //       '/icon.png',
  //       'https://financial-dashboard-shubhu-oulkar.vercel.app',
  //     ),
  //     { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
  //   ],
  //   shortcut: ['/shortcut-icon.png'],
  //   apple: [
  //     { url: '/apple-icon.png' },
  //     { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
  //   ],
  //   other: [
  //     {
  //       rel: 'apple-touch-icon-precomposed',
  //       url: '/apple-touch-icon-precomposed.png',
  //     },
  //   ],
  // },
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
    </html>
  );
}

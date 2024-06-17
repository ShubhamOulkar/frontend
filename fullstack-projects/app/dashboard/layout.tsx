import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Financial dashboard web app",
    default: "Financial dashboard By Shubhu",
  },
  description: "The Financial Dashboard, built with nextjs App Router.",
  generator: "Next.js",
  applicationName: "The Financial Dashboard using Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Shubham", url: "https://github.com/ShubhamOulkar" }],
  creator: "Shubham Oulkar",
  publisher: "Shubham Oulkar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    date: false,
  },
  icons: {
    shortcut: "/favicon.svg",
    icon: "/icon.svg",
    apple: "/apple-icon.jpg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-icon.jpg",
    },
  },
  metadataBase: new URL("https://financialdashboard-beige.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://financialdashboard-beige.vercel.app/",
    siteName: "Next.js",
    images: [
      {
        url: "https://financialdashboard-beige.vercel.app/opengraph-image.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://financialdashboard-beige.vercel.app/opengraph-image.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Financial Dashboard",
    description: "The Financial Dashboard, built with nextjs App Router.",
    siteId: "1467726470533754880",
    creator: "@shubham",
    creatorId: "1467726470533754880",
    images: ["https://financialdashboard-beige.vercel.app/opengraph-image.png"], // Must be an absolute URL
  },
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="financial-dashboard">{children}</section>;
}

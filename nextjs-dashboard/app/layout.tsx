import '@/app/ui/global.css';
import { inter } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <title>Financial Dashboard</title>
      </head>
      <body className={`${inter.className} antialised`}>{children}</body>
    </html>
  );
}

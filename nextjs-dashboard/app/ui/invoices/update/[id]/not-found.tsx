// 'use client';
import Link from 'next/link';
import { headers } from 'next/headers';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
// import { usePathname } from 'next/navigation';

// export async function getServerSideProps({ req }) {
//   const protocol = req.headers['x-forwarded-proto'] || 'http';
//   const host = req.headers['host'];
//   const pathname = req.url;
//   const fullUrl = `${protocol}://${host}${pathname}`;

//   return {
//     props: {
//       fullUrl,
//     },
//   };
// }

export default async function NotFound() {
  // const pathname = usePathname();
  const headersList = headers();
  const domain = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http'; // Default to 'http' if not available
  const pathname = headersList.get('x-original-uri') || ''; // This might vary depending on your server setup

  const fullUrl = `${protocol}://${domain}${pathname}`;

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <h2>Not Found: {fullUrl}</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/ui/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}

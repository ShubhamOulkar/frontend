import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ExampleClientComponent from "./client-compo-useSelectedLayoutSegment";
import callApi from "./lib/callApi";

const inter = Inter({ subsets: ["latin"] });

//export const fetchCache = "force-cache";
// export const revalidate = 10;

export const metadata: Metadata = {
  title: {
    template: '"%s | Learn nextjs',
    default: "Learn app routes in nextjs",
  },
  description: "Learn app routes in nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = callApi();

  console.log("Data fetched from layout");

  // const cookie = headers();
  // console.log("cookie:", cookie);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
          <ExampleClientComponent />
          <div>
            <h1>This is home page</h1>
            <div>
              <h2>
                <strong>Next 14 </strong>
                In layout.js, fetch() data is not cached by default (server
                component), to stop fetch data on each request use cache:
                &apos;force-cache&apos;:
              </h2>
              <q>{data}</q>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}

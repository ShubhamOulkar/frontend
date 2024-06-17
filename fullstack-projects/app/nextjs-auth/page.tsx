import Link from "next/link";
import { getUser } from "./lib/data-access-layer";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// export const metadata: Metadata = {
//   title: "User Auth project",
// };

export async function generateMetadata(): Promise<Metadata> {
  const user = await getUser();
  return {
    title: "login:" + user?.name,
  };
}

export default async function Home() {
  const user = await getUser();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="">Learn Next Auth</h1>
      {user?.name ? (
        <>
          <p>Login as : {user?.name}</p>{" "}
          <Link className="underline" href={"/nextjs-auth/profile"}>
            Go to profile page
          </Link>
          <Link
            href="/"
            className="outline  flex items-center  gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:self-end md:text-base"
          >
            <span>Go to project list</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </>
      ) : (
        <>
          <div>
            <Link href="/nextjs-auth/signup" className="underline">
              Signup form
            </Link>
          </div>
          <div>
            <Link href="/nextjs-auth/login" className="underline">
              Login form
            </Link>
          </div>
          <div>
            <Link className="underline" href="/">
              Go to project list
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

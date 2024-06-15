import Link from "next/link";
import { getUser } from "./lib/data-access-layer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App Authentication",
  description: "Authentication, session management, authorization in nextjs.",
};

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
        </>
      )}
    </main>
  );
}

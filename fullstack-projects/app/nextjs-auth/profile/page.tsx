import Link from "next/link";
import { logout } from "../actions/auth";
import { getUser } from "../lib/data-access-layer";
import { Metadata, ResolvedMetadata } from "next";

// export const metadata: Metadata = {
//   title: "profile",
// };

export async function generateMetadata(
  parent: ResolvedMetadata
): Promise<Metadata> {
  const user = await getUser();

  return {
    title: user?.name + " profile",
  };
}

export default async function Page() {
  const user = await getUser();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <p>Welcome, new user.</p>
        <h1>This is user profile page</h1>
        <div>
          <p>User name: {user?.name}</p>
          <p>User email: {user?.email}</p>
        </div>
        <form
          action={async () => {
            "use server";
            await logout();
          }}
        >
          <button className="underline">Logout</button>
        </form>
        <Link href="/nextjs-auth" className="underline">
          Home
        </Link>
      </main>
    </>
  );
}

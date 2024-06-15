import Link from "next/link";
import { getUser } from "./lib/data-access-layer";

export default async function Home() {
  const user = await getUser();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="">Learn Next Auth</h1>
      {user?.name ? (
        <>
          <p>Login as : {user?.name}</p>{" "}
          <Link className="underline" href={"/profile"}>
            Go to profile page
          </Link>
        </>
      ) : (
        <>
          <div>
            <Link href="/signup" className="underline">
              Signup form
            </Link>
          </div>
          <div>
            <Link href="/login" className="underline">
              Login form
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

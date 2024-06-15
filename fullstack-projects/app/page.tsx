import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link className="underline" href={"/nextjs-auth"}>
        1. User login, signup, logout
      </Link>
      <Link className="underline" href={"/dashboard"}>
        2. Financial Dashboard
      </Link>
    </main>
  );
}

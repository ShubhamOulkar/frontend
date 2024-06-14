import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="">Learn Next Auth</h1>
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
    </main>
  );
}

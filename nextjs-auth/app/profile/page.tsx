import Link from "next/link";
import { logout } from "../actions/auth";

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <p>Welcome, new user.</p>
        <h1>This is user profile page</h1>
        <form
          action={async () => {
            "use server";
            await logout();
          }}
        >
          <button className="underline">Logout</button>
        </form>
      </main>
    </>
  );
}

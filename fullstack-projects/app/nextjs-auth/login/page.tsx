import LoginForm from "../ui/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>This is a login page</h1>
      <LoginForm />
      <p>
        Are you new user? &nbsp;
        <a className="underline" href="/nextjs-auth/signup">
          Signup
        </a>
      </p>
      <a href="/nextjs-auth" className="underline">
        Home
      </a>
    </main>
  );
}

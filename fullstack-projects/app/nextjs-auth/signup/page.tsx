import SignupForm from "../ui/signup-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "signup",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>This is a signup page</h1>
      <SignupForm />
      <p>
        Are you old user? &nbsp;
        <a className="underline" href="/nextjs-auth/login">
          Login
        </a>
      </p>

      <a href="/nextjs-auth" className="underline">
        Home
      </a>
    </main>
  );
}

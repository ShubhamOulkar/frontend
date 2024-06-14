import LoginForm from "../ui/login-form";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>This is a login page</h1>
      <LoginForm />
      <p>
        Are you new user? &nbsp;
        <a className="underline" href="/signup">
          Signup
        </a>
      </p>
      <a href="/" className="underline">
        Home
      </a>
    </main>
  );
}

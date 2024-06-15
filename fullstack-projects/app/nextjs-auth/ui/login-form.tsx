"use client";
import { useActionState } from "react";
import { login } from "../actions/auth";
import { useFormStatus } from "react-dom";

export default function LoginForm() {
  const [state, dispatch] = useActionState(login, undefined);

  return (
    <>
      <form action={dispatch}>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" name="email" type="email" placeholder="Email" />
          {state?.errors?.email && (
            <p className="bg-red-100 text-red-700">{state.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />
          {state?.errors?.password && (
            <p className="bg-red-100 text-red-700">{state?.errors.password}</p>
          )}
        </div>
        <Submit />
      </form>
    </>
  );
}

function Submit() {
  const { pending } = useFormStatus();

  const handleCLick = (e: { preventDefault: () => void }) => {
    if (pending) e.preventDefault();
  };

  return (
    <button
      className="underline"
      type="submit"
      disabled={pending}
      onClick={handleCLick}
    >
      {pending ? "wait..." : "Login"}
    </button>
  );
}

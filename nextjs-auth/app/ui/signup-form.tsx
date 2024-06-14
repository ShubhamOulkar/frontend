"use client";
import { signup } from "@/app/actions/auth";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function SignupForm() {
  const [state, action] = useActionState(signup, undefined);
  // const [state, action] = useFormState(signup);

  return (
    <form action={action}>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" placeholder="Name" className="" />
        {state?.errors?.name && (
          <p className="bg-red-100 text-red-700">{state.errors.name}</p>
        )}
      </div>
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
          <div>
            <p>Password must be:</p>
            <ul>
              {state?.errors.password.map((err) => (
                <li key={err} className="bg-red-100 text-red-700">
                  {err}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <label htmlFor="confirm">Confirm Password: </label>
        <input
          id="confirm"
          name="confirm"
          type="password"
          placeholder="confirm password"
        />
        {state?.errors?.confirm && (
          <p className="bg-red-100 text-red-700">{state.errors.confirm}</p>
        )}
      </div>

      <Submit />
    </form>
  );
}

function Submit() {
  const { pending } = useFormStatus();

  const handleCLick = (e: { preventDefault: () => void }) => {
    if (pending) e.preventDefault();
  };

  return (
    <button type="submit" disabled={pending} onClick={handleCLick}>
      {pending ? "Submitting..." : "Signup"}
    </button>
  );
}

"use client";
import { lusitana } from "./font";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
// import { authenticate } from "../lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { userSignup } from "../lib/actions";

export default function SignupForm() {
  const [state, dispatch] = useFormState(userSignup, undefined);

  return (
    <form className="space-y-3" action={dispatch}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Create new user
        </h1>
        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="name"
          >
            User name
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="name"
              type="text"
              name="name"
              placeholder="Enter user name"
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        {state?.errors.name && (
          <div className="mt-3 flex  space-x-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className=" text-sm text-red-500">{state.errors.name}</p>
          </div>
        )}

        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        {/* Add form errors here */}

        {state?.errors.email && (
          <div className="mt-3 flex items-end space-x-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className=" text-sm text-red-500">{state.errors.email}</p>
          </div>
        )}

        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              minLength={6}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        {/* Add form errors here */}
        {state?.errors.password && (
          <ul className="mt-3">
            {state.errors.password.map((err) => (
              <li key={err} className="flex gap-1">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <em className="text-sm text-red-500">{err}</em>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="confirmpassword"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              placeholder="Confirm password"
              minLength={6}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        {/* Add form errors here */}

        {state?.errors.confirm && (
          <div className="mt-3 flex items-end space-x-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{state.errors.confirm}</p>
          </div>
        )}
      </div>
      <SignupButton />
      <div className="text-center">
        <p>
          Already have an account?
          <Link
            href={"/dashboard/login"}
            title="login page"
            className="p-3 font-semibold text-cyan-800 underline underline-offset-4 duration-300 ease-in hover:text-cyan-500"
          >
            Login
          </Link>
        </p>

        <Link
          href={"/dashboard/"}
          className="p-5 font-semibold text-cyan-800 underline underline-offset-4 duration-300 ease-in hover:text-cyan-500"
          title="Home page"
        >
          Home
        </Link>
      </div>
    </form>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();

  const handleCLick = (e: { preventDefault: () => void }) => {
    if (pending) e.preventDefault();
  };

  return (
    <Button
      className="mt-4 w-full"
      onClick={handleCLick}
      type="submit"
      disabled={pending}
    >
      {pending ? "Creating user...🏃🏻‍♂️" : "Sign in"}
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

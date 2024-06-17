"use client";
import { lusitana } from "./font";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { login } from "../lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(login, undefined);
  return (
    <>
      <form className="space-y-3" action={dispatch}>
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Please log in to continue.
          </h1>
          <div className="w-full">
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
              <div className=" mt-2 flex gap-1">
                {errorMessage?.errors.email && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">
                      {errorMessage?.errors.email}
                    </p>
                  </>
                )}
              </div>
            </div>
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
              <div className="mt-2 flex gap-1">
                {errorMessage?.errors.password && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">
                      {errorMessage?.errors.password}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <LoginButton />
        </div>
      </form>
      <div className="text-center">
        <p>
          Are you new user?
          <Link
            href={"/dashboard/signup"}
            className="p-3 font-semibold text-cyan-800 underline underline-offset-4 duration-300 ease-in hover:text-cyan-500"
            title="new user signup"
          >
            signup
          </Link>
        </p>

        <Link
          href={"/dashboard"}
          className="p-5 font-semibold text-cyan-800 underline underline-offset-4 duration-300 ease-in hover:text-cyan-500"
          title="Home page"
        >
          Home
        </Link>
      </div>
    </>
  );
}

function LoginButton() {
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
      {pending ? "wait..." : "Log in"}
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

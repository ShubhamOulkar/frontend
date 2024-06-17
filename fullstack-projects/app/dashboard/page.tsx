import AcmeLogo from "./ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import style from "@/app/home.module.css";
import { lusitana } from "./ui/font";
import Image from "next/image";
import Desktop from "@/public/hero-desktop.png";
import Mobile from "@/public/hero-mobile.png";
import { getUser } from "../nextjs-auth/lib/data-access-layer";
import { logout } from "./lib/actions";

export default async function Page() {
  const user = await getUser();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col h-40 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:flex-row md:h-20 ">
        <AcmeLogo />
        <Link
          href="/"
          className="outline  flex items-center  gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:self-end md:text-base"
        >
          <span>Go to project list</span>
          <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-10 rounded-lg bg-gray-50 p-10 md:w-2/5 md:self-center md:px-20">
          {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" /> */}
          <div className="flex flex-col items-center gap-3">
            <div className={style.shape} />
            <p
              className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
            >
              {user ? (
                <strong>Login as : {user.name}</strong>
              ) : (
                <strong>Welcome to financial login</strong>
              )}
            </p>
          </div>

          <div className="justify- flex grow flex-col gap-4 md:flex-row md:gap-10 md:self-center">
            {user ? (
              <>
                <Link
                  href="/dashboard/ui/summary"
                  className="flex items-center gap-1 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400  md:text-base"
                >
                  <span>Financial summary</span>{" "}
                  <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await logout();
                  }}
                  className=" rounded-lg bg-blue-500 text-sm font-medium text-white transition-colors hover:bg-blue-400  "
                >
                  <button
                    className="flex items-center gap-1  px-6 py-6 md:text-base"
                    type="submit"
                  >
                    <span>Logout</span>
                    <ArrowRightIcon className="w-5 md:w-6" />
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard/login"
                  className="flex items-center gap-1 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:self-end md:text-base"
                >
                  <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
                <Link
                  href="/dashboard/signup"
                  className="flex items-center gap-1 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:self-end md:text-base"
                >
                  <span>Sign up</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-20">
          <Image
            // src="/hero-desktop.png"
            src={Desktop}
            // width={1000}
            // height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            priority
          />
          <Image
            // src="/hero-mobile.png"
            // width={560}
            // height={620}
            src={Mobile}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
            priority
          />
        </div>
      </div>
    </main>
  );
}

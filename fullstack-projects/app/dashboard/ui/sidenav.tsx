import Link from "next/link";
import NavLinks from "./nav-links";
import AcmeLogo from "./acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { getUser } from "@/app/nextjs-auth/lib/data-access-layer";
import { logout } from "../lib/actions";

export default async function SideNav() {
  const user = await getUser();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex flex-col h-20 items-center justify-between rounded-md bg-blue-600 p-4 text-white md:h-40">
        <AcmeLogo />
        <div>{user && <p>User: {user.name}</p>}</div>
        <Link href={"/dashboard"}>Home</Link>
      </div>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";
            await logout();
          }}
        >
          <button
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            type="submit"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

import AcmeLogo from "../ui/acme-logo";
import SignupForm from "../ui/signup-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User login",
};

export default function LoginPage() {
  return (
    <main className="flex items-end justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <SignupForm />
      </div>
    </main>
  );
}

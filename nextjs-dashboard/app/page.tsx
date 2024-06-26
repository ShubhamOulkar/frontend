import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import style from '@/app/ui/home.module.css';
import { lusitana } from './ui/font';
import Image from 'next/image';
import Desktop from '@/public/hero-desktop.png';
import Mobile from '@/public/hero-mobile.png';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center rounded-lg bg-blue-500 p-4">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-10 rounded-lg bg-gray-50 p-10 md:w-2/5 md:self-center md:px-20">
          {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" /> */}
          <div className="flex flex-col items-center gap-3">
            <div className={style.shape} />
            <p
              className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
            >
              <strong>Welcome to financial login</strong>
            </p>
          </div>
          <div className="justify- flex grow flex-col gap-4 md:flex-row md:gap-10 md:self-center">
            <Link
              href="/login"
              className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:self-end md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/signup"
              className="flex items-center gap-3 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:self-end md:text-base"
            >
              <span>Sign up</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
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

"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // console.log(searchParams.get('query')?.toString());

  const handleIconClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleSearch = useDebouncedCallback((value: string) => {
    console.log("searching....", value);
    const params = new URLSearchParams(searchParams);

    value ? params.set("query", value) : params.delete("query");

    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        ref={inputRef}
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon
        className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900"
        onClick={handleIconClick}
      />
    </div>
  );
}

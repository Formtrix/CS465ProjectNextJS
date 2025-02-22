"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// Use the useDebouncedCallback hook to limits the rate at which a function can fire.
import { useDebouncedCallback } from "use-debounce";
import clsx from "clsx";

interface SearchProps {
  placeholder: string;
  className?: string; // Add className prop
}

export default function Search({ placeholder, className }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // use debounce to wrap the contents of handleSearch, and only run handleSearch after 300ms
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams || "");
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    // Log the search term for analytics
    // console.log("Search term:", term);//
    // You can also send the term to an analytics service here
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className={clsx(
          "peer block w-full border border-gray-300 py-[10px] pl-10 text-md outline-2 placeholder:text-gray-400 rounded-full focus:border-sky-400",
          className // Apply className prop
        )}
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams?.get("search")?.toString() || ""}
      />
      <MagnifyingGlassIcon
        className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900"
        strokeWidth={3}
      />
    </div>
  );
}

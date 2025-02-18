"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Navigation links
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        // Fix for Home being permanently active
        const isActive =
          link.href === "/dashboard"
            ? pathname === link.href // Exact match for Home
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "group flex h-[48px] w-full items-center justify-start gap-4 rounded-md p-3 text-sm font-medium transition-colors hover:bg-sky-100 hover:shadow-md",
              isActive
                ? "bg-sky-400 text-white hover:bg-sky-500"
                : "bg-white text-gray-500 hover:bg-sky-100"
            )}
          >
            <LinkIcon
              className={clsx(
                "w-8 h-8 stroke-2 transition-colors",
                isActive
                  ? "text-white"
                  : "text-gray-500 group-hover:text-blue-600"
              )}
            />
            <p
              className={clsx(
                "hidden md:block text-lg pl-4 transition-colors",
                isActive
                  ? "text-white"
                  : "text-gray-500 group-hover:text-blue-600"
              )}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}

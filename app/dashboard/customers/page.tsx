import React from "react";
import Link from "next/link";

const navigationItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Invoices", href: "/dashboard/invoices" },
  { label: "Customers", href: "/dashboard/customers" },
  { label: "Activity", href: "/dashboard/activity" },
];

interface NavigationProps {
  items: { label: string; href: string }[];
}

const Navigation = ({ items }: NavigationProps) => (
  <nav aria-label="Main Navigation">
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="bg-transparent  hover:text-sky-500 hover:underline"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Customers Page</h1>
      <Navigation items={navigationItems} />
    </main>
  );
}

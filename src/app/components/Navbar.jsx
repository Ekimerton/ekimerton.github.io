"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Game", href: "/my-garden" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar({ }) {
  const pathname = usePathname();

  return (
    <nav className="bg-stone-100 dark:bg-stone-950 top-0 w-full z-10">
      <div className="mx-auto py-3 px-4 flex justify-center max-sm:justify-center items-center text-stone-700 dark:text-stone-300">
        <div className="flex-1">
        </div>
        <div className="flex items-center justify-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={`relative ${isActive
                  ? "text-black dark:text-white hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white"
                  : "hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-stone-700 dark:hover:text-stone-300"
                  }`}
              >
                <Link href={item.href} className="font-semibold">
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 rounded-md" />
                  )}
                </Link>
              </Button>
            );
          })}
        </div>
        <div className="flex-1 flex justify-end items-end">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

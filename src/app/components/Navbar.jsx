"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Portfolio", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Recipes", href: "/recipes" },
];

export default function Navbar({ }) {
  const pathname = usePathname();

  return (
    <nav className="bg-stone-100 dark:bg-stone-950 top-0 w-full z-10">
      <div className="mx-auto max-w-5xl py-3 px-3 flex justify-center max-sm:justify-center items-center text-stone-700 dark:text-stone-300">
        <div className="flex-1 flex">
          <p className="mx-4 max-sm:mx-2 font-caveat text-2xl">Ekim</p>
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
                className={`relative max-sm:px-2 max-sm:h-8 max-sm:text-xs ${isActive
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

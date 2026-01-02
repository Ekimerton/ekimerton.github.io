"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "The Wall", href: "/the-wall" },
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
                className="relative hover:bg-transparent hover:text-current dark:hover:bg-transparent dark:hover:text-current"
              >
                <Link href={item.href} className="font-semibold">
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layout
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-stone-200 dark:bg-stone-800 rounded-md"
                      transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                      }}
                    />
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

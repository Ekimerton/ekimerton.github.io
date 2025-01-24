import { Button } from "./ui/button";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";

export default function Navbar({}) {
  return (
    <nav className="bg-stone-100 dark:bg-stone-950 top-0 w-full z-10">
      <div className="max-w-2xl mx-auto py-2 px-4 flex justify-center max-sm:justify-center items-center text-stone-700 dark:text-stone-300">
        <div className="flex-1">
          <Button
            variant="link"
            asChild
            className="-ml-4 font-semibold text-yellow-500 dark:text-yellow-400"
          >
            <Link href={"https://www.10xportfolio.com/"} target="_blank">
              Buy this <span className="max-sm:hidden"> &nbsp;portfolio</span>
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Button variant="ghost" asChild>
            <Link href={"/"} className="font-semibold">
              Home
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={"/blog"} className="font-semibold">
              Blog
            </Link>
          </Button>
        </div>
        <div className="flex-1 flex justify-end items-end">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

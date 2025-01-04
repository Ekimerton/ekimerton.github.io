import { Button } from "./ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Navbar({}) {
  return (
    <nav className="bg-neutral-100 dark:bg-neutral-950 top-0 w-full z-10">
      <div className="max-w-3xl mx-auto pt-4 px-5 flex justify-center max-sm:justify-center items-center text-neutral-700 dark:text-neutral-300">
        {/* Adjust the margins for visual centering */}
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
          <Button variant="link" asChild>
            <Link href={"/"} className="font-semibold">
              Home
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={"/blog"} className="font-semibold">
              Blog
            </Link>
          </Button>
        </div>
        {/* Adjust the margins for visual centering */}
        <div className="flex-1 flex justify-end items-end">
          <Button variant="link" asChild size="icon" className="-mr-2">
            <Link href={"https://github.com/Ekimerton/"} target="_blank">
              <Github className="w-6 h-6 fill-neutral-950 dark:fill-neutral-50" />
            </Link>
          </Button>
          {/*
            <Button variant="link" asChild size="icon">
            <Link href={"https://x.com/Ekimerton"} target="_blank">
              <Twitter className="w-6 h-6 fill-neutral-950 dark:fill-neutral-50" />
            </Link>
          </Button>
          */}
        </div>
      </div>
    </nav>
  );
}

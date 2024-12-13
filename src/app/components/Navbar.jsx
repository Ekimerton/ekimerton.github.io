import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Navbar({}) {
  return (
    <nav className="bg-slate-100 dark:bg-slate-950 top-0 w-full z-10">
      <div className="max-w-4xl mx-auto pt-3 px-5 flex justify-center max-sm:justify-center items-center text-slate-700 dark:text-slate-300">
        {/* Adjust the margins for visual centering */}
        <div className="flex-1">
          <Button variant="link" asChild className="-ml-4">
            <Link
              href={"https://www.10xportfolio.com/"}
              target="_blank"
              className="font-semibold text-yellow-500 dark:text-yellow-400"
            >
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
              <Github className="w-6 h-6 fill-slate-950 dark:fill-slate-50" />
            </Link>
          </Button>
          {/*
            <Button variant="link" asChild size="icon">
            <Link href={"https://x.com/Ekimerton"} target="_blank">
              <Twitter className="w-6 h-6 fill-slate-950 dark:fill-slate-50" />
            </Link>
          </Button>
          */}
        </div>
      </div>
    </nav>
  );
}

import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar({}) {
  return (
    <nav className="bg-stone-100 dark:bg-stone-950 top-0 w-full z-10">
      <div className="max-w-4xl mx-auto pt-4 px-5 flex justify-center max-sm:justify-center items-center text-stone-700 dark:text-stone-300">
        <div className="flex-1"></div>
        <div className="flex items-center justify-center gap-2">
          <Button variant="link" asChild>
            <Link href={"/"}>Home</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={"/blog"}>Blog</Link>
          </Button>
        </div>
        <div className="flex-1 flex justify-end items-end">
          {/*
          <Button variant="link" asChild>
            <Link href={"/blog"}>Github</Link>
          </Button>
          */}
        </div>
      </div>
    </nav>
  );
}

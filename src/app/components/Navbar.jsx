import { Button } from "./ui/button";
import { DownloadCloud } from "lucide-react";
import Link from "next/link";
import { Homemade_Apple, Quantico } from "next/font/google";

const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: ["400"] });
const quantico = Quantico({ subsets: ["latin"], weight: ["400"] });

export default function Navbar({}) {
  return (
    <nav className="bg-stone-200 dark:bg-stone-900 top-0 w-full z-10">
      <div className="max-w-4xl mx-auto py-3 px-6 flex justify-center max-sm:justify-center items-center text-stone-600 dark:text-stone-400">
        <div
          id="navbar-left"
          className="flex items-center justify-center gap-2"
        >
          <Link href={"/"}>
            <p
              className={`text-3xl text-stone-700 dark:text-stone-300 py-2 leading-none ${quantico.className}`}
            >
              /ekimerton/home/
            </p>
          </Link>
          {/*
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Blog</Button>
          */}
        </div>
        <div
          id="navbar-right"
          className="flex items-center justify-center max-sm:hidden"
        >
          {/*
          <div className="flex items-center justify-center gap-2">
            <div className="bg-green-400 h-2 w-2 rounded-full glow"></div>
            <p className="text-sm">Available for work</p>
          </div>
        */}
        </div>
      </div>
    </nav>
  );
}

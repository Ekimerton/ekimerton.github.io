"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PageHeader() {
  const pathname = usePathname();

  const isRecipePost = pathname?.startsWith("/recipes/") && pathname !== "/recipes" && pathname !== "/recipes/";
  const isBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog" && pathname !== "/blog/";

  return (
    <div className="w-full flex justify-center">
      <div className="h-8 flex items-center px-4 w-full max-w-3xl">
        {isRecipePost && (
          <Link
            href="/recipes"
            className="text-sm no-underline text-stone-700 dark:text-stone-400 flex items-center font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to recipes
          </Link>
        )}
        {isBlogPost && (
          <Link
            href="/blog"
            className="text-sm no-underline text-stone-700 dark:text-stone-400 flex items-center font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to blog
          </Link>
        )}
      </div>
    </div>
  );
}

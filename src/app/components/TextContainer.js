import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function TextContainer({ children, className }) {
  return (
    <article
      className={twMerge(
        clsx(
          `prose prose-rose dark:prose-invert max-w-3xl w-full p-5 antialiased pt-0
           prose-h1:font-medium prose-h1:text-2xl
           prose-h2:font-medium prose-h2:text-xl
           prose-h3:font-medium prose-h3:text-base
           prose-p:my-5
           prose-code:py-1 prose-code:px-2`,
          className
        )
      )}
    >
      {children}
    </article>
  );
}

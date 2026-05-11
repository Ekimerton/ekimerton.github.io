import { Button } from "../components/ui/button";
import EmailCopyButton from "../components/EmailCopyButton";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function AboutSection() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>
        Hello! My name is Ekim. I write code on the internet and post it, occasionally :)
      </p>
      <p>
        I currently work at{" "}
        <span className="font-semibold">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>{" "}
        and make projects in my spare time. Below are some that I'm proud of. You can reach me via{" "}
        <EmailCopyButton /> or{" "}
        <Button
          className="py-0.5 px-2 h-min !bg-[#4285F4]/20 hover:!bg-[#4285F4]/40 !text-[#4285F4] font-semibold transition-all duration-200 no-underline border-none shadow-none"
          asChild
        >
          <a href="https://www.linkedin.com/in/ekim-karabey/" target="_blank">
            LinkedIn
          </a>
        </Button>{" "}
        or check out my{" "}
        <Button
          className="py-0.5 px-2 h-min !bg-[#34A853]/20 hover:!bg-[#34A853]/40 !text-[#34A853] font-semibold transition-all duration-200 no-underline border-none shadow-none"
          asChild
        >
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
        </Button>{" "}
      </p>
      <p>
        <Link href={`https://hexcodle.com`} className="no-underline font-normal text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200">
          <span className="mr-4 font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1 inline-flex">
            Hexcodle
            <ExternalLink className="w-[14px] h-[14px] mx-1" strokeWidth={2.5} />
          </span> Daily wordle-like hexcode guessing game. <i>~100k players last year</i>
        </Link>
      </p>
    </div>
  );
}

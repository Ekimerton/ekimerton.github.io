import { Button } from "../components/ui/button";
import EmailCopyButton from "../components/EmailCopyButton";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div>
      <h3>About Me</h3>
      <p>
        Hello! My name is Ekim. I write code on the internet&nbsp;
        <span className="text-xl font-black -mx-1">☺</span>
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
        and make projects in my spare time. You can reach me via{" "}
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
    </div>
  );
}

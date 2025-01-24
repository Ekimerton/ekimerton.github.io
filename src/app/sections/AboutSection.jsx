import { Button } from "../components/ui/button";
import EmailCopyButton from "../components/EmailCopyButton";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div>
      <h3>About Me</h3>
      <p>
        Hello! My name is Ekim. I write code on the internet{" "}
        <span className="text-xl font-black mx-0">☺</span>
      </p>
      <p>
        This site features anything I&apos;m proud enough to showcase. You can
        contact me via <EmailCopyButton /> or{" "}
        <Button
          className="py-0.5 px-2 h-min bg-sky-200 hover:bg-sky-300 text-sky-800 dark:bg-sky-800 dark:hover:bg-sky-700 dark:text-sky-200 no-underline"
          asChild
        >
          <a href="https://www.linkedin.com/in/ekim-karabey/" target="_blank">
            LinkedIn
          </a>
        </Button>{" "}
        and check out my{" "}
        <Button
          className="py-0.5 px-2 h-min bg-stone-200 hover:bg-stone-300 text-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200 no-underline"
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

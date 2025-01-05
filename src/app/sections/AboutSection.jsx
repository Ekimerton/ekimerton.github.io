import { Button } from "../components/ui/button";
import EmailCopyButton from "../components/EmailCopyButton";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <h3>Hello! My name is Ekim. I write code on the internet 🌐</h3>
      <p>
        This site features anything I&apos;m proud enough to showcase. I hope
        you like it!
        <span className="text-xl font-black mx-0.5">☺</span>
        You can contact me via <EmailCopyButton /> or{" "}
        <Button
          className="py-1 px-2 mt-2 h-min bg-sky-200 hover:bg-sky-300 text-sky-800 dark:bg-sky-800 dark:hover:bg-sky-700 dark:text-sky-200 no-underline"
          asChild
        >
          <a href="https://www.linkedin.com/in/ekim-karabey/" target="_blank">
            LinkedIn
          </a>
        </Button>{" "}
        and check out my{" "}
        <Button
          className="py-1 px-2 mt-2 h-min bg-neutral-200 hover:bg-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 no-underline"
          asChild
        >
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
        </Button>{" "}
      </p>
    </>
  );
}

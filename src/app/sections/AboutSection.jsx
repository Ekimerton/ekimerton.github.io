import { Button } from "../components/ui/button";
import EmailCopyButton from "../components/EmailCopyButton";

export default function AboutSection() {
  return (
    <>
      <h3>Hello! My name is Ekim. I write code on the internet 🌐</h3>
      <p>
        This site features anything I&apos;m proud enough to showcase. I hope
        you like it!
        <span className="text-xl font-black mx-0.5">☺</span>
        You can contact me via <EmailCopyButton /> or{" "}
        <a href="https://www.linkedin.com/in/ekim-karabey/" target="_blank">
          <Button className="py-1 px-2 mt-2 h-min bg-sky-200 hover:bg-sky-300 text-sky-800 dark:bg-sky-800 dark:hover:bg-sky-700 dark:text-sky-200">
            LinkedIn
          </Button>
        </a>{" "}
        and check out my{" "}
        <a href="/resume.pdf" target="_blank">
          <Button className="py-1 px-2 mt-2 h-min bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200">
            Resume
          </Button>{" "}
        </a>
      </p>
    </>
  );
}

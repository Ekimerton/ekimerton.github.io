import { Button } from "../components/ui/button";
import EmailCopyButton from "../components/EmailCopyButton";

export default function AboutSection() {
  return (
    <>
      <p>Hello! 👋</p>
      <p>
        My name is Ekim. I write code on the internet. This site showcases
        anything I&apos;m proud enough to showcase. Hope you like it!
        <span className="text-xl font-black ml-0.5">☺</span>
      </p>
      <p>
        You can contact me via <EmailCopyButton />
        or{" "}
        <a href="https://www.linkedin.com/in/ekim-karabey/">
          <Button className="py-1 px-2 mt-2 h-min bg-sky-100 hover:bg-sky-200 text-sky-900">
            LinkedIn
          </Button>
        </a>{" "}
        and check out my{" "}
        <a href="/resume.pdf">
          <Button className="py-1 px-2 mt-2 h-min bg-slate-200 hover:bg-slate-300 text-slate-900">
            Resume
          </Button>{" "}
        </a>
      </p>
    </>
  );
}

import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectEntry({
  size = "small",
  imageSrc = "/images/project.png",
  title = "Cool Project!",
  content = "",
  url,
}) {
  if (size === "large") {
    return (
      <div className="row-span-2 col-span-2 rounded-xl border-2 border-neutral-700/10 bg-neutral-50 dark:bg-neutral-900 bg-cover bg-black/30 p-4 pb-0">
        <div className="relative w-full h-full flex flex-col justify-start items-center m-0 overflow-hidden text-center">
          <h3 className="text-3xl mt-4 mb-2">{title}</h3>
          <p className="w-11/12 text-balance">{content}</p>
          <Image
            alt="project-1"
            src={imageSrc}
            width={500}
            className="w-11/12 m-0 rounded-md object-cover"
            height={500}
          />

          {url && (
            <Button asChild className="bottom-4 right-0 absolute no-underline">
              <a href={url}>
                See Project
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`row-span-1 col-span-2 rounded-xl border-2 border-neutral-700/10 bg-neutral-50 dark:bg-neutral-900 bg-cover bg-black/30 p-4`}
    >
      <div className="relative w-full h-full flex m-0 overflow-hidden gap-4">
        <Image
          alt="project-1"
          src={imageSrc}
          width={100}
          className="h-full w-min m-0 object-scale-down rounded-md"
          height={100}
        />
        <div className="flex flex-col">
          <h3 className="m-0">{title}</h3>
          <p className="m-0 mb-auto">{content}</p>
          {url && (
            <Button asChild className="no-underline w-32" size="sm">
              <a href={url}>
                See Project
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

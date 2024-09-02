import { Button } from "@/app/components/ui/button";
import { Mail, DownloadCloud, ChevronsDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({}) {
  return (
    <div className="bg-stone-200 dark:bg-stone-900 w-full">
      <div
        className="max-w-4xl mx-auto py-12 px-6 max-sm:hidden visible"
        id="profile-section"
      >
        <div className="flex justify-between gap-4">
          <div className="flex flex-col justify-between">
            <div className="-mt-1 flex flex-col gap-2">
              <p className="dark:text-stone-50 text-stone-950 text-3xl">
                Ekim Karabey
              </p>
              <p className="text-stone-600 dark:text-stone-400">
                Software Engineer and Indie Hacker 🇨🇦
              </p>
            </div>
            <div className="max-sm:hidden">
              <Button asChild variant="secondary" size="lg">
                <Link href="mailto:ekim0252@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </Link>
              </Button>
              <Button asChild size="lg" className="ml-2" variant="secondary">
                <Link href="/resume.pdf">
                  <DownloadCloud className="h-4 w-4 mr-2" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
          <Image
            id="headshot"
            className="w-36 h-36 max-sm:h-28 max-sm:w-28 rounded-md border-stone-700/10 border-2"
            src={"/images/pfp.png"}
            width={150}
            height={150}
            alt="Headshot"
          />
        </div>
      </div>
      {/* Mobile Version */}
      <div
        className="max-w-4xl mx-auto py-6 px-6 sm:hidden visible flex flex-col items-center gap-6 text-center"
        id="profile-section"
      >
        <Image
          id="headshot"
          className="w-36 h-36 max-sm:h-28 max-sm:w-28 rounded-md border-stone-700/10 border-2"
          src={"/images/pfp.png"}
          width={150}
          height={150}
          alt="Headshot"
        />
        <div className="flex justify-between gap-4">
          <div className="flex flex-col justify-between">
            <div className="-mt-1 flex flex-col gap-2">
              <p className="dark:text-stone-50 text-stone-950 text-3xl">
                Ekim Karabey
              </p>
              <p className="text-stone-600 dark:text-stone-400">
                Software Engineer and Indie Hacker 🇨🇦
              </p>
            </div>
          </div>
        </div>
        <div className="sm:hidden w-full flex gap-2">
          <Button size="lg" variant="secondary" className="flex-1" asChild>
            <Link href="mailto:ekim0252@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Get in touch
            </Link>
          </Button>
          <Button className="flex-1" size="lg" variant="secondary" asChild>
            <Link href="/resume.pdf">
              <DownloadCloud className="h-4 w-4 mr-2" />
              Resume
            </Link>
          </Button>
        </div>
        <ChevronsDown className="h-4 w-4 mr-2 text-stone-400" />
      </div>
    </div>
  );
}

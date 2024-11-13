import { Button } from "@/app/components/ui/button";
import { Mail, DownloadCloud, ChevronsDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline/next";

export default function Hero({}) {
  return (
    <div className="bg-stone-200 dark:bg-stone-900 w-full">
      <div
        className="max-w-4xl mx-auto h-[80vh] max-sm:h-[600px]"
        id="profile-section"
      >
        <Spline scene="https://prod.spline.design/NsTX9b6WEMH6XkF1/scene.splinecode" />
      </div>
    </div>
  );
}

"use client";

import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function EmailCopyButton({ }) {
  return (
    <Popover>
      <Button
        className="py-0.5 px-2 h-min !bg-[#EA4335]/20 hover:!bg-[#EA4335]/40 !text-[#EA4335] font-semibold transition-all duration-200 border-none shadow-none"
        asChild
        onClick={() => {
          navigator.clipboard.writeText("ekim0252@gmail.com");
        }}
      >
        <PopoverTrigger>Email</PopoverTrigger>
      </Button>
      <PopoverContent className="text-xs p-2 w-auto">
        Copied &quot;ekim0252@gmail.com&quot; to clipboard!
      </PopoverContent>
    </Popover>
  );
}

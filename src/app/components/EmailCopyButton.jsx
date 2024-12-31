"use client";

import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function EmailCopyButton({}) {
  return (
    <Popover>
      <Button
        className="py-1 px-2 mt-2 h-min bg-lime-100 hover:bg-lime-200 text-lime-900"
        variant="secondary"
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

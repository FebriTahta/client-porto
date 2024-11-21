"use client"
import * as React from "react"
// import {
//   Calculator,
//   Calendar,
//   CreditCard,
//   Settings,
//   Smile,
//   User,
// } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  // CommandShortcut,
} from "@/components/ui/command"

export function Command({tags}:{tags:Array<{name: string}>}) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
        console.log("Toggle dialog:", !open); // Debug log
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open])

  const handleClick = () => {
    setOpen((open) => !open)
  }

  return (
    <>
      <a
        className="text-sm text-muted-foreground"
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        Press / Click {" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘ Ctrl + </span>J
        </kbd>
      </a>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
          {
            Array.from(new Set(tags.map((tag) => tag.name))).map((uniqueName, index) => (
              <CommandItem key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 8.25v11.25a2.25 2.25 0 002.25 2.25h8.25a2.25 2.25 0 002.25-2.25V8.25m-12.75 0h13.5M6.75 8.25A2.25 2.25 0 014.5 6m13.5 0A2.25 2.25 0 0118 8.25m0-2.25H6a2.25 2.25 0 00-2.25 2.25m0 0h15m0 0V18m-15 0V8.25"
                  />
                </svg>
                <span>{uniqueName}</span>
              </CommandItem>
            ))
          }

          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}

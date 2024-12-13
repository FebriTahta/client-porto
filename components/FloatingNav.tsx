"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as React from "react";
import { MessageCircle, List, Bookmark, Share2, User } from "lucide-react";
import SheetFormProfile from "./SheetFormProfile";
interface NavItem {
  icon: React.ReactNode;
  label: string;
  badge?: string;
}

export default function FloatingNav() {
  const [active, setActive] = React.useState(0);
  const [sheetHeight, setSheetHeight] = React.useState(0);

  const navItems: NavItem[] = [
    { icon: <User className="h-5 w-5" />, label: "Like" },
    { icon: <MessageCircle className="h-5 w-5" />, label: "Comment" },
    { icon: <List className="h-5 w-5" />, label: "Menu" },
    { icon: <Bookmark className="h-5 w-5" />, label: "Save" },
    { icon: <Share2 className="h-5 w-5" />, label: "Share" },
  ];

  // Handle membuka sheet
  const handleOpenSheet = () => {
    setSheetHeight(400); // Tentukan tinggi sheet saat terbuka (misalnya 300px)
    console.log("sheet up");
  };

  // Handle menutup sheet
  const handleCloseSheet = () => {
    setSheetHeight(0); // Menutup sheet
    console.log("back to bottom");
  };

  return (
    <div
      className={`fixed inset-x-1 z-50 mx-auto w-full max-w-sm px-4 mb-5 floating-nav transition-all duration-300 ease-in-out`}
      style={{ bottom: sheetHeight }}
    >
      <nav className="flex items-center justify-between rounded-full bg-white text-slate-800 p-2 shadow-lg dark:bg-slate-900 dark:text-slate-50">
        {navItems.map((item, index) => (
          <Sheet key={item.label}
            onOpenChange={(isOpen) => {
              if (!isOpen) {
                console.log("Sheet closing triggered by Radix...");
                handleCloseSheet();
              }
            }}
          >
            <SheetTrigger asChild>
              <Button
                key={item.label}
                variant="ghost"
                size="icon"
                className={cn(
                  "relative h-12 w-12 rounded-full",
                  active === index && "bg-muted"
                )}
                onClick={() => {
                  setActive(index);
                  handleOpenSheet();
                }}
              >
                {item.badge && (
                  <Badge
                    variant="secondary"
                    className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
                    text={item.badge}
                  />
                )}
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetFormProfile />
            </SheetContent>
          </Sheet>
        ))}
      </nav>
    </div>
  );
}

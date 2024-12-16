"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { User, MessageCircle, Menu, Bookmark, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useWindowSize from "@/hooks/use-window-size";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import SheetFormTech from "./SheetFormTech";
import SheetFormProfile from "./sheet/SheetFormProfile";

export default function FloatingNav2() {
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  // State for Sheet visibility
  const [isProfileSheetOpen, setIsProfileSheetOpen] = useState(false);
  const [isTechSheetOpen, setIsTechSheetOpen] = useState(false);
  // Calculate background opacity based on drag position
  const opacity = useTransform(dragX, [-100, 0, 100], [0.5, 1, 0.5]);

  // Handle drag end to snap back to a specific position
  const handleDragEnd = () => {
    const x = dragX.get();
    const y = dragY.get();

    const thresholdX = windowWidth / 2;
    const thresholdY = -windowHeight / 4; // Hanya mengizinkan geser ke atas

    const shouldSnapLeft = x < -thresholdX / 4;
    const shouldSnapRight = x > thresholdX / 4;
    const shouldSnapUp = y < thresholdY;

    // Handle horizontal snapping
    if (shouldSnapLeft) {
      animate(dragX, -windowWidth + 105);
    } else if (shouldSnapRight) {
      animate(dragX, 0);
    } else {
      animate(dragX, 0); // Default to right position
    }

    // Handle vertical snapping
    if (shouldSnapUp) {
      animate(dragY, -windowHeight / 2 + 80); // Snap to top
    } else {
      animate(dragY, 0); // Default to center (no downward movement allowed)
    }
  };

  // Render null if window size is not yet determined
  if (!windowWidth || !windowHeight) return null;

  return (
    <motion.div
      drag
      dragConstraints={{
        left: -windowWidth + 105,
        right: 0,
        top: -windowHeight / 2 + 50, // Batas atas
        bottom: 0, // Tidak bisa digeser ke bawah
      }}
      dragElastic={0.1}
      style={{
        x: dragX,
        y: dragY,
        opacity,
      }}
      onDragEnd={handleDragEnd}
      className={cn(
        "fixed top-1/2 -translate-y-1/2 right-4 z-50",
        "flex flex-col items-center gap-3 p-3",
        "bg-background shadow-lg",
        "touch-none select-none",
        "dark:bg-slate-900"
      )}
    >
        <Sheet open={isProfileSheetOpen} onOpenChange={setIsProfileSheetOpen}>
          <SheetTrigger>
            <MenuButton aria-label="Open Profile Form">
              <User className="h-5 w-5" />
            </MenuButton>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetFormProfile closeSheet={() => setIsProfileSheetOpen(false)} />
          </SheetContent>
        </Sheet>

      <Sheet open={isTechSheetOpen} onOpenChange={setIsTechSheetOpen}>
        <SheetTrigger>
          <MenuButton aria-label="Open Techs Form">
            <MessageCircle className="h-5 w-5" />
          </MenuButton>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetFormTech closeSheet={() => setIsTechSheetOpen(false)} />
        </SheetContent>
      </Sheet>
      
      <MenuButton aria-label="Menu Options">
        <Menu className="h-5 w-5" />
      </MenuButton>
      <MenuButton aria-label="Bookmarks">
        <Bookmark className="h-5 w-5" />
      </MenuButton>
      <MenuButton aria-label="Share">
        <Share2 className="h-5 w-5" />
      </MenuButton>
    </motion.div>
  );
}

function MenuButton({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-full p-3",
        "transition-colors duration-200",
        "hover:bg-muted active:bg-muted/80"
      )}
    >
      {children}
    </div>
  );
}


import { cn } from "@/lib/utils";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export function Badge({ icon, text, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-sm", className)}>
      {icon}
      <span className="ml-1">{text}</span>
    </span>
  );
} 
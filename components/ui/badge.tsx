import { cn } from "@/lib/utils";

interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
  variant?: "primary" | "secondary" | "tertiary";  // Tambahkan variant prop
  className?: string;
}

export function Badge({ icon, text, variant = "primary", className }: BadgeProps) {
  const badgeStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-300 text-gray-800",
    tertiary: "bg-green-500 text-white", // Contoh style tambahan
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm",
        badgeStyles[variant],  // Gunakan style berdasarkan variant
        className
      )}
    >
      {icon}
      <span className="ml-1">{text}</span>
    </span>
  );
}

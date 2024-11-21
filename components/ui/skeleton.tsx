import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-6 bg-gray-200 rounded-lg border border-gray-300 shadow-md dark:bg-gray-700 dark:border-gray-600 animate-pulse", className)}
      {...props}
    />
  )
}

export { Skeleton }

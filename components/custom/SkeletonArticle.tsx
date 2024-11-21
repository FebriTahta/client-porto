import { cn } from "@/lib/utils"


interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: "circle" | "rectangle";
  size?: string; // Custom size in Tailwind classes (e.g., "w-10 h-10")
  className: string;
}

function SkeletonArticle({ className, ...props }: SkeletonProps) {
    return (
      <article
        className={cn(
         "h-auto p-6 bg-gray-200 rounded-lg border border-gray-300 shadow-md dark:bg-gray-700 dark:border-gray-600 animate-pulse",
          className
        )}
        {...props}
      >
        <div className="flex justify-between items-center mb-5 text-gray-400">
          <span className="bg-gray-300 text-gray-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-600">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <div className="w-12 h-3 bg-gray-400 rounded"></div>
          </span>
          <div className="w-20 h-3 bg-gray-400 rounded"></div>
        </div>
        <div className="mb-2 w-full h-6 bg-gray-400 rounded"></div>
        <div className="mb-5 w-full h-4 bg-gray-400 rounded"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
            <div className="w-24 h-3 bg-gray-400 rounded"></div>
          </div>
          <div className="w-20 h-3 bg-gray-400 rounded"></div>
        </div>
      </article>
    );
  }
  

export { SkeletonArticle };

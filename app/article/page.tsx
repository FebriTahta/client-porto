import ArticleList from "@/components/ArticleList";

const Page = () => {

  return (
    <>
    <div className="flex py-12 xl:py-24 xl:h-[95vh] xl:pt-[140px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-mono)]">
      <div className="container mx-auto w-full">
        <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <span>Home</span>
          <span>|</span>
          <span>Article</span>
        </div>

        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold uppercase mb-4">Article</h1>
            <p className="text-sm text-muted-foreground max-w-[350px]">
              Group of information based on your interests
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start font-[family-name:var(--font-geist-mono)]">
            <ArticleList />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;

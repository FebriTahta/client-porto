import { Metadata } from "next";
import { Article } from "../api/getArticles";
import Link from "next/link";

interface ArticlePageProps {
  article: Article | null; // berdasarkan struktur interface Article
  error: string | null;
  params: { slug: string };
}

// Optional: Metadata untuk SEO
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Article: ${slug}`,
    description: `Read the full article about ${slug}`,
  };
}

// Fungsi untuk mengambil data artikel
async function fetchArticle(slug: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL_DEV + "/article/" + slug,
    {
      cache: "no-cache", // Tidak menggunakan cache agar selalu mendapatkan data terbaru dari server
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch article data");
  }

  const result = await response.json();
  return result.data;
}

const Page = async ({ params }: ArticlePageProps) => {
  const { slug } = params;

  try {
    const article = await fetchArticle(slug);

    return (
      <section className="flex py-12 xl:py-24 xl:h-[95vh] xl:pt-[150px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-mono)]">
        <div className="container mx-auto">
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
            <Link href="/article">
              <span>Article</span>
            </Link>
            <span>|</span>
            <span>{article.title}</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="text-lg">{article.body}</div>
        </div>
      </section>
    );
  } catch (error) {
    return (
      <section className="flex py-12 xl:py-24 xl:h-[95vh] xl:pt-[150px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-mono)]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <span>Home</span>
            <span>|</span>
            <span>Article</span>
            <span>|</span>
            <span>{String(error)}</span>
          </div>
        </div>
      </section>
    );
  }
};

export default Page;

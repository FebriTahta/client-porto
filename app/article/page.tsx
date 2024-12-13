'use client'
import CardArticle from "@/components/custom/CardArticle";
import { useState, useEffect } from "react";
import { getArticles, Article, ArticlesResponse } from "@/app/article/api/getArticles";
import { PaginationData } from "@/components/custom/Paginations";
import { Badge } from "@/components/Badge";

const Page = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationData>({
    currentPage: 1,
    nextPage: null,
    previousPage: null,
    totalPages: 0,
  });

  // State untuk halaman aktif
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        // menambahkan props currentPage untuk menampilkan data berdasarkan pagination
        const articleData: ArticlesResponse = await getArticles(currentPage);
        
        if (Array.isArray(articleData.data)) {
          
          setArticles(articleData.data);

          setUniqueTags(
            Array.from(
              new Set(
                articleData.data.flatMap(article => article.tags.map(tag => tag.name))
              )
            )
          );

          setPagination({
            currentPage: articleData.currentPage,
            nextPage: articleData.nextPage,
            previousPage: articleData.previousPage,
            totalPages: articleData.totalPages,
          });
          
        } else {
          throw new Error("Data yang diterima bukan array");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log("Terjadi kesalahan saat mengambil data:", err.message);
          setErrorMessage("Kesalahan tidak diketahui: " + err.message);
        } else {
          console.log("Kesalahan tidak diketahui:", err);
          setErrorMessage("Kesalahan tidak diketahui: " + err);
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // Pemicu fetching data saat halaman aktif berubah

  // Fungsi untuk mengubah halaman
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
            <p className="text-sm text-muted-foreground max-w-[280px] mb-2">
              Group of information based on your interests
            </p>
            {
              uniqueTags.map((tagName, index)=>(
                <Badge key={index}  text={tagName} className="my-[0.2vh] bg-primary-100 text-white text-xs font-medium inline-flex items-center px-3 py-[1px] rounded bg-gray-700 break-words whitespace-normal"/>
              ))
            }
          </div>
          <div className="flex-1 flex flex-col items-start font-[family-name:var(--font-geist-mono)]">
            <CardArticle 
              articles={articles}
              loading={loading}
              error={error}
              errorMessage={errorMessage}
              pagination={pagination}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;

"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { getArticles, Article, ArticlesResponse } from "@/app/article/api/getArticles";
import { SkeletonArticle } from "@/components/custom/SkeletonArticle";
import { formatRelativeDateTime } from "@/lib/formatRelativeDateTime";
import { Badge } from "../Badge";
import { ReadMore } from "../ReadMore";
import Link from "next/link";
import Paginations from "./Paginations";
import { PaginationData } from "./Paginations";

const truncateBody = (body: string | undefined, maxLength: number): string => {
  if (!body) return "";
  if (body.length <= maxLength) return body;
  const truncated = body.slice(0, maxLength);
  return truncated.slice(0, Math.max(truncated.lastIndexOf(" "), 0));
};

const CardArticle = () => {
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

  useEffect(() => {

    const fetchData = async () => {
      try {
        const articleData: ArticlesResponse = await getArticles(currentPage);
        
        if (Array.isArray(articleData.data)) {
          
          setArticles(articleData.data);

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
    <div className="w-full max-w-full">
      
      <Paginations
        currentPage={pagination?.currentPage}
        nextPage={pagination?.nextPage}
        previousPage={pagination?.previousPage}
        totalPages={pagination?.totalPages}
        onPageChange={handlePageChange} // Kirim handler perubahan halaman
      />

      <div className="bg-transparent overflow-y-auto max-h-[55vh] lg:max-h-[65vh] scrollbar-hide">
        <div className="lg:py-4">
          <div className="grid gap-8 lg:grid-cols-1">
            {loading || error ? (
              <>
                <SkeletonArticle/>
              </>
            ) : (
            articles.map((article, index) => (
              <article
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  {/* Tags */}
                  <div className="space-x-2 gap-1 lg:gap-4 xl:gap-4 md:gap-auto lg:falex flex-row xl:flex-row md:flex-row">{article.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      icon={<svg
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
                      </svg>} 
                      text={tag.name}
                      className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 break-words whitespace-normal"
                    />
                  ))}
                    
                  </div>

                  {/* DateTime */}
                  <span className="text-sm">{formatRelativeDateTime(article.createdAt)}</span>
                </div>

                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  
                  <Link href={'/article/'+article.slug}>{article.title}</Link>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {truncateBody(article.body, 150)}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Image
                      className="w-7 h-7 rounded-full"
                      src="/me.jpeg"
                      alt="Jese Leos avatar"
                      width={20}
                      height={20}
                    />
                    <span className="font-medium dark:text-white">Tahta</span>
                  </div>
                <ReadMore slug={article.slug} />
                </div>
              </article>
              ))
            )}
            {error && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;

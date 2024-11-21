"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { getArticles, Article, ArticlesResponse } from "@/app/article/api/getArticles";
import { SkeletonArticle } from "@/components/custom/SkeletonArticle";
import { formatRelativeDateTime } from "@/lib/formatRelativeDateTime";
import { Badge } from "../Badge";
import { ReadMore } from "../ReadMore";
import Link from "next/link";

const truncateBody = (body: string, maxLength: number) => {
  if (body.length <= maxLength) return body;
  const truncated = body.slice(0, maxLength);
  return truncated.slice(0, Math.max(truncated.lastIndexOf(" "), 0));
};

const CardArticle = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const articleData: ArticlesResponse = await getArticles();
        console.log(articleData);
        
        if (Array.isArray(articleData.data)) {
          setArticles(articleData.data);
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
  }, []);

  return (
    <>
      {loading || error ? (
        <div className="text-center">
          <SkeletonArticle className="w-full lg:w-[780px] lg:h-[200px]" />
        </div>
      ) : (
        articles.map((article, index) => (
          <article
            key={index}
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-5 text-gray-500">
              {/* Tags */}
              <div className="flex space-x-5">
                {article.tags.map((tag, index) => (
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
                    className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
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
              {truncateBody(article.body, 200)}...
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
    </>
  );
};

export default CardArticle;

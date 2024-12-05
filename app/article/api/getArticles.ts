// kalau ingin parsing endpoint pakai ini
export const listArticleUrl = process.env.NEXT_PUBLIC_BASE_URL_DEV + "/articles";

export interface Tag {
  id: number;
  name: string;
}

export interface Article {
  id: number;
  title: string;
  body: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
}

export interface ArticlesResponse {
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
  totalPages: number;
  totalCount: number;
  data: Article[];
}

// list article
export const getArticles = async (): Promise<ArticlesResponse> => {
  const url = listArticleUrl;
  try {
    const response = await fetch(url, {
      cache: "no-cache", // Tidak menggunakan cache agar selalu mendapatkan data terbaru dari server
    });
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log("Gagal mengambil artikel:", error.message);
    } else {
      console.log("Tidak diketahui:", error);
    }
    throw error; // Lempar kembali error agar dapat ditangani di tempat lain
  }
};

// detail article
export async function fetchArticle(slug: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL_DEV + "/articles/" + slug,
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

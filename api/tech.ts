import { base_url } from "@/url/index";

export const fetchTech = async () => {
    const response = await fetch(`${base_url()}/techs`, {cache: "no-cache"});
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch profile data.`);
    }
    console.log(response);
    
    const res = await response.json();
    // Mengambil data yang ada pada response.data
    return res.data;  // Mengembalikan data yang ada dalam `response.data`
};

export const postTech = async (formData: FormData) => {
  const response = await fetch(`${base_url()}/techs`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Error ${response.status}: Update failed.`);
  }
  return response.json();
};
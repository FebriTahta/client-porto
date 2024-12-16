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
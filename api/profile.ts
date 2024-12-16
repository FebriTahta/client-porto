import { base_url } from "@/url/index";

export const fetchProfile = async () => {
    const response = await fetch(`${base_url()}/get-first-profile`, {cache: "no-cache"});
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch profile data.`);
    }
    const res = await response.json();
    // Mengambil data yang ada pada response.data
    return res.data;  // Mengembalikan data yang ada dalam `response.data`
};
  
export const updateProfile = async (formData: FormData) => {
    const response = await fetch(`${base_url()}/update-profile-by-id`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error ${response.status}: Update failed.`);
    }
    return response.json();
};
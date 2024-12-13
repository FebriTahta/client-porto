export const fetchProfile = async () => {
    const response = await fetch("http://localhost:2020/get-first-profile");
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch profile data.`);
    }
    return response.json();
};
  
export const updateProfile = async (formData: FormData) => {
    const response = await fetch("http://localhost:2020/update-profile-by-id", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error ${response.status}: Update failed.`);
    }
    return response.json();
};
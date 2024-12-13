import { useState } from "react";

type ProfileFormState = {
  id: string;
  fullName: string;
  nickname: string;
  description: string;
  photo: File | null;
};

const useFormProfile = () => {
  
  const [form, setForm] = useState<ProfileFormState>({
    id: "",
    fullName: "",
    nickname: "",
    description: "",
    photo: null,
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files;
      setForm((prev) => ({
        ...prev,
        [id]: files ? files[0] : null,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  return { form, setForm, error, setError, handleChange };
};

export default useFormProfile;
import { useState } from "react";
import {ProfileInterface} from "../interface/profile";

export const useFormProfile = () => {
  
  const [form, setForm] = useState<ProfileInterface>({
    id: "",
    name: "",
    nickName: "",
    desc: "",
    photo: "",
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
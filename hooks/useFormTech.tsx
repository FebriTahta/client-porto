import { useState } from "react";

const useFormTech = () => {
  const [form, setForm] = useState({
    techName: "",
    skillName: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
  
    setForm((prev) => ({
        ...prev,
        [id]: value,
    }));
  };

  const validateForm = (skills: string[]) => {
    const { techName } = form;

    if (!techName) {
      setError("Tech Name is required!");
      return false;
    }

    if (skills.length === 0 || skills.some((skill) => skill.trim() === "")) {
      setError("All skills must be filled out!");
      return false;
    }

    setError(null);
    return true;
  };


  return { form, error, handleChange, validateForm, setError };
};

export default useFormTech;

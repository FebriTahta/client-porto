import {ProfileInterface} from "@/interface/profile";

export const useFormValidation = () => {
    // validasi untuk form profile
    const validateProfileForm = (form: ProfileInterface) => {
      const { name, nickName, desc } = form;
      if (!name || !nickName || !desc) {
        return { valid: false, message: "Full name, nickname, and description are required!" };
      }
      return { valid: true, message: "" };
    };

    // validasi untuk form tech & skills
    const validateTechsForm = (form: {
      techName: string;
      skills: string[];
    }) => {
      const { techName, skills } = form;
    
      if (!techName) {
        return { valid: false, message: "Tech name is required." };
      }
    
      if (!skills || skills.length === 0 || skills.some(skill => skill.trim() === "")) {
        return {
          valid: false,
          message: "At least one valid skill is required.",
        };
      }
    
      return { valid: true, message: "" };
    };    

    return { validateProfileForm, validateTechsForm };
};
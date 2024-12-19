import useFormTech from "@/hooks/useFormTech";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useFormValidation } from "@/hooks/use-form-validation";
import TechForm from "../form/TechForm";

const SheetFormTech = ({ closeSheet }: { closeSheet: () => void }) => {
    const { form, error, handleChange, setError } = useFormTech();
    const { validateTechsForm } = useFormValidation();
    const { toast } = useToast();
    const [skills, setSkills] = useState<string[]>([""]);

    const handleSkillChange = (index: number, value: string) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setSkills(updatedSkills);
    };

    const addSkill = () => setSkills([...skills, ""]);

    const removeSkill = (index: number) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = validateTechsForm({ techName: form.techName, skills });
        if (!isValid) return;

        const payload = { techName: form.techName, skills };

        try {
            const response = await fetch("http://localhost:2020/techs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                closeSheet();
                toast({ title: "Success", description: "Tech & Skill updated successfully!" });
            } else {
                const data = await response.json();
                setError(data.message || "Failed to update Tech & Skill.");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <TechForm
            error={error}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            addSkill={addSkill}
            skills={skills} // Properti skills
            closeSheet={closeSheet}
            handleSkillChange={handleSkillChange}
            removeSkill={removeSkill}
        />
    );
};

export default SheetFormTech;



import {
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "./ui/sheet";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useFormTech from "@/hooks/useFormTech";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useFormValidation } from "@/hooks/useFormValidation";

const SheetFormTech = ({ closeSheet }: { closeSheet: () => void }) => {
    const { form, error, handleChange, setError } = useFormTech();
    const { validateTechsForm } = useFormValidation();
    const { toast } = useToast();
    const [skills, setSkills] = useState<string[]>([""]); // Array untuk skillName

    const handleSkillChange = (index: number, value: string) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setSkills(updatedSkills);
    };

    const addSkill = () => {
        setSkills([...skills, ""]);
    };

    const removeSkill = (index: number) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validasi form
        // if (!validateForm(skills)) return;

        // Panggil validasi
        const validationResult = validateTechsForm({
            techName: form.techName,
            skills,
        });

        if (!validationResult.valid) {
            toast({
            variant: "destructive",
            title: "Validation Error",
            description: validationResult.message,
            });
            return;
        }

        const payload = {
            techName: form.techName, // Langsung ambil nilai dari state
            skills, // Langsung kirim array tanpa perlu stringify
        };

        try {
            

            const response = await fetch("http://localhost:2020/techs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Menentukan bahwa data dikirim dalam format JSON
                },
                body: JSON.stringify(payload), // Ubah payload menjadi string JSON
            });

            if (response.ok) {
                closeSheet();
                const data = await response.json(); // Parse JSON body
                if (data.code == 201) {
                    console.log("Tech & Skill updated successfully!");
                    toast({
                        title: `Success: ${response.status}`,
                        description: data.message || "Tech & Skill updated successfully!",
                    });
                }else{
                    console.log("Failed!");
                    toast({
                        variant: "destructive",
                        title: `Error`,
                        description: data.message || "Tech & Skill updated failed!",
                    });
                }
                
            } else {
                const data = await response.json(); // Parse JSON error body
                toast({
                    variant: "destructive",
                    title: `Error: ${response.status}`,
                    description: data.message || "Failed to update Tech & Skill.",
                });
                setError("Failed to update Tech & Skill. Please try again.");
            }
        } catch (error) {
            // error koneksi
            console.error("An error occurred. Please try again:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "An error occurred. Please try again.",
            });
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <form className="container mx-auto" onSubmit={handleSubmit}>
            <SheetHeader>
                <SheetTitle>Update Tech & Skill</SheetTitle>
                <SheetDescription>
                    Update your Tech & Skill information here. Click save to apply changes.
                </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
                {/* Error message */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Tech Name */}
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="techName" className="text-left">
                        Tech Name
                    </Label>
                    <Input
                        id="techName"
                        value={form.techName}
                        onChange={handleChange}
                        className="col-span-3"
                    />
                </div>
                <hr />
                {/* Skill Names */}
                <div className="space-y-2">
                    <div className="flex flex-row justify-between">
                        <Label className="text-left">Skill Names</Label>
                        <Button
                            type="button"
                            onClick={addSkill}
                            className="bg-secondary text-lg text-black dark:text-white"
                        >
                            +
                        </Button>
                    </div>
                   
                    
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Input
                                value={skill}
                                onChange={(e) =>
                                    handleSkillChange(index, e.target.value)
                                }
                                className="flex-grow"
                            />
                            <Button
                                type="button"
                                onClick={() => removeSkill(index)}
                                className="bg-red-500 text-white"
                            >
                                Remove
                            </Button>
                           
                        </div>
                    ))}
                    
                </div>
            </div>
            <SheetFooter>
                <div className="flex flex-row justify-end">
                    <Button
                        className="mr-2"
                        type="button"
                        onClick={closeSheet}
                    >
                        Close
                    </Button>

                    <Button type="submit" className="md:ml-2">
                        Save Changes
                    </Button>
                    
                </div>
            </SheetFooter>
        </form>
    );
};

export default SheetFormTech;

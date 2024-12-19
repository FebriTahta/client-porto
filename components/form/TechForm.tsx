import { Label } from "@radix-ui/react-label";
import { SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
// import { TechInterface } from "@/interface/tech";

interface TechFormProps {
    error: string | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    addSkill: () => void;
    skills: string[]; // Properti skills sesuai
    closeSheet: () => void;
    handleSkillChange: (index: number, value: string) => void;
    removeSkill: (index: number) => void;
  }

  const TechForm = ({
    error,
    handleChange,
    handleSubmit,
    addSkill,
    skills,
    closeSheet,
    handleSkillChange,
    removeSkill,
  }: TechFormProps) => {
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
                onChange={(e) => handleSkillChange(index, e.target.value)}
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
          <Button className="mr-2" type="button" onClick={closeSheet}>
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

export default TechForm;

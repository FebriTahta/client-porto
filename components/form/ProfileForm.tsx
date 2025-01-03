import React from "react";
import { SheetFooter, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ProfileInterface } from "../../interface/profile";

type ProfileFormProps = {
  form: ProfileInterface;
  error: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  closeSheet: () => void;
};

const ProfileForm: React.FC<ProfileFormProps> = ({
  form,
  error,
  handleChange,
  handleSubmit,
  closeSheet,
}) => {
  return (
    <form className="container mx-auto" onSubmit={handleSubmit}>
      <SheetHeader>
        <SheetTitle>Edit Profile</SheetTitle>
        <SheetDescription>
          Update your profile information here. Click save to apply changes.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Input id="id" type="hidden" value={form.id} onChange={handleChange} />

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            value={form.name}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="nickName" className="text-right">
            Nickname
          </Label>
          <Input
            id="nickName"
            value={form.nickName}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="photo" className="text-right">
            Photo
          </Label>
          <Input
            id="photo"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="desc" className="text-right">
            Description
          </Label>
          <Textarea
            id="desc"
            value={form.desc}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
      </div>
      <SheetFooter>
        <div className="flex flex-row justify-end gap-4">
          <Button type="button" onClick={closeSheet}>
            Close
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </SheetFooter>
    </form>
  );
};

export default ProfileForm;
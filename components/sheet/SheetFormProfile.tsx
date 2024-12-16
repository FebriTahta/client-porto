import React, { useEffect } from "react";
import ProfileForm from "../form/ProfileForm";
import { useFormProfile } from "@/hooks/use-profile";
import { useFormValidation } from "@/hooks/use-form-validation";
import { fetchProfile, updateProfile } from "@/api/profile";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useProfile } from "@/context/ProfileContext"; // Import contex

const SheetFormProfile = ({ closeSheet }: { closeSheet: () => void }) => {
  const { form, setForm, error, setError, handleChange } = useFormProfile();
  const { validateProfileForm } = useFormValidation();
  const { toast } = useToast();
  const router = useRouter();
  const { setProfile } = useProfile(); // Access setProfile from context

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchProfile();
        setForm({
          id: profile.id || "",
          name: profile.name || "",
          nickName: profile.nickName || "",
          desc: profile.desc || "",
          photo: profile.photo || "",
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: error.message,
          });
          setError(error.message);
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "An unknown error occurred.",
          });
          setError("An unknown error occurred.");
        }
      }
    };

    loadProfile();
  }, [setForm, setError, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateProfileForm(form);
    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    const formData = new FormData();
    formData.append("id", form.id);
    formData.append("name", form.name);
    formData.append("nickName", form.nickName);
    formData.append("desc", form.desc);

    if (form.photo) formData.append("photo", form.photo);

    try {
      const result = await updateProfile(formData);
      toast({
        title: "Success",
        description: result.message,
      });
      // Update profile in context after successful update
      setProfile({
        id: form.id,
        name: form.name,
        nickName: form.nickName,
        desc: form.desc,
        photo: form.photo,
      });
      closeSheet();
      router.push('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
        setError(error.message);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "An unknown error occurred.",
        });
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <ProfileForm
      form={form}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      closeSheet={closeSheet}
    />
  );
};

export default SheetFormProfile;

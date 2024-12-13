import React, { useEffect } from "react";
import ProfileForm from "./ProfileForm";
import useFormProfile from "@/hooks/useFormProfile";
import { useFormValidation } from "@/hooks/useFormValidation";
import { fetchProfile, updateProfile } from "@/api/profile";
import { useToast } from "@/hooks/use-toast";

const SheetFormProfile = ({ closeSheet }: { closeSheet: () => void }) => {
  const { form, setForm, error, setError, handleChange } = useFormProfile();
  const { validateProfileForm } = useFormValidation();
  const { toast } = useToast();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchProfile();
        setForm({
          id: profile.data.id || "",
          fullName: profile.data.name || "",
          nickname: profile.data.nickName || "",
          description: profile.data.desc || "",
          photo: null,
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
    formData.append("fullName", form.fullName);
    formData.append("nickname", form.nickname);
    formData.append("description", form.description);
    if (form.photo) formData.append("photo", form.photo);

    try {
      const result = await updateProfile(formData);
      toast({
        title: "Success",
        description: result.message,
      });
      closeSheet();
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

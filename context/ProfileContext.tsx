"use client"; // Make sure to add this

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchProfile } from "@/api/profile";
import { ProfileInterface } from "@/interface/profile";

export interface ProfileContextType {
  profile: ProfileInterface | null;
  setProfile: (profile: ProfileInterface) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// Ensure the hook is correctly exported
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider = ({ children }: {children: React.ReactNode}) => {
  const [profile, setProfile] = useState<ProfileInterface | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchProfile();
        setProfile(profileData);
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    loadProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
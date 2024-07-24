import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileData {
  profileImage: string;
  firstName: string;
  lastName: string;
  email: string;
  links: { url: string; label: string }[];
}

const ProfileContext = createContext<{
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
} | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

// Define the props type to include children
interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    profileImage: '',
    firstName: '',
    lastName: '',
    email: '',
    links: [],
  });

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

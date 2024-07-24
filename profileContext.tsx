import React, { createContext, useContext, useState } from 'react';

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

export const ProfileProvider: React.FC = ({ }) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    profileImage: '',
    firstName: '',
    lastName: '',
    email: '',
    links: [],
  });

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
    </ProfileContext.Provider>
  );
};

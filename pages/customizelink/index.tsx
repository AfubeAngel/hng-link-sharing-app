import React, { useState } from "react";
import Nav from "@/components/customize-links/nav";
import FormContainer from "@/components/customize-links/FormContainer";
import PhoneView from "@/components/customize-links/phone";

const Customizelink = () => {
  const [activeForm, setActiveForm] = useState<'link' | 'profile'>('link');
  const [links, setLinks] = useState<{ label: string; url: string }[]>([]);
  const [profileImage, setProfileImage] = useState<string>("");

  const updateProfileData = (newLinks: { label: string; url: string }[]) => {
    setLinks(newLinks);
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      <Nav setActiveForm={setActiveForm} />
      <div className="flex ">
        <div className="hidden lg:block lg:w-1/3 ">
          <PhoneView links={links} profileImage={profileImage} />
        </div>
        <div className="w-full lg:w-2/3 p-4">
          <FormContainer activeForm={activeForm} updateProfileData={updateProfileData}  />
        </div>
      </div>
    </div>
  );
};

export default Customizelink;

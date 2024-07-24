import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useProfile } from "@/profileContext";

const PreviewPage: React.FC = () => {
  const router = useRouter();
  const { profileData } = useProfile();

  const goToEditor = () => {
    router.push('/customizelinks');
  };

  const shareLink = () => {
    alert('Link shared!');
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <nav className="w-full flex justify-between items-center p-6 bg-white shadow">
        <button onClick={goToEditor} className="text-base text-[#633CFF] font-semibold">
          Back to Editor
        </button>
        <button onClick={shareLink} className="text-base text-[#633CFF] font-semibold">
          Share Link
        </button>
      </nav>
      <div className="flex flex-col items-center w-full bg-[#633CFF] py-16 relative">
        <div className="absolute left-0 right-0 bottom-0 h-16 bg-[#633CFF] rounded-b-full" />
        <div className="bg-white rounded-lg p-6 w-[300px] flex flex-col items-center relative z-10">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
            <Image
              src={profileData.profileImage || "/default-profile.png"}
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
          <p className="mb-2 text-black font-bold">{profileData.firstName} {profileData.lastName}</p>
          <p className="mb-8 text-gray-600">{profileData.email}</p>
          <div className="w-full">
            {profileData.links.map((link, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-800">{link.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;

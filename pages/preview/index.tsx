
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useProfile } from "@/profileContext";

const PreviewPage: React.FC = () => {
  const router = useRouter();
  const { profileData } = useProfile();

  const goToEditor = () => {
    router.push('/customizelink');
  };

  const shareLink = () => {
    alert('Link shared!');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
    <div className="md:flex flex-col items-center hidden w-full md:h-[357px] bg-[#633CFF] p-6 relative rounded-b-[32px]">
      <nav className="w-full flex justify-between items-center p-6 bg-white shadow">
        <button onClick={goToEditor} className="text-base text-[#633CFF] font-semibold">
          Back to Editor
        </button>
        <button onClick={shareLink} className="text-base text-[#633CFF] font-semibold">
          Share Link
        </button>
      </nav>

        <div className="bg-white mt-10 md:mt-[150px] h-[569px] border border-black rounded-t-3xl p-6 w-[349px] flex flex-col items-center relative z-10">
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
              <div key={index} className="mb-4 w-[237px] h-[56px] p-4 bg-gray-100 rounded-lg">
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

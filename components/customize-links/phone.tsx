import React from "react";
import Image from "next/image";

interface PhoneViewProps {
  links: { url: string; label: string }[];
  profileImage: string;
}

const PhoneView: React.FC<PhoneViewProps> = ({ links, profileImage }) => {
  return (
    <div className="relative flex justify-center items-center h-full border border-gray-50 rounded-[12px] ">
      <div className="relative">
        <Image src="/rect1.svg" alt="rect1" width={307} height={631} />
        <div className="absolute top-0 left-0 p-[10px] w-full h-full flex justify-center items-center">
          <Image src="/rect2.svg" alt="rect2" width={285} height={611} />
          <div className="absolute left-6 h-[514px] w-[calc(100%-63.5px)] flex flex-col items-center p-4 bg-white ">
            <div className="circle w-24 h-24 bg-gray-300 rounded-full mb-4">
              {profileImage && (
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              )}
            </div>
            <div className="w-[160px] h-[16px] rounded-[104px] bg-gray-300 mb-2"></div>
            <div className="w-[72px] h-[8px] rounded-[104px] bg-gray-300 mb-14"></div>

            <div className="link-boxes flex flex-wrap justify-center w-full gap-4">
              {links.map((link, index) => (
                <div key={index} className="link-box w-[237px] h-11 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-white">{link.label}</span>
                </div>
              ))}
              {Array.from({ length: 4 - links.length }).map((_, index) => (
                <div key={index} className="link-box w-[237px] h-11 bg-gray-300 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;

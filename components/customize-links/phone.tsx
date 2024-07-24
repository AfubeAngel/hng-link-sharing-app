import React from "react";
import Image from "next/image";

interface PhoneViewProps {
  links: { url: string; label: string }[];
  profileImage: string;
  firstName: string;
  lastName: string;
  email: string;
}

const labelToImageMap: { [key: string]: string } = {
    GitHub: "/listbox-images/github.svg",
    "Frontend Mentor": "/listbox-images/frontendmentor.svg",
    Twitter: "/listbox-images/twitter.svg",
    LinkedIn: "/listbox-images/linkedin.svg",
    YouTube: "/listbox-images/youtube.svg",
    Facebook: "/listbox-images/facebook.svg",
    Twitch: "/listbox-images/twitch.svg",
    "Dev.to": "/listbox-images/devto.svg",
    Codewars: "/listbox-images/codewars.svg",
    Codepen: "/listbox-images/codepen.svg",
    freeCodeCamp: "/listbox-images/freecodecamp.svg",
    GitLab: "/listbox-images/gitlab.svg",
    Hashnode: "/listbox-images/hashnode.svg",
    "Stack Overflow": "/listbox-images/stackoverflow.svg",
  };
  

const PhoneView: React.FC<PhoneViewProps> = ({ links, profileImage, firstName, lastName, email }) => {
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
                  className="rounded-full max-h-24 object-cover "
                />
              )}
            </div>
            <div className="w-[160px] h-[16px] rounded-[104px] bg-gray-300 mb-2">
              <div className="text-center font-semibold text-[18px] leading-[27px] text-black bg-white ">{firstName} {lastName}</div>
            </div>
            <div className="w-[72px] mt-1 h-[8px] rounded-[104px] bg-gray-300 mb-14">
              <div className="w-full font-normal text-sm text-black bg-white">{email}</div>
            </div>

            <div className="link-boxes flex flex-wrap justify-center w-full gap-4">
              {links.map((link, index) => (
                <div key={index} className="link-box w-[237px] h-11 bg-gray-300 rounded-lg flex items-center justify-center">
                  <Image
                    src={labelToImageMap[link.label] || "/images/default-icon.png"}
                    alt={link.label}
                    width={237}
                    height={24}
                  />
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

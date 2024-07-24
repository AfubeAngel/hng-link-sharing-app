import React, { useState } from "react";
import Image from "next/image";
import PlatformDropdown from "./link-listbox";
import PhoneView from "./phone";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const LinkForm: React.FC = () => {
  const [isAddingLink, setIsAddingLink] = useState(false);
  const [links, setLinks] = useState<{ label: string; url: string }[]>([]);
  const [profileImage, setProfileImage] = useState<string>("");


  const handleAddLink = () => {
    setIsAddingLink(true);
    setLinks([...links, { label: "", url: "" }]);
  };

  const handleLinkChange = (index: number, field: string, value: string) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setLinks(newLinks);
  };

  const handleRemoveLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  const handleSave = async () => {
    try {
      const userId = "your-user-id"; // Replace with actual user ID
      const userRef = doc(db, "users", userId);
      await setDoc(userRef, { links }, { merge: true });
      alert("Links saved successfully!");
    } catch (error) {
      console.error("Error saving links: ", error);
    }
  };


  return (
    <div className="bg-white border-gray-50 rounded-lg p-6 md:p-10 w-full max-w-[808px]">
      <h2 className="text-[#333333] text-2xl md:text-[32px] font-bold mb-2 ">
        Customize your links
      </h2>
      <p className=" text-base font-normal text-[#888888]">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button
        className="mt-10 w-[295px] sm:w-[641px] lg:w-[600px] xl:w-[728px] mb-6 text-base font-semibold text-[#633CFF] rounded-lg border border-[#633CFF] h-[46px] "
        onClick={handleAddLink}
      >
        + Add new link
      </button>

      {!isAddingLink ? (
        <div className="flex flex-col gap-10 items-center py-[62.5px] px-4 ">
          <Image
            src="/customizelink.svg"
            alt="Add links"
            width={250}
            height={200}
          />
          <div className="flex flex-col gap-6 items-center max-w-[488px] ">
            <h3 className="text-[#333333] font-bold text-[32px] ">
              Let’s get you started
            </h3>
            <p className="text-[#737373] text-base text-center ">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
            <hr />
            
          </div>
        </div>
      ) : (
        links.map((link, index) => (
            <div key={index} className="flex flex-col gap-3 mb-6 bg-gray-100 p-5 rounded-[12px] max-w-[728px] ">
              <div className="flex justify-between items-center ">
                <span className="text-[#737373] font-bold ">Link #{index + 1}</span>
                <button
                  className="text-gray-500"
                  onClick={() => handleRemoveLink(index)}
                >
                  Remove
                </button>
              </div>
              <label className="text-black">Platform</label>
              <PlatformDropdown
              value={link.label}
              onChange={(value) => handleLinkChange(index, "title", value)}
            />

              <label className="text-black">Link</label>
              <div className="relative">
              <Image
                src="/input-link.svg"
                alt="Link icon"
                className="absolute left-2 top-1/2 transform -translate-y-[96%]"
                width={16}
                height={16}
              />
              <input
                type="url"
                placeholder="e.g. https://www.github.com/johnappleseed"
                className="pl-10 w-[255px] md:w-[600px] lg:w-[688px] mb-4 border p-2 rounded"
                value={link.url}
                onChange={(e) => handleLinkChange(index, "url", e.target.value)}
              />
            </div>
            </div>
          ))
        )}

       <hr className="my-4" />
       <div className="flex justify-end">
       <button
        onClick={handleSave}
        disabled={!isAddingLink}
        className={`mt-4 w-[91px] flex justify-center items-center text-base font-semibold text-white rounded-lg h-[46px] ${
          isAddingLink ? "bg-[#633CFF]" : "opacity-[25%] bg-[#633CFF] cursor-not-allowed"
        }`}
      >
        Save
      </button>
      </div>
      {isAddingLink && <PhoneView links={links} profileImage={profileImage} />}
    </div>
  );
};

export default LinkForm;

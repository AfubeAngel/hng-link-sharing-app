import React from "react";
import Image from "next/image";
import router from "next/router";

interface NavProps {
  setActiveForm: React.Dispatch<React.SetStateAction<"link" | "profile">>;
}

const goHome = () => {
  router.push("/");
};

const goToPreview = () => {
  router.push("/preview");
};

const Nav: React.FC<NavProps> = ({ setActiveForm }) => {
  return (
    <>
      <nav className="hidden shadow md:flex justify-between items-center pl-6 pr-4 py-4 md:p-6 bg-white text-black h-[42px] md:h-[78px] ">
        <div className="flex" onClick={goHome}>
          <Image
            src="/devlinks-logo.svg"
            alt="devlinks"
            width={32}
            height={32}
          />
          <p className="ml-2 text-xl font-bold">devlinks</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveForm("link")}
            className="w-[122px] flex items-center justify-center h-[46px] active:bg-[#EFEBFF] active:rounded-lg "
          >
            <span className="mr-2">
              <Image src="/links-nav.svg" alt="" width={20} height={20} />
            </span>
            Links
          </button>
          <button
            onClick={() => setActiveForm("profile")}
            className="w-[187px] h-[46px] active:bg-[#EFEBFF] active:rounded-lg "
          >
            Profile Details
          </button>
        </div>
        <button 
        className="text-base text-[#633CFF] font-semibold md:w-[144px] md:h-[46px] rounded-lg border border-[#633CFF] "
        onClick={goToPreview}>
          Preview
        </button>
      </nav>

      {/* mobile nav */}
      <nav className="md:hidden flex justify-between items-center pl-6 pr-4 py-4 md:p-6 bg-white text-black h-[42px] md:h-[78px] ">
        <div onClick={goHome}>
          <Image
            src="/devlinks-logo.svg"
            alt="devlinks"
            width={32}
            height={32}
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveForm("link")}
            className="active:bg-[#EFEBFF] active:rounded-lg "
          >
            <Image src="/links-nav.svg" alt="" width={20} height={20} />
          </button>
          <button
            onClick={() => setActiveForm("profile")}
            className="active:bg-[#EFEBFF] active:rounded-lg "
          >
            <Image src="/link-user.svg" alt="" width={20} height={20} />
          </button>
        </div>
        <button className="text-base text-[#633CFF] font-semibold md:w-[144px] md:h-[46px] rounded-lg border border-[#633CFF] " onClick={goToPreview}>
          <Image src="/nav-preview.svg" alt="" width={20} height={20} />
        </button>
      </nav>
    </>
  );
};

export default Nav;

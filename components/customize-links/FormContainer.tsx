import React from "react";
import LinkForm from "./links";
import ProfileForm from "./profile";

interface FormContainerProps {
  activeForm: "link" | "profile";
  updateProfileData: (
    links: { label: string; url: string }[],
  ) => void;
}

const FormContainer: React.FC<FormContainerProps> = ({
  activeForm,
  updateProfileData,
}) => {
  return (
    <div className=" border rounded shadow">
      {activeForm === "link" ? (
        <LinkForm updateProfileData={updateProfileData} />
      ) : (
        <ProfileForm updateProfileData={updateProfileData} />
      )}
    </div>
  );
};

export default FormContainer;

import React from "react";
import LinkForm from "./links";
import ProfileForm from "./profile";

// interface FormContainerProps {
//   activeForm: "link" | "profile";
//   updateProfileData: (
//     links: { label: string; url: string }[],
//     profileImage: string,
//     firstName: string,
//     lastName: string,
//     email: string
//   ) => void;
//   // updateProfileData: (
//   //   links: { label: string; url: string }[],
//   // ) => void;
// }

interface FormContainerProps {
  activeForm: "link" | "profile";
  updateProfileData:
    | ((links: { label: string; url: string }[]) => void)
    | ((links: { label: string; url: string }[], profileImage: string, firstName: string, lastName: string, email: string) => void);
}

const FormContainer: React.FC<FormContainerProps> = ({
  activeForm,
  updateProfileData,
}) => {
  return (
    <div className=" border rounded shadow">
      {activeForm === "link" ? (
        // <LinkForm updateProfileData={updateProfileData} />
        <LinkForm updateProfileData={updateProfileData as (links: { label: string; url: string }[]) => void} />
      ) : (
        <ProfileForm updateProfileData={updateProfileData as (links: { label: string; url: string }[], profileImage: string, firstName: string, lastName: string, email: string) => void} />

        // <ProfileForm updateProfileData={updateProfileData} />
      )}
    </div>
  );
};

export default FormContainer;

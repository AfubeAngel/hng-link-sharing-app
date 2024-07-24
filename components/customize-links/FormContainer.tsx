import React from "react";
import Image from "next/image";
import LinkForm from "./links";
import ProfileForm from "./profile";

interface FormContainerProps {
  activeForm: "link" | "profile";
}

const FormContainer: React.FC<FormContainerProps> = ({ activeForm }) => {

  return (
    <div className=" border rounded shadow">
    {activeForm === "link" ? <LinkForm /> : <ProfileForm />}
    </div>
  );
};

export default FormContainer;

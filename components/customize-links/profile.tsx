import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

interface ProfileFormProps {
  updateProfileData: (links: { label: string; url: string }[], profileImage: string, firstName: string, lastName: string, email: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ updateProfileData }) => {
  const [profileImage, setProfileImage] = useState<string>("");
  const [user, setUser] = useState<any>(null);


  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSave = async (values: any) => {
    updateProfileData([], profileImage, values.firstName, values.lastName, values.email);
    // try {
    //   if (user) {
    //     const userId = user.uid;
    //     const userRef = doc(db, "users", userId);
        
    //     // Save profile data in Firestore
    //     await setDoc(userRef, {
    //       profileImage,
    //       firstName: values.firstName,
    //       lastName: values.lastName,
    //       email: values.email
    //     }, { merge: true });
        
    //     alert("Profile saved successfully!");
    //   } else {
    //     alert("No user is signed in.");
    //   }
    // } catch (error) {
    //   console.error("Error saving profile: ", error);
    // }
  };


  const validationSchema = Yup.object({
    firstName: Yup.string().required("Can’t be empty"),
    lastName: Yup.string().required("Can’t be empty"),
    email: Yup.string().email("Invalid email address").required("Can’t be empty"),
  });

  return (
    <div className="p-4 md:p-10 max-w-[728px] ">
      <h2 className="text-black">Profile Details</h2>
      <p className="text-black">Add your details to create a personal touch to your profile.</p>

      <div className="flex flex-col gap-2 md:flex-row p-5 bg-[#FAFAFA] rounded-lg my-6 justify-between">
        <p className="flex-none text-gray-700">Profile picture</p>
        <div className="flex flex-col gap-2 md:flex-row lg:gap-6 flex-grow items-center justify-center">
          <div className="relative w-48 h-48 bg-purple-400 overflow-hidden flex items-center justify-center">
            {profileImage ? (
              <Image src={profileImage} alt="Profile" objectFit="cover" width={193} height={193} />
            ) : (
              <span className="text-white">Add Image</span>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleProfileImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-700">Image must be below 1024x1024px.</p>
            <p className="text-gray-700">Use PNG or JPG format.</p>
          </div>
        </div>
      </div>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSave}

        // onSubmit={(values) => {
        //   handleSave(values);
        // }}
      >
        {({ isSubmitting, isValid, handleSubmit }) => (
          <>
          <Form className="space-y-4 bg-[#FAFAFA] p-5 ">
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <label className="block text-black" htmlFor="firstName">
                First Name*
              </label>
              <div className="relative ">
                <Field
                  className="w-[255px] text-black md:w-[344px] lg:w-[432px] p-2 border border-gray-300 rounded"
                  type="text"
                  name="firstName" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="absolute inset-y-0 right-2 flex items-center text-red-600" />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between ">
              <label className="block text-black" htmlFor="lastName">
                Last Name*
              </label>
              <div className="relative">
                <Field
                  className="w-[255px] text-black md:w-[344px] lg:w-[432px] p-2 border border-gray-300 rounded"
                  type="text"
                  name="lastName" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="absolute inset-y-0 right-2 flex items-center text-red-600" />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between ">
              <label className="block text-black" htmlFor="email">
                Email*
              </label>
              <div className="relative">
                <Field
                  className="w-[255px] text-black md:w-[344px] lg:w-[432px] p-2 border border-gray-300 rounded"
                  type="email"
                  name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="absolute inset-y-0 right-2 flex items-center text-red-600" />
              </div>
            </div>

          </Form>
          <hr className="my-10" />
          
          <div className="flex justify-end">
          <button
                type="submit"
                // onClick={handleSave}
                onClick={() => handleSubmit()}
                disabled={!isValid || isSubmitting}
                className={`mt-4 w-[91px] flex justify-center items-center text-base font-semibold text-white rounded-lg h-[46px] ${
                  isValid && !isSubmitting ? "bg-[#633CFF]" : "opacity-[25%] bg-[#633CFF] cursor-not-allowed"
                }`}
              >
                Save
          </button>
        </div>
          </>
        )}
      </Formik>

    </div>
  );
};

export default ProfileForm;

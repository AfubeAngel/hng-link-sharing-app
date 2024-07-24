import React from "react";

const ProfileForm: React.FC = () => {
  return (
    <div>
      <h2 className="text-black">Profile Details</h2>
      <p>Add your details to create a personal touch to your profile.</p>

      <div className="flex p-5 bg-gray-100 rounded-lg md:h-[233px] justify-between ">
        <p>Profile picture</p>
        <div className="flex gap-6 ">
          <span className="text-black md:w-[193px] md:h-[193px] bg-purple-400 ">Add Image</span>
          <div className="flex flex-col justify-center md:w-[215px]">
          <p>Image must be below 1024x1024px.</p>
          <p>Use PNG or JPG format.</p>
          </div>
        </div>
      </div>

      <form className="mt-6">
        <div>
          <label className="text-black">First Name*</label>
          <input className="" type="text" name="name" required />
        </div>
        <div>
          <label className="text-black">Last Name</label>
          <input type="text" name="lastname" required />
        </div>
        <div>
          <label className="text-black">Email</label>
          <input type="email" name="email" required />
        </div>
        <button className="text-black" type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileForm;

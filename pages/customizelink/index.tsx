import React, { useState } from 'react';
import Nav from '@/components/customize-links/nav';
import FormContainer from '@/components/customize-links/FormContainer';
import PhoneView from '@/components/customize-links/phone';

const Customizelink = () => {
  const [activeForm, setActiveForm] = useState<'link' | 'profile'>('link');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      <Nav setActiveForm={setActiveForm} />
      <div className="flex ">
        <div className="hidden lg:block lg:w-1/3 ">
          <PhoneView links={[]} profileImage={''} />
        </div>
        <div className="w-full lg:w-2/3 p-4">
          <FormContainer activeForm={activeForm} />
        </div>
      </div>
    </div>
  );
};

export default Customizelink;

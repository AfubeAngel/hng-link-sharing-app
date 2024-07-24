import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'


export default function Login() {
  const initialValues = {
    email: '',
    password: ''
  };

  const router = useRouter()

  const handleLogin = async (values: { email: string, password: string }) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      alert('Logged in successfully!');
      router.push('/customizelink'); 
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in: ' + error);
    }
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Can’t be empty'),
    password: Yup.string().min(8, 'Password too short').required('Please check again'),
  })

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <Image src='/devlinks-logo.svg' alt='devlinks' width={40} height={40}/>
          <p className="ml-2 text-2xl font-bold text-black">devlinks</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black">Login</h3>
          <p className="mt-2 text-sm text-gray-600">Add your details below to get back into the app</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="relative mt-1">
                  <Field
                    type="email"
                    name="email"
                    placeholder="e.g. alex@email.com"
                    className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#633CFF]"
                  />
                  <Image src='/envelope.svg' alt="" width={16} height={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"  />
                  <ErrorMessage name="email" component="div" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-red-600" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-normal text-[#333333]">Password</label>
                <div className="relative mt-1">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#633CFF]"
                  />
                  <Image src='/lockkey.svg' alt="" width={16} height={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"  />
                  <ErrorMessage name="password" component="div" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-red-600" />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-white bg-[#633CFF] rounded-md focus:outline-none focus:ring focus:ring-[#633CFF]"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-sm text-center text-black">
          Don’t have an account? <a href="/" className="text-[#633CFF] ">Create account</a>
        </p>
      </div>
    </section>
  )
}

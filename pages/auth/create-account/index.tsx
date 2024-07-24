import React from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


export default function Createaccount() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password too short').required('Required'),
  })

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <Image src='/devlinks-logo.svg' alt='devlinks' width={40} height={40}/>
          <p className="ml-2 text-2xl font-bold">devlinks</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Create account</h3>
          <p className="mt-2 text-sm text-gray-600">Let’s get you started sharing your links!</p>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                />
                <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Create Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                />
                <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                />
                <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
              </div>

              <p>Password must contain at least 8 characters</p>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300"
                >
                  Create new account
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-sm text-center">
        Already have an account? <a href="/signup" className="text-orange-600 hover:underline">Login</a>
        </p>
      </div>
    </section>
  )
}

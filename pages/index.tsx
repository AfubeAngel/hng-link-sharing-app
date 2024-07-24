import Image from "next/image";
import { Inter } from "next/font/google";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import router from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const handleSignup = async (values: { email: string; password: string; }) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      alert('Account created successfully!');
      router.push("/auth/login");
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up: ' + error);
    }
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Can’t be empty'),
    password: Yup.string().min(8, 'Password too short').required('Please check again'),
    confirmpassword: Yup.string().oneOf([Yup.ref('password')], 'Password mismatch').required('Please check again'),
  });

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white md:bg-gray-100">
      <div className="flex justify-self-start md:items-center md:justify-center mb-[64px] md:mb-[51px] ">
        <Image src='/devlinks-logo.svg' alt='devlinks' width={40} height={40}/>
        <p className="ml-2 text-2xl font-bold text-black">devlinks</p>
      </div>
      <div className="w-full max-w-md p-8 space-y-8 bg-white md:rounded md:shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black">Create account</h3>
          <p className="mt-2 text-sm text-gray-600">Let’s get you started sharing your links!</p>
        </div>
        <Formik
          initialValues={{ email: '', password: '', confirmpassword: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSignup(values);
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
                <label className="block text-sm font-medium text-gray-700">Create Password</label>
                <div className="relative mt-1">
                  <Field
                    type="password"
                    name="password"
                    placeholder="At least 8 characters"
                    className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#633CFF]"
                  />
                  <Image src='/lockkey.svg' alt="" width={16} height={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"  />
                  <ErrorMessage name="password" component="div" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-red-600" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="relative mt-1">
                  <Field
                    type="password"
                    name="confirmpassword"
                    placeholder="At least 8 characters"
                    className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#633CFF]"
                  />
                  <Image src='/lockkey.svg' alt="" width={16} height={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"  />
                  <ErrorMessage name="confirmpassword" component="div" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-red-600" />
                </div>
              </div>

              <p className="text-xs font-normal text-[#737373] my-6">Password must contain at least 8 characters</p>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-white bg-[#633CFF] rounded-md focus:outline-none focus:ring focus:ring-[#633CFF]"
                >
                  Create new account
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-base text-center text-black">
          Already have an account? <Link href="/auth/login" className="text-[#633CFF]">Login</Link>
        </p>
      </div>
    </section>
  );
}

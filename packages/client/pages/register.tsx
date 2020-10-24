import { Form, Formik } from 'formik';
import { LockClosed } from 'heroicons-react';
import React from 'react';
import { InputField } from '../components/forms/InputField';
import { Banner } from '../components/shared/navigation/banner';
import { Navbar } from '../components/shared/navigation/navbar';

const Register: React.FC = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <div className="flex items-center max-w-lg mx-auto px-5">
        <div className="mx-auto py-20">
          <h1 className="font-extrabold text-4xl">Register Pluto Account</h1>
          <p className="text-gray-600 text-xl">
            Already have an account?{' '}
            <a href="#" className="text-indigo-500">
              Sign in
            </a>
          </p>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={() => {}}
          >
            {() => (
              <Form className="mt-8 space-y-5">
                <div className="grid grid-cols-7 space-x-2">
                  <div className="col-span-4">
                    <InputField name="email" label="Email Address" />
                  </div>
                  <div className="col-span-3">
                    <InputField name="name" label="Full Name" />
                  </div>
                </div>
                <div>
                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                  />
                </div>
                <div>
                  <InputField
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="school"
                    id="school"
                    className="form-checkbox transition ease duration-200"
                  />
                  <label htmlFor="school" className="ml-2 text-gray-700">
                    School Account?
                  </label>
                </div>
                <button
                  type="submit"
                  className="focus:outline-none focus:shadow-outline transition ease duration-200 flex items-center bg-indigo-500 w-full p-2 rounded-md text-white font-bold"
                >
                  <div className="text-indigo-100">
                    <LockClosed size={18} />
                  </div>
                  <span className="mx-auto">Create Account</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;

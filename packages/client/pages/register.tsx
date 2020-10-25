import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, validateYupSchema, yupToFormErrors } from 'formik';
import { LockClosed } from 'heroicons-react';
import { InputField } from '../components/forms/InputField';
import { Banner } from '../components/shared/navigation/banner';
import { Navbar } from '../components/shared/navigation/navbar';
import { NextLink } from '../components/shared/nextlink';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .max(255, 'Full Name exceed the character limit')
    .required('Full name is required'),
  email: Yup.string()
    .email()
    .max(255, 'Email Address exceed the character limit')
    .required('Email Address is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

const Register: React.FC = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <div className="flex items-center max-w-lg mx-auto px-5">
        <div className="mx-auto py-20">
          <h1 className="font-extrabold text-4xl text-gray-800">
            Register Pluto Account
          </h1>
          <p className="text-gray-600 text-xl">
            Already have an account?{' '}
            <NextLink href="/login" className="text-indigo-500 hover:underline">
              Sign in
            </NextLink>
          </p>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              passwordConfirmation: '',
              schoolAccount: false,
            }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
              const errors = await registerSchema.validate(values);
              setErrors(yupToFormErrors(errors));
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={registerSchema}
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
                <InputField name="password" type="password" label="Password" />
                <InputField
                  type="password"
                  name="passwordConfirmation"
                  label="Confirm Password"
                />
                <div className="flex items-center">
                  <InputField
                    name="school"
                    type="checkbox"
                    wrapper="flex items-center flex-row-reverse"
                    className="form-checkbox transition ease duration-200 mr-2"
                    labelStyles="text-gray-700"
                    label="School Account?"
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none focus:shadow-outline transition ease duration-200 flex items-center bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-600 w-full p-2 rounded-md text-white font-bold"
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

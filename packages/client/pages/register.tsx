import React from 'react';
import { registerSchema } from '@pluto/common';
import { Form, Formik, yupToFormErrors } from 'formik';
import { LockClosed } from 'heroicons-react';
import { InputField } from '../components/forms/InputField';
import { Banner } from '../components/shared/navigation/banner';
import { Navbar } from '../components/shared/navigation/navbar';
import { NextLink } from '../components/shared/nextlink';
import { useRegisterMutation } from '../generated/graphql';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  const [register, { loading }] = useRegisterMutation();
  const router = useRouter();

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
              confirmPassword: '',
              schoolAccount: false,
            }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
              const errors = await registerSchema.validate(values);
              setErrors(yupToFormErrors(errors));

              const response = await register({
                variables: { options: values },
              });

              router.push('/dashboard');

              console.log(response);
            }}
            validationSchema={registerSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ isSubmitting }) => (
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
                  name="confirmPassword"
                  label="Confirm Password"
                />
                <div className="flex items-center">
                  <InputField
                    name="school"
                    type="checkbox"
                    wrapper="flex items-center flex-row-reverse"
                    className="form-checkbox border-gray-400 cursor-pointer transition ease duration-200 mr-2"
                    labelStyles="text-gray-700"
                    label="School Account?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
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

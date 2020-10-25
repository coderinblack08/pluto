import React from 'react';
import { loginSchema } from '@pluto/common';
import { Form, Formik, yupToFormErrors } from 'formik';
import { LockOpen } from 'heroicons-react';
import { InputField } from '../components/forms/InputField';
import { Banner } from '../components/shared/navigation/banner';
import { Navbar } from '../components/shared/navigation/navbar';
import { NextLink } from '../components/shared/nextlink';
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const router = useRouter();

  return (
    <div>
      <Banner />
      <Navbar />
      <div className="flex items-center max-w-lg mx-auto px-5">
        <div className="mx-auto max-w-lg w-full py-32">
          <h1 className="font-extrabold text-4xl text-gray-800">
            Register Pluto Account
          </h1>
          <p className="text-gray-600 text-xl">
            Don't have an account?{' '}
            <NextLink href="/login" className="text-indigo-500 hover:underline">
              Sign up
            </NextLink>
          </p>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
              const errors = await loginSchema.validate(values);
              setErrors(yupToFormErrors(errors));

              const response = await login({
                variables: { options: values },
                update: (cache, { data }) => {
                  cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: 'Query',
                      me: data.login.user,
                    },
                  });
                },
              });

              router.push('/');

              console.log(response);
            }}
            validationSchema={loginSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {() => (
              <Form className="mt-8 space-y-5">
                <InputField name="email" label="Email Address" />
                <InputField name="password" type="password" label="Password" />
                <button
                  type="submit"
                  className="focus:outline-none focus:shadow-outline transition ease duration-200 flex items-center bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-600 w-full p-2 rounded-md text-white font-bold"
                >
                  <div className="text-indigo-100">
                    <LockOpen size={18} />
                  </div>
                  <span className="mx-auto">Sign In</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

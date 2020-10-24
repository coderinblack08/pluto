import { LockClosed } from 'heroicons-react';
import React from 'react';
import { Banner } from '../components/shared/navigation/banner';
import { Navbar } from '../components/shared/navigation/navbar';

const Register: React.FC = () => {
  const inputClass =
    'shadow-sm w-full border rounded-md py-2 px-3 focus:outline-none focus:shadow-outline';
  return (
    <div>
      <Banner />
      <Navbar />
      <div className="flex items-center">
        {/* <div className="relative col-span-5">
          <h2 className="absolute z-10 text-3xl font-bold top-0 text-white p-10 leading-tight">
            Discover your communities <br />
            <span className="text-indigo-200 font-extrabold">
              Made for everybody
            </span>
          </h2>
          <img
            src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3033&q=80"
            className="absolute z-0 h-screen object-cover"
            style={{
              filter: 'brightness(60%)',
              // maxHeight: '48rem',
            }}
            alt="Community Image"
          />
        </div> */}
        <div className="mx-auto py-20">
          <h1 className="font-extrabold text-4xl">Register Pluto Account</h1>
          <p className="text-gray-600 text-xl">
            Already have an account?{' '}
            <a href="#" className="text-indigo-500">
              Sign in
            </a>
          </p>
          <form className="mt-8 space-y-5">
            <div className="grid grid-cols-7 space-x-2">
              <div className="col-span-4">
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="flex w-full rounded-md">
                  <input
                    type="text"
                    className="form-input rounded-l-md rounded-r-none w-full border-r-0 transition ease duration-200"
                  />
                  <button
                    type="button"
                    className="border border-l-0 transition ease duration-200 text-gray-500 focus:outline-none px-3 focus:shadow-outline rounded-r-md"
                  >
                    <LockClosed size={18} />
                  </button>
                </div>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-input transition ease duration-200"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="name"
                className="form-input w-full transition ease duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="name"
                className="form-input w-full transition ease duration-200"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

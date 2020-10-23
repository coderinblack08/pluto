import { ChevronDown, ChevronRight } from 'heroicons-react';
import React from 'react';
import { Navbar } from '../components/shared/navigation/navbar';

const Index: React.FC<{}> = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center py-2 bg-gray-900 relative z-20 text-white font-medium">
        <div className="flex items-center bg-gray-800 bg-opacity-50 rounded-full px-4 py-1">
          Now available in alpha release.
          <a href="#" className="ml-2 underline text-indigo-200">
            Learn More →
          </a>
        </div>
      </div>
      <Navbar />
      <div className="relative container mx-auto py-10 md:pt-32 md:pb-20 px-5 sm:px-0">
        <div className="relative z-10 pb-10 md:pb-32">
          <div className="flex items-center space-x-2">
            <div className="w-14 text-sm text-white font-bold flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-500">
              NEW
            </div>
            <p
              className="font-bold mb-2 text-lg bg-gradient-to-r from-blue-500 to-teal-500 mt-2"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              NOW IN EARLY ACCESS
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Community Discussion
            <br /> Through One Platform
          </h1>
          <p className="text-gray-600 text-xl sm:text-2xl my-4">
            Pluto does all the heavy-lifting with all the features you{' '}
            <br className="hidden sm:block" />
            wished you had before!
          </p>
          <div className="flex items-center space-x-3 mt-6">
            <button className="group flex items-center bg-gray-800 px-3 py-3 rounded-md text-white font-medium text-xl transition ease duration-150 focus:outline-none focus:shadow-outline focus:bg-gray-900">
              <span className="ml-3">Get Started</span>
              <span className="ml-3 group-hover:translate-x-1 transform transition ease duration-200">
                <ChevronRight size={28} />
              </span>
            </button>
            <button className="text-gray-800 px-6 py-3 rounded-md bg-gray-200 font-medium text-xl transition ease duration-150 focus:outline-none focus:shadow-outline focus:bg-gray-300">
              Learn More
            </button>
          </div>
        </div>
        <img
          src="../static/skeleton.svg"
          alt="Skeleton Graphic"
          className="hidden md:block absolute top-0 right-0 mt-10 md:-mt-10 lg:-mt-32 xl:-mt-48 -mr-32 md:-mr-48 xl:-mr-64 xl:max-w-6xl z-0 opacity-75"
        />
        <div className="hidden md:flex justify-center text-gray-600 hover:text-gray-800 animate-bounce">
          <a href="#features">
            <ChevronDown
              size={32}
              className="transition ease duration-200 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="bg-gray-900 py-24 shadow-inner" id="features">
        <div className="container mx-auto">
          <p className="text-teal-500 font-bold text-lg text-center">
            FEATURES
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center leading-tight">
            Convincing Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 text-center font-semibold">
            Low footprint design with features you won’t forget
          </p>
          <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 mx-auto mt-12 gap-3 md:gap-2 px-3">
            <div className="group bg-gray-800 p-4 text-gray-200 hover:text-white text-lg rounded-md shadow-lg hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 transition ease-in-out duration-200">
              <h1 className="font-bold text-xl">Easy to use</h1>
              <p className="text-gray-400 group-hover:text-gray-200">
                A simple and intuitive UI
              </p>
            </div>
            <div className="group bg-gray-800 p-4 text-gray-200 hover:text-white text-lg rounded-md shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition ease-in-out duration-200">
              <h1 className="font-bold text-xl">Battery pack included</h1>
              <p className="text-gray-400 group-hover:text-gray-200">
                Events, announcements, discussion threads, assignments, you name
                it!
              </p>
            </div>
            <div className="group bg-gray-800 p-4 text-gray-200 hover:text-white text-lg rounded-md shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition ease-in-out duration-200">
              <h1 className="font-bold text-xl">Spread the word</h1>
              <p className="text-gray-400 group-hover:text-gray-200">
                Extends the reach of your community
              </p>
            </div>
            <div className="group bg-gray-800 p-4 text-gray-200 hover:text-white text-lg rounded-md shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-yellow-500 transition ease-in-out duration-200">
              <h1 className="font-bold text-xl">For schools</h1>
              <p className="text-gray-400 group-hover:text-gray-200">
                Gradebooks, assignments, and other features dedicated for
                classroom settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

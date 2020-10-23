import { ChevronDown, ChevronRight, TagOutline } from 'heroicons-react';
import React from 'react';
import { Navbar } from '../components/shared/navigation/navbar';

const Index: React.FC<{}> = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center py-2 bg-gray-900 relative z-20 text-white font-medium">
        <div className="flex items-center bg-gray-800 bg-opacity-50 rounded-full px-6 py-1">
          <TagOutline className="mr-2" size={18} />
          Now available in alpha release.
          <a href="#" className="ml-2 underline text-indigo-200">
            Learn More →
          </a>
        </div>
      </div>
      <Navbar />
      <div className="relative container mx-auto py-10 md:py-24 px-5 sm:px-0">
        <div className="relative z-10 pb-40">
          <div className="flex items-center space-x-2">
            <div className="w-14 text-sm text-white font-bold flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-500">
              NEW
            </div>
            <p className="font-bold mb-2 text-lg text-indigo-400 mt-2">
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
        <div className="flex justify-center text-gray-800">
          <a href="#features">
            <ChevronDown
              size={32}
              className="transform hover:translate-y-2 transition ease duration-200 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="bg-gray-800 py-24 shadow-inner" id="features">
        <div className="container mx-auto">
          <h1 className="text-4xl font-black text-white text-center">
            Convincing Features
          </h1>
          <p className="text-2xl text-gray-300 text-center font-bold">
            Low footprint design with features you won’t forget
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

import { ChevronDown, ChevronRight, ColorSwatch } from 'heroicons-react';
import React from 'react';
import { Navbar } from '../components/shared/navigation/navbar';

const Index: React.FC<{}> = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center py-2 bg-gray-900 relative z-20 text-white font-medium">
        <div className="flex items-center bg-gray-800 bg-opacity-50 rounded-full px-4 py-1">
          Now available in alpha release.
          <a href="#" className="ml-2 hover:underline text-indigo-200">
            Learn More →
          </a>
        </div>
      </div>
      <Navbar />
      <div className="relative container mx-auto py-10 md:py-20 xl:pt-32 lg:pb-20 px-5 lg:px-10 xl:px-0 sm:px-0">
        <div className="relative z-10 pb-10 md:pb-20 xl:pb-32">
          <div className="flex items-center space-x-2">
            <div className="w-14 text-sm text-white font-bold flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-500">
              NEW
            </div>
            <p
              className="font-bold mb-2 text-lg bg-gradient-to-r from-blue-400 to-teal-400 mt-2"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              NOW IN EARLY ACCESS
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-gray-900">
            Community Discussion
            <br /> Through One Platform
          </h1>
          <p className="text-gray-600 text-xl sm:text-2xl my-4">
            Pluto does all the heavy-lifting with all the features you{' '}
            <br className="hidden sm:block" />
            wished you had before!
          </p>
          <div className="flex flex-col sm:flex-row w-full items-end sm:items-center space-x-3 mt-6">
            <button className="group flex items-center justify-between w-full sm:w-auto bg-gray-800 px-3 py-3 rounded-md text-white font-medium text-xl transition ease duration-150 focus:outline-none focus:shadow-outline focus:bg-gray-900">
              <span className="ml-3">Get Started</span>
              <span className="ml-3 group-hover:translate-x-1 transform transition ease duration-200">
                <ChevronRight size={28} />
              </span>
            </button>
            <button className="text-gray-800 w-full sm:w-auto mt-2 sm:mt-0 px-6 py-3 rounded-md bg-gray-200 font-medium text-xl transition ease duration-150 focus:outline-none focus:shadow-outline focus:bg-gray-300">
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
          <p className="flex items-center justify-center text-teal-500 font-bold text-lg text-center">
            <ColorSwatch size={20} /> <span className="ml-2">FEATURES</span>
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center leading-tight">
            Convincing Features
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 text-center font-semibold">
            Low footprint design with features you won’t forget
          </p>
          <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 mx-auto mt-12 gap-3 md:gap-2 px-3">
            <div className="group bg-gray-800 p-4 text-gray-200 hover:text-white text-lg rounded-md shadow-lg hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 transition ease-in-out duration-200">
              <h3 className="font-bold text-xl">Easy to use</h3>
              <p className="text-gray-400 group-hover:text-gray-200">
                A simple and intuitive UI
              </p>
            </div>
            <div className="group bg-gray-800 p-4 text-gray-200 hover:text-white text-lg rounded-md shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition ease-in-out duration-200">
              <h3 className="font-bold text-xl">Battery pack included</h3>
              <p className="text-gray-400 group-hover:text-gray-200">
                Events, announcements, discussion threads, assignments, you name
                it!
              </p>
            </div>
            <div className="group bg-gray-800 bg-opacity-50 p-4 text-gray-200 hover:text-white text-lg rounded-md shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition ease-in-out duration-200">
              <h3 className="font-bold text-xl">Spread the word</h3>
              <p className="text-gray-400 group-hover:text-gray-200">
                Extends the reach of your community
              </p>
            </div>
            <div className="group bg-gray-800 bg-opacity-50 p-4 text-gray-200 hover:text-white text-lg rounded-md shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-yellow-500 transition ease-in-out duration-200">
              <h3 className="font-bold text-xl">For schools</h3>
              <p className="text-gray-400 group-hover:text-gray-200">
                Gradebooks, assignments, and other features dedicated for
                classroom settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden text-center bg-gradient-to-tr from-gray-100 to-indigo-100 py-20 border-b border-gray-200">
          <div className="relative z-10 flex items-center justify-center rounded-md mb-2 bg-gradient-to-r from-teal-500 to-blue-500 w-12 h-12 mx-auto">
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C19.995 17.4162 16.4162 20.995 12 21ZM12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C17.9961 9.68789 15.3121 7.00386 12 7ZM13 14H11V9H13V14ZM19.293 7.707L17.293 5.707L18.707 4.293L20.707 6.293L19.294 7.706L19.293 7.707ZM15 4H9V2H15V4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2
            className="relative z-10 font-black text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-teal-500 to-indigo-500"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Frequently asked questions
          </h2>
          <img
            src="../static/dots.svg"
            className="absolute top-0 left-0 h-full mt-3 z-0"
            aria-hidden
          />
          <p className="relative z-10 font-bold text-xl md:text-2xl max-w-xs sm:max-w-none mx-auto mt-2 text-gray-700">
            With frequently given answers to quench your questions
          </p>
        </div>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 py-16 px-5 max-w-5xl mx-auto">
          <div>
            <dt className="faq-question">
              What's the best thing about living a life?
            </dt>
            <dd className="mt-3 text-lg text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              quaerat exercitationem fugiat quae.
            </dd>
          </div>
          <div>
            <dt className="faq-question">
              What's the best thing about living a life?
            </dt>
            <dd className="faq-answer">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              quaerat exercitationem fugiat quae.
            </dd>
          </div>
          <div>
            <dt className="faq-question">
              What's the best thing about living a life?
            </dt>
            <dd className="faq-answer">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              quaerat exercitationem fugiat quae.
            </dd>
          </div>
          <div>
            <dt className="faq-question">
              What's the best thing about living a life?
            </dt>
            <dd className="faq-answer">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              quaerat exercitationem fugiat quae.
            </dd>
          </div>
        </dl>
      </div>
      <div className="bg-gray-100 mt-10 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Let's get our hands dirty
            <br />
            <span className="text-indigo-500">
              Let the features do the convincing.
            </span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-500 bg-white hover:text-indigo-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

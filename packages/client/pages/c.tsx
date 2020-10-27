import {
  CalculatorOutline,
  CalendarOutline,
  ChatOutline,
  ChevronRight,
  Flag,
  HeartOutline,
  LocationMarker,
  Pencil,
  SpeakerphoneOutline,
  Users,
} from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { AuthenticatedNavbar } from '../components/shared/navigation/AuthenticatedNavbar';

const Community: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <AuthenticatedNavbar />
      <div className="bg-gray-800 h-48">
        <div className="container mx-auto py-10 border-t border-gray-700">
          <div className="flex items-center justify-between mb-5 mx-5 lg:mx-0">
            <h1 className="font-bold text-3xl mt-4 text-white">The Foodies</h1>
            <div className="flex items-center space-x-2 mt-5">
              <button className="focus:outline-none focus:shadow-outline px-5 py-2 leading-relaxed shadow bg-indigo-500 text-white font-medium rounded">
                Join
              </button>
              <button className="focus:outline-none focus:shadow-outline px-5 py-2 leading-relaxed shadow bg-gray-700 text-white font-medium rounded">
                Contact
              </button>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="relative bg-white rounded-md shadow mx-5 lg:mx-0">
              <button className="focus:outline-none focus:shadow-outline flex items-center absolute right-0 top-0 m-6 text-indigo-500">
                <Pencil size={18} className="mr-1" />
                Edit
              </button>
              <div className="p-6">
                <div className="flex items-center divide-x-2 divide-gray-200">
                  <div className="flex items-center text-indigo-500 font-medium pr-4">
                    <Users className="mr-2" size={20} />
                    1.2k Members
                  </div>
                  <div className="flex items-center text-red-500 font-medium pl-4 pr-4">
                    <LocationMarker className="mr-2" size={20} />
                    Santa Cruz, CA
                  </div>
                  <div className="flex items-center text-gray-500 font-medium pl-4">
                    <Flag className="mr-2" size={20} />
                    24 Posts
                  </div>
                </div>
                <p className="text-base leading-7 text-gray-700 mt-4 max-w-2xl">
                  Curious group who loves dining and exploring the culinary
                  world!
                </p>
              </div>
              <div className="bg-gray-50 border-t border-gray-200 w-full px-6 py-4 inline-flex items-center space-x-3">
                <img
                  className="inline-block h-7 w-7 rounded-full text-white shadow-solid"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Avatar Image"
                />
                <p className="text-gray-700 font-xl">
                  Created by{' '}
                  <a className="text-indigo-500 hover:underline" href="#">
                    Rumaysa Baldwin
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row lg:grid-cols-12 lg:divide-x lg:divide-gray-200 lg:space-x-4 py-16 lg:py-12">
              <div className="w-full mt-10 lg:mt-0 lg:w-2/3 px-5 space-y-4">
                <div className="bg-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 px-6 py-8 rounded-md hover:shadow-inner group">
                  <div className="flex items-start space-x-6">
                    <div className="inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded">
                      <SpeakerphoneOutline size={20} />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white leading-snug">
                        Foodies Announcement
                      </h2>
                      <p className="text-gray-600 group-hover:text-gray-100 mt-1 leading-relaxed">
                        Please checkout our Dinner night at Flamingo! Join us at
                        7pm with your family and friends on November 21, 2020!
                      </p>
                      <div className="flex items-center mt-4 divide-x">
                        <button className="focus:outline-none hover:text-red-600 group-hover:text-red-100 inline-flex items-center text-red-500 pr-5">
                          <HeartOutline size={18} className="mr-2" />
                          1.7k Likes
                        </button>
                        <div className="inline-flex items-center text-gray-600 group-hover:text-gray-100 pl-5">
                          <ChatOutline size={18} className="mr-2" />
                          841 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 px-6 py-8 rounded-md hover:shadow-inner group">
                  <div className="flex items-start space-x-6">
                    <div className="inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded">
                      <SpeakerphoneOutline size={20} />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white leading-snug">
                        Foodies Announcement
                      </h2>
                      <p className="text-gray-600 group-hover:text-gray-100 mt-1 leading-relaxed">
                        Please checkout our Dinner night at Flamingo! Join us at
                        7pm with your family and friends on November 21, 2020!
                      </p>
                      <div className="flex items-center mt-4 divide-x">
                        <button className="focus:outline-none hover:text-red-600 group-hover:text-red-100 inline-flex items-center text-red-500 pr-5">
                          <HeartOutline size={18} className="mr-2" />
                          1.7k Likes
                        </button>
                        <div className="inline-flex items-center text-gray-600 group-hover:text-gray-100 pl-5">
                          <ChatOutline size={18} className="mr-2" />
                          841 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-10 lg:px-0 lg:pl-10">
                <h3 className="flex items-center text-2xl font-bold text-gray-800">
                  <div className="inline-flex items-center justify-center text-white bg-gradient-to-r from-teal-500 to-blue-500 p-2 rounded mr-4">
                    <CalendarOutline size={18} />
                  </div>
                  <span
                    className="bg-gradient-to-r from-teal-500 to-blue-500"
                    style={{
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Upcoming Events
                  </span>
                </h3>
                <ul className="mt-4 space-y-8">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between group"
                    >
                      <h4 className="font-bold text-xl text-gray-700 truncate">
                        Dinner night at Flamingo!
                      </h4>
                      <ChevronRight
                        size={20}
                        className="text-gray-600 transform group-hover:translate-x-1 transition ease duration-200"
                      />
                    </a>
                    <p className="truncate text-gray-600 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <button className="bg-indigo-400 hover:bg-indigo-500 shadow mr-2 text-white font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                      Add to Calendar
                    </button>
                    <button className="border shadow border-indigo-400 hover:border-indigo-500 text-indigo-400 hover:text-indigo-500 font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                      View More
                    </button>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center justify-between group"
                    >
                      <h4 className="font-bold text-xl  group-hover:text-gray-700 text-gray-600 truncate">
                        Food fight at Eddy's
                      </h4>
                      <ChevronRight
                        size={20}
                        className="text-gray-600 transform group-hover:translate-x-1 transition ease duration-200"
                      />
                    </a>
                    <p className="truncate group-hover:text-gray-600 text-gray-500 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="hidden group-hover:block">
                      <button className="bg-teal-500 hover:bg-teal-600 shadow mr-2 text-white font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                        Add to Calendar
                      </button>
                      <button className="border shadow border-teal-500 hover:border-teal-600 hover:text-teal-600 text-teal-500 font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                        View More
                      </button>
                    </div>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center justify-between group"
                    >
                      <h4 className="font-bold text-xl  group-hover:text-gray-700 text-gray-600 truncate">
                        Napa Valley Wine Tasting
                      </h4>
                      <ChevronRight
                        size={20}
                        className="text-gray-600 transform group-hover:translate-x-1 transition ease duration-200"
                      />
                    </a>
                    <p className="truncate group-hover:text-gray-600 text-gray-500 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="hidden group-hover:block">
                      <button className="bg-teal-500 hover:bg-teal-600 shadow mr-2 text-white font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                        Add to Calendar
                      </button>
                      <button className="border shadow border-teal-500 hover:border-teal-600 hover:text-teal-600 text-teal-500 font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                        View More
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

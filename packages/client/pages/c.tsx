import {
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
import { NextLink } from '../components/shared/nextlink';
import { useGetCommunityQuery } from '../generated/graphql';

const Community: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: community, loading } = useGetCommunityQuery({
    variables: { id: Array.isArray(id) ? id[0] : id },
  });

  return (
    <div>
      {!loading && community ? (
        <main>
          <div className="fixed w-screen h-screen bg-gray-50 -z-1" />
          <AuthenticatedNavbar />
          <div className="bg-gray-800 h-48">
            <div className="container mx-auto py-6 border-t border-gray-700">
              <div className="flex items-center justify-between mb-7 mx-5 lg:mx-0">
                <div>
                  <h1 className="font-bold text-3xl mt-4 text-white">
                    {community.getCommunity.name}
                  </h1>
                  <p className="flex items-center text-gray-300">
                    <NextLink
                      href="/my-communities"
                      className="hover:text-gray-50"
                    >
                      My Communities
                    </NextLink>
                    <ChevronRight size={18} className="text-gray-500 mx-1" />
                    {community.getCommunity.name}
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-5">
                  {community.getCommunity.isCreator ? (
                    <button className="flex items-center focus:outline-none focus:shadow-outline px-5 py-2 leading-relaxed shadow bg-gradient-to-r from-teal-500 to-blue-500 focus-within:from-teal-600 focus:to-blue-600 text-white font-medium rounded transition ease duration-200">
                      <Flag size={15} className="mr-2" />
                      Post
                    </button>
                  ) : null}
                  <button className="focus:outline-none focus:shadow-outline px-5 py-2 leading-relaxed shadow bg-indigo-500 focus:bg-indigo-600 text-white font-medium rounded transition ease duration-200">
                    Join
                  </button>
                  <button className="focus:outline-none focus:shadow-outline px-5 py-2 leading-relaxed shadow bg-gray-700 focus:bg-gray-800 text-white font-medium rounded transition ease duration-200">
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
                      {community.getCommunity.location ? (
                        <a
                          target="_blank"
                          href={`https://www.google.com/maps/search/${community.getCommunity.location}`}
                          className="flex items-center text-red-500 hover:underline font-medium pl-4 pr-4"
                        >
                          <LocationMarker className="mr-2" size={20} />
                          {community.getCommunity.location}
                        </a>
                      ) : null}
                      <div className="flex items-center text-gray-500 font-medium pl-4">
                        <Flag className="mr-2" size={20} />
                        24 Posts
                      </div>
                    </div>
                    <p className="text-base leading-7 text-gray-700 mt-4 max-w-2xl">
                      {community.getCommunity.about}
                    </p>
                  </div>
                  <div className="bg-gray-50 border-t border-gray-200 w-full px-6 py-4 inline-flex items-center space-x-3">
                    {/* <img
                      className="inline-block h-7 w-7 rounded-full text-white shadow-solid"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Avatar Image"
                    /> */}
                    <p className="text-gray-700 font-xl">
                      Created by{' '}
                      <a className="text-indigo-500 hover:underline" href="#">
                        {community.getCommunity.creator.name}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row lg:grid-cols-12 lg:divide-x lg:divide-gray-200 lg:space-x-1 py-16 lg:py-12">
                  <section className="w-full mt-10 lg:mt-0 lg:w-2/3 px-5 space-y-4 border-t lg:border-none border-gray-200 pt-10 lg:pt-0">
                    {/* <div className="bg-white shadow-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 px-6 py-8 rounded-md hover:shadow-inner group">
                      <div className="flex items-start space-x-6">
                        <div className="inline-flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:shadow-md p-2 rounded">
                          <PresentationChartBar size={20} />
                        </div>
                        <div className="flex flex-col flex-start">
                          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white leading-snug">
                            Favorite Food
                          </h2>
                          <form>
                            <div className="space-y-2 mt-2">
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  className="form-radio text-indigo-500 group-hover:border-none"
                                />
                                <span className="ml-2 text-gray-600 group-hover:text-gray-100">
                                  Hotdogs
                                </span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  className="form-radio text-indigo-500 group-hover:border-none"
                                />
                                <span className="ml-2 text-gray-600 group-hover:text-gray-100">
                                  Cheese Pizza
                                </span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  className="form-radio text-indigo-500 group-hover:border-none"
                                />
                                <span className="ml-2 text-gray-600 group-hover:text-gray-100">
                                  Banana Split
                                </span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  className="form-radio text-indigo-500 group-hover:border-none"
                                />
                                <span className="ml-2 text-gray-600 group-hover:text-gray-100">
                                  Other
                                </span>
                              </label>
                            </div>
                            <button className="block mt-5 w-20 focus:outline-none focus:shadow-outline group-hover:bg-white group-hover:text-indigo-500 bg-indigo-500 text-white px-4 py-1 leading-relaxed font-semibold rounded shadow-sm">
                              Vote
                            </button>
                          </form>
                        </div>
                      </div>
                    </div> */}
                    <div className="bg-white shadow-sm hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 px-6 py-8 rounded-md hover:shadow-inner group">
                      <div className="flex items-start space-x-6">
                        <div className="inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-red-500 group-hover:shadow-md p-2 rounded">
                          <SpeakerphoneOutline size={20} />
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white leading-snug">
                            Foodies Announcement
                          </h2>
                          <p className="text-gray-600 group-hover:text-gray-100 mt-1 leading-relaxed">
                            Please checkout our Dinner night at Flamingo! Join
                            us at 7pm with your family and friends on November
                            21, 2020!
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
                    <div className="bg-white shadow-sm hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 px-6 py-8 rounded-md hover:shadow-inner group">
                      <div className="flex items-start space-x-6">
                        <div className="inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-red-500 p-2 group-hover:shadow-md rounded">
                          <SpeakerphoneOutline size={20} />
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white leading-snug">
                            Foodies Announcement
                          </h2>
                          <p className="text-gray-600 group-hover:text-gray-100 mt-1 leading-relaxed">
                            Please checkout our Dinner night at Flamingo! Join
                            us at 7pm with your family and friends on November
                            21, 2020!
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
                  </section>
                  <aside className="w-full lg:w-1/3 px-10 lg:px-0 lg:pl-6">
                    <h3 className="flex items-center text-2xl font-bold text-gray-800">
                      <div className="inline-flex items-center justify-center text-white bg-gradient-to-r from-teal-500 to-blue-500 p-2 rounded mr-4">
                        <CalendarOutline size={18} />
                      </div>
                      <span className="bg-gradient-to-r text-gradient from-teal-500 to-blue-500">
                        Upcoming Events
                      </span>
                    </h3>
                    <ul className="mt-4 space-y-8">
                      <li className="p-5 bg-white rounded shadow-sm">
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
                        <p className="text-gray-600 mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
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
                            className="group-hover:rotate-90 text-gray-600 transform group-hover:translate-x-1 transition ease duration-200"
                          />
                        </a>
                        <p className="truncate group-hover:text-gray-600 text-gray-500 mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
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
                            className="group-hover:rotate-90 text-gray-600 transform group-hover:translate-x-1 transition ease duration-200"
                          />
                        </a>
                        <p className="truncate group-hover:text-gray-600 text-gray-500 mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
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
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </div>
  );
};

export default Community;

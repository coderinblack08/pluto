import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import {
  ChevronRight,
  Flag,
  Pencil,
  Users,
  LocationMarker,
  Photograph,
  CalendarOutline,
} from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { NextLink } from '../components/nextlink';
import { AuthNavbar } from '../components/shared/AuthNavbar';
import { useFindPostsQuery, useGetCommunityQuery } from '../generated/graphql';

const CommunityPage: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const {
    query: { id },
  } = useRouter();
  const apolloFriendlyId = Array.isArray(id) ? id[0] : id;

  const { data: community, loading } = useGetCommunityQuery({
    variables: { id: apolloFriendlyId || '' },
  });

  const { data: posts } = useFindPostsQuery({
    variables: { communityId: apolloFriendlyId || '' },
  });

  return (
    <div>
      {!loading && community ? (
        <main>
          {!isDark ? (
            <div
              className="fixed w-screen h-screen bg-gray-100"
              style={{ zIndex: -1 }}
            />
          ) : null}
          <AuthNavbar />
          <Box bg={isDark ? 'gray.900' : 'gray.800'} h={48}>
            <div
              className={`container mx-auto py-6 border-t ${
                isDark ? 'border-gray-800' : 'border-gray-700'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between mb-7 mx-5 lg:mx-0">
                <div>
                  <h1 className="font-bold text-3xl mt-4 text-white">
                    {community.getCommunity.name}
                  </h1>
                  <p className="flex items-center text-gray-300">
                    <NextLink href="/browse" className="hover:text-gray-50">
                      Browse
                    </NextLink>
                    <ChevronRight size={18} className="text-gray-500 mx-1" />
                    {community.getCommunity.name}
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-5">
                  {community.getCommunity.isCreator ? (
                    <button
                      className="flex items-center justify-center focus:outline-none focus:shadow-outline bg-gradient-to-r from-blue-500 via-yellow-500 to-pink-500 rounded shadow"
                      style={{ padding: '2px' }}
                    >
                      <NextLink
                        href={`/post?id=${id}`}
                        className="flex items-center px-5 py-2 leading-relaxed bg-opacity-50 bg-gray-800 text-white font-medium rounded transition ease duration-200"
                      >
                        <Flag size={15} className="mr-2 text-gray-200" />
                        Post
                      </NextLink>
                    </button>
                  ) : null}
                  <Button
                    px={5}
                    display="flex"
                    colorScheme="indigo"
                    py="calc(1.25rem + 2px)"
                    className="bg-indigo-500 text-white font-medium transition ease duration-200"
                  >
                    Join
                  </Button>
                  <button className="focus:outline-none focus:shadow-outline px-5 py-2 leading-relaxed bg-gray-700 text-white font-medium rounded transition ease duration-200 cursor-pointer">
                    Contact
                  </button>
                </div>
              </div>
              <div className="container mx-auto pt-6">
                <div
                  className={`relative ${
                    isDark ? 'bg-gray-700' : 'bg-white'
                  } rounded-md shadow mx-5 lg:mx-0`}
                >
                  <button className="focus:outline-none focus:shadow-outline flex items-center absolute right-0 top-0 m-6 text-indigo-500">
                    <Pencil size={18} className="mr-1" />
                    Edit
                  </button>
                  <div className="p-6">
                    <div className="flex items-center divide-x-2 divide-gray-200">
                      <div
                        className={`flex items-center ${
                          isDark ? 'text-indigo-300' : 'text-indigo-500'
                        } font-medium pr-4`}
                      >
                        <Users className="mr-2" size={20} />
                        1.2k Members
                      </div>
                      {community.getCommunity.location ? (
                        <a
                          target="_blank"
                          href={`https://www.google.com/maps/search/${community.getCommunity.location}`}
                          className={`flex items-center ${
                            isDark ? 'text-red-300' : 'text-red-500'
                          } hover:underline font-medium pl-4 pr-4`}
                        >
                          <LocationMarker className="mr-2" size={20} />
                          {community.getCommunity.location}
                        </a>
                      ) : null}
                      <div
                        className={`flex items-center ${
                          isDark ? 'text-gray-300' : 'text-gray-500'
                        } font-medium pl-4`}
                      >
                        <Flag className="mr-2" size={20} />
                        {community.getCommunity.posts} Posts
                      </div>
                    </div>
                    <p
                      className={`text-base leading-7 ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      } mt-4 max-w-3xl`}
                    >
                      {community.getCommunity.about}
                    </p>
                  </div>
                  <div
                    className={`bg-gray-50 border-t ${
                      isDark ? 'border-gray-600' : 'border-gray-200'
                    } w-full px-6 py-4 inline-flex items-center space-x-3 rounded-b`}
                  >
                    <p
                      className={`${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      } font-xl`}
                    >
                      Created by{' '}
                      <NextLink
                        className={`${
                          isDark ? 'text-indigo-300' : 'text-indigo-500'
                        } hover:underline focus:shadow-outline`}
                        href="#"
                      >
                        {community.getCommunity.creator.name}
                      </NextLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row lg:grid-cols-12 lg:space-x-1 py-16 lg:py-12">
                  <section className="w-full mt-10 lg:mt-0 lg:w-2/3 px-5 space-y-4 border-t lg:border-none border-gray-200 pt-10 lg:pt-0">
                    {!posts?.findPosts.length ? (
                      <div
                        className={`border-2 ${
                          isDark
                            ? 'bg-gray-700 bg-opacity-25 border-gray-700 text-gray-300'
                            : 'bg-white bg-opacity-75 border-gray-200 text-gray-500'
                        } border-dashed py-16 rounded-lg flex flex-col items-center`}
                      >
                        <div className="relative mb-16 -ml-8">
                          <Photograph
                            size={48}
                            className="absolute z-10 left-0 -ml-1 top-0 text-indigo-200 -mt-2"
                          />
                          <Photograph
                            size={38}
                            className="absolute z-0 top-0 -ml-10 mt-1 transform -rotate-12 text-gray-300 mb-2"
                          />
                          <Photograph
                            size={38}
                            className="absolute z-0 top-0 ml-10 mt-1 transform rotate-12 text-gray-300 mb-2"
                          />
                        </div>
                        <h3 className="text-lg mt-2">
                          No Posts Found
                          {community.getCommunity.isCreator ? (
                            <div className="inline">
                              .
                              <NextLink
                                href={`/post?id=${id}`}
                                className="inline text-indigo-400 hover:underline ml-1"
                              >
                                Create One
                              </NextLink>
                            </div>
                          ) : null}
                        </h3>
                      </div>
                    ) : (
                      posts?.findPosts.map((post, index) => (
                        <Card
                          id={post.id}
                          index={index}
                          key={post.id}
                          title={post.announcement.title}
                          announcement={post.announcement.announcement}
                          likes={post.likes}
                          comments={post.comments}
                          communityId={apolloFriendlyId}
                          isLiked={post.isLiked}
                          isFirst={!index}
                        />
                      ))
                    )}
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
                      <li
                        className={`p-5 ${
                          isDark ? 'bg-gray-700 bg-opacity-50' : 'bg-white'
                        } rounded shadow-sm`}
                      >
                        <a
                          href="#"
                          className="flex items-center justify-between group"
                        >
                          <h4
                            className={`font-bold text-xl ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            } truncate mb-1`}
                          >
                            Dinner night at Flamingo!
                          </h4>
                          <ChevronRight
                            size={20}
                            className={`${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            } transform group-hover:translate-x-1 transition ease duration-200`}
                          />
                        </a>
                        <p
                          className={`${
                            isDark ? 'text-gray-500' : 'text-gray-600'
                          } mb-4`}
                        >
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
                      <Accordion mt={4} className="space-y-8" allowToggle>
                        <AccordionItem border="none">
                          <AccordionButton>
                            <Box flex="1" textAlign="left">
                              <Text
                                className={`font-bold text-xl ${
                                  isDark ? 'text-gray-500' : 'text-gray-600'
                                } truncate`}
                              >
                                Food fight at Eddy's
                              </Text>
                            </Box>
                            <AccordionIcon
                              color={isDark ? 'gray.500' : 'gray.600'}
                            />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            <p className="group-hover:text-gray-600 text-gray-500 mb-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                            <Box mt={2}>
                              <button className="bg-teal-500 hover:bg-teal-600 shadow mr-2 text-white font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                                Add to Calendar
                              </button>
                              <button className="border shadow border-teal-500 hover:border-teal-600 hover:text-teal-600 text-teal-500 font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                                View More
                              </button>
                            </Box>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border="none">
                          <AccordionButton>
                            <Box flex="1" textAlign="left">
                              <Text
                                className={`font-bold text-xl ${
                                  isDark ? 'text-gray-500' : 'text-gray-600'
                                } truncate`}
                              >
                                Napa Valley Wine Tasting
                              </Text>
                            </Box>
                            <AccordionIcon
                              color={isDark ? 'gray.500' : 'gray.600'}
                            />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            <p className="group-hover:text-gray-600 text-gray-500 mb-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                            <Box mt={2}>
                              <button className="bg-teal-500 hover:bg-teal-600 shadow mr-2 text-white font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                                Add to Calendar
                              </button>
                              <button className="border shadow border-teal-500 hover:border-teal-600 hover:text-teal-600 text-teal-500 font-semibold focus:outline-none focus:shadow-outline py-1 leading-loose text-sm px-3 rounded">
                                View More
                              </button>
                            </Box>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </Box>
        </main>
      ) : null}
    </div>
  );
};

export default CommunityPage;

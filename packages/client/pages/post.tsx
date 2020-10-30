import classNames from 'classnames';
import { Form, Formik } from 'formik';
import {
  ChevronLeftOutline,
  PaperAirplane,
  PresentationChartBar,
} from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../components/forms/InputField';
import { AuthenticatedNavbar } from '../components/shared/navigation/AuthenticatedNavbar';
import { NextLink } from '../components/shared/nextlink';
import { Tabs } from '../components/shared/tabs';
import { useGetCommunityQuery } from '../generated/graphql';
import { toFormikValues } from '../utils/toFormikValues';

const Post: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: community } = useGetCommunityQuery({
    variables: { id: Array.isArray(id) ? id[0] : id },
  });

  return (
    <div>
      <AuthenticatedNavbar />
      <div className="fixed w-screen h-screen bg-gray-50 -z-1" />
      <svg
        className="absolute -z-1 hidden lg:block right-0 transform translate-x-1/2 mt-20"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            name="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-300 opacity-75"
              fill="currentColor"
            ></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        ></rect>
      </svg>
      <svg
        className="absolute -z-1 hidden lg:block left-0 transform -translate-x-1/2 translate-y-full"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            name="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="currentColor"
            ></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        ></rect>
      </svg>
      <Tabs numberOfTabs={1}>
        {({ onTab, setTab }) => (
          <div className="my-20">
            <div className="mx-auto max-w-xl">
              <NextLink
                href={`/c?id=${id}`}
                className="group mb-5 px-3 py-1 -ml-3 rounded inline-flex items-center hover:text-indigo-500 font-semibold text-gray-600 focus:outline-none focus:shadow-outline"
              >
                <ChevronLeftOutline
                  size={15}
                  className="mr-1 transform group-hover:-translate-x-1 transition ease duration-200"
                />
                Go Back
              </NextLink>
              <h1 className="text-2xl font-bold text-gray-800">
                Post for {community?.getCommunity.name}
              </h1>
              <p className="text-gray-600 mb-5">
                Stuck or Confused?{' '}
                <a href="#" className="hover:underline text-indigo-500">
                  Get Help
                </a>
              </p>
              <div className="flex items-center">
                <button
                  className={classNames(
                    'focus:outline-none flex items-center text-lg font-medium justify-center px-5 py-2',
                    {
                      'rounded shadow-sm text-indigo-500 bg-white': onTab(0),
                      'text-gray-600': !onTab(0),
                    }
                  )}
                  onClick={() => setTab(0)}
                >
                  <PresentationChartBar size={20} className="mr-1" />
                  Announcement
                </button>
                <button
                  className={classNames(
                    'focus:outline-none flex items-center text-lg font-medium justify-center px-8 py-2',
                    {
                      'rounded shadow-sm text-indigo-500 bg-white': onTab(1),
                      'text-gray-600': !onTab(1),
                    }
                  )}
                  onClick={() => setTab(1)}
                >
                  <PresentationChartBar size={20} className="mr-1" />
                  Poll
                </button>
              </div>
            </div>
            <div className="p-6 bg-white max-w-xl mx-auto shadow mt-4 rounded">
              {onTab(0) ? (
                <Formik
                  initialValues={toFormikValues(['title', 'announcement'])}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {() => (
                    <Form>
                      <div className="space-y-6 mx-auto max-w-lg">
                        <InputField
                          name="title"
                          label="Title"
                          placeholder="My Announcement"
                        />
                        <InputField
                          name="announcement"
                          label="Announcement"
                          placeholder="Hello World..."
                          textarea
                        />
                        <button className="text-center flex items-center justify-start w-full max-w-lg focus:outline-none focus:shadow-outline px-4 py-2 rounded shadow-sm bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">
                          <span className="text-orange-300">
                            <PaperAirplane size={18} />
                          </span>
                          <span className="mx-auto text-orange-200">
                            Create Post
                          </span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              ) : (
                <p className="text-gray-600 font-medium">Coming Soon!</p>
              )}
            </div>
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default Post;

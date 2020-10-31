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
import {
  AnnouncementArgs,
  FindPostsDocument,
  FindPostsQuery,
  useCreateAnnouncementMutation,
  useFindPostsQuery,
  useGetCommunityQuery,
} from '../generated/graphql';

const Post: React.FC = () => {
  const {
    query: { id },
    push,
  } = useRouter();

  const apolloFriendlyId = Array.isArray(id) ? id[0] : id;

  const { data: community } = useGetCommunityQuery({
    variables: { id: apolloFriendlyId },
  });

  const { data: posts } = useFindPostsQuery({
    variables: { communityId: apolloFriendlyId },
  });

  const [createAnnouncement] = useCreateAnnouncementMutation();

  return (
    <div>
      <AuthenticatedNavbar />
      <div className="fixed w-screen h-screen bg-gray-50 -z-1" />
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
                  initialValues={{
                    title: '',
                    announcement: '',
                    pinned: false,
                  }}
                  onSubmit={async (values) => {
                    console.log(values);
                    await createAnnouncement({
                      variables: {
                        options: {
                          ...values,
                          communityId: id,
                        } as AnnouncementArgs,
                      },
                      update: (cache, { data }) => {
                        cache.writeQuery<FindPostsQuery>({
                          query: FindPostsDocument,
                          variables: {
                            communityId: apolloFriendlyId,
                          },
                          data: {
                            __typename: 'Query',
                            findPosts: [
                              data.createAnnouncement.post,
                              ...(posts.findPosts || []),
                            ],
                          },
                        });
                      },
                    });
                    push(`/c?id=${id}`);
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
                        <div className="flex items-center">
                          <InputField
                            name="pinned"
                            type="checkbox"
                            wrapper="flex items-center flex-row-reverse"
                            className="form-checkbox border-gray-400 cursor-pointer transition ease duration-200 mr-2"
                            labelStyles="text-gray-700"
                            label="Pin post to top?"
                          />
                        </div>
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

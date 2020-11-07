import { Listbox, Transition } from '@headlessui/react';
import { communitySchema } from '@pluto/common';
import classNames from 'classnames';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { InputField } from '../components/forms/InputField';
import { TagsField } from '../components/forms/TagsField';
import { AuthenticatedNavbar } from '../components/shared/navigation/AuthenticatedNavbar';
import { Tabs } from '../components/shared/tabs';
import { categories } from '../constants/categories';
import {
  CommunityArgs,
  useCreateCommunityMutation,
} from '../generated/graphql';

const onKeyDown = (keyEvent: any) => {
  if (keyEvent.key === 'Enter') {
    keyEvent.preventDefault();
  }
};

const secondTabPanel = (
  <div className="p-8 space-y-8">
    <div className="max-w-lg">
      <InputField
        name="email"
        placeholder="contact@example.com"
        label="Email Address"
      />
    </div>
    <div className="max-w-lg">
      <InputField name="location" placeholder="Location" label="Location" />
    </div>
    <div className="max-w-lg">
      <InputField
        type="number"
        name="maxParticipants"
        placeholder="50"
        label="Maximum Members"
      />
    </div>
    <div>
      <h3 className="text-gray-800 font-medium mb-2">Options</h3>
      <div className="space-y-3">
        <InputField
          name="isSchool"
          type="checkbox"
          wrapper="flex items-center flex-row-reverse"
          className="form-checkbox border-gray-400 cursor-pointer transition ease duration-200 mr-2 text-indigo-500"
          labelStyles="text-gray-700 mr-auto"
          label={
            <p>
              School or Classroom{' '}
              <span className="text-gray-600">(enables gradebook)</span>
            </p>
          }
        />
        <InputField
          name="isPrivate"
          type="checkbox"
          wrapper="flex items-center flex-row-reverse"
          className="form-checkbox border-gray-400 cursor-pointer transition ease duration-200 mr-2 text-indigo-500"
          labelStyles="text-gray-700 mr-auto"
          label={
            <p>
              Private Community{' '}
              <span className="text-gray-600">(requires access code)</span>
            </p>
          }
        />
        <InputField
          name="emailNotifications"
          type="checkbox"
          wrapper="flex items-center flex-row-reverse"
          className="form-checkbox border-gray-400 cursor-pointer transition ease duration-200 mr-2 text-indigo-500"
          labelStyles="text-gray-700 mr-auto"
          label="Email Notifications"
        />
      </div>
    </div>
  </div>
);

const Create: React.FC = () => {
  const [createCommunity] = useCreateCommunityMutation();
  const [selectedCategory, setSelectedCategory] = useState(
    categories[categories.length - 1]
  );
  const router = useRouter();

  return (
    <div>
      <AuthenticatedNavbar />
      <div className="flex items-center justify-between px-5 container mx-auto border-b py-6">
        <h1 className="text-xl text-gray-800 font-medium">Create Community</h1>
      </div>
      <div className="bg-gray-100 py-10 min-h-screen overflow-y-scroll">
        <div className="container mx-auto px-5">
          <Tabs numberOfTabs={2}>
            {({ onTab, setTab }) => (
              <div className="flex items-start flex-col lg:flex-row lg:space-x-8">
                <div className="flex flex-col max-w-xs md:max-w-none md:flex-row lg:flex-col lg:max-w-xs xl:max-w-sm w-full lg:space-y-5 mb-5 lg:mb-0">
                  <button
                    type="button"
                    className={classNames(
                      'flex flex-col items-start py-5 px-8 rounded-md focus:outline-none',
                      {
                        'bg-white shadow': onTab(0),
                      }
                    )}
                    onClick={() => setTab(0)}
                  >
                    <div
                      className={classNames('text-gray-700', {
                        'text-indigo-500': onTab(0),
                      })}
                    >
                      <h2 className="text-2xl font-semibold">
                        General Information
                      </h2>
                    </div>
                    <p className="text-gray-600">
                      Overview about your community
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab(1)}
                    className={classNames(
                      'flex flex-col items-start py-5 px-8 rounded-md focus:outline-none ',
                      {
                        'bg-white shadow': onTab(1),
                      }
                    )}
                  >
                    <div
                      className={classNames('text-gray-700', {
                        'text-indigo-500': onTab(1),
                      })}
                    >
                      <h2 className="text-2xl font-semibold">
                        Contacts & Settings
                      </h2>
                    </div>
                    <p className="text-gray-600">
                      Customizable options and contacts
                    </p>
                  </button>
                </div>
                <div className="w-full">
                  <Formik
                    initialValues={{
                      name: '',
                      about: '',
                      website: '',
                      email: '',
                      location: '',
                      category: '',
                      tags: [],
                      isPrivate: false,
                      isSchool: false,
                      emailNotifications: true,
                    }}
                    validationSchema={communitySchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={async (values) => {
                      values.category = selectedCategory;
                      try {
                        const community = await createCommunity({
                          variables: { options: values as CommunityArgs },
                          update: async (cache) => {
                            cache.evict({ fieldName: 'findCommunities' });
                          },
                        });
                        if (!community.errors) {
                          router.push(
                            `/c?id=${community.data.createCommunity.community.id}`
                          );
                        }
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    {({ setFieldValue, isSubmitting }) => (
                      <Form
                        className="bg-white shadow-md rounded-lg"
                        onKeyDown={onKeyDown}
                      >
                        {onTab(0) ? (
                          <div className="p-8 space-y-8">
                            <div className="max-w-lg">
                              <InputField
                                name="name"
                                placeholder="Example"
                                label="Name"
                                isRequired
                              />
                            </div>
                            <div className="max-w-lg">
                              <TagsField
                                name="tags"
                                setFormikValues={setFieldValue}
                              />
                            </div>
                            <div className="w-full max-w-xs">
                              <Listbox
                                as="div"
                                className="space-y-1"
                                value={selectedCategory}
                                onChange={setSelectedCategory as any}
                              >
                                {({ open }) => (
                                  <>
                                    <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700 mb-1">
                                      Assigned Category
                                    </Listbox.Label>
                                    <div className="relative">
                                      <span className="inline-block w-full rounded-md shadow-sm">
                                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                          <span className="block truncate text-gray-700">
                                            {selectedCategory}
                                          </span>
                                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <svg
                                              className="h-5 w-5 text-gray-400"
                                              viewBox="0 0 20 20"
                                              fill="none"
                                              stroke="currentColor"
                                            >
                                              <path
                                                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </svg>
                                          </span>
                                        </Listbox.Button>
                                      </span>

                                      <Transition
                                        show={open}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                        className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                                      >
                                        <Listbox.Options
                                          static
                                          className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                        >
                                          {categories.map((person) => (
                                            <Listbox.Option
                                              key={person}
                                              value={person}
                                            >
                                              {({ selected, active }) => (
                                                <div
                                                  className={`${
                                                    active
                                                      ? 'text-white bg-indigo-500'
                                                      : 'text-gray-800'
                                                  } cursor-default select-none relative py-2 pl-8 pr-4`}
                                                >
                                                  <span
                                                    className={`${
                                                      selected
                                                        ? 'font-medium'
                                                        : 'font-normal'
                                                    } block truncate pl-1`}
                                                  >
                                                    {person}
                                                  </span>
                                                  {selected && (
                                                    <span
                                                      className={`${
                                                        active
                                                          ? 'text-white'
                                                          : 'text-indigo-500'
                                                      } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                    >
                                                      <svg
                                                        className="h-5 w-5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                      >
                                                        <path
                                                          fillRule="evenodd"
                                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                          clipRule="evenodd"
                                                        />
                                                      </svg>
                                                    </span>
                                                  )}
                                                </div>
                                              )}
                                            </Listbox.Option>
                                          ))}
                                        </Listbox.Options>
                                      </Transition>
                                    </div>
                                  </>
                                )}
                              </Listbox>
                            </div>
                            <div className="max-w-lg">
                              <InputField
                                name="website"
                                placeholder="https://example.com"
                                label="Website"
                              />
                            </div>
                            <div className="max-w-xl">
                              <InputField
                                name="about"
                                placeholder="Example..."
                                footer="Describe your community with a few words"
                                label="About"
                                textarea
                                isRequired
                              />
                            </div>
                          </div>
                        ) : (
                          secondTabPanel
                        )}
                        <div className="mt-10 space-x-3 flex rounded-b-md items-center justify-end py-2 px-3 border-t border-gray-200 bg-gray-50">
                          <button
                            type="button"
                            className="focus:outline-none focus:shadow-outline px-6 py-3 rounded-md shadow-md bg-white text-indigo-500"
                          >
                            Save
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="focus:outline-none focus:shadow-outline px-6 py-3 rounded-md shadow-md text-white bg-indigo-500"
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Create;

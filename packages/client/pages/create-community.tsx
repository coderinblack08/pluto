import React from 'react';
import classNames from 'classnames';
import { Form, Formik } from 'formik';
import { communitySchema } from '@pluto/common';
import { InputField } from '../components/forms/InputField';
import { AuthenticatedNavbar } from '../components/shared/navigation/AuthenticatedNavbar';
import { Tabs } from '../components/shared/tabs';
import { toFormikValues } from '../utils/toFormikValues';
import { TagsField } from '../components/forms/TagField';

const onKeyDown = (keyEvent) => {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
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
        name="maximumMembers"
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
          label="School or Classroom (enables gradebook)"
        />
        <InputField
          name="isPrivate"
          type="checkbox"
          wrapper="flex items-center flex-row-reverse"
          className="form-checkbox border-gray-400 cursor-pointer transition ease duration-200 mr-2 text-indigo-500"
          labelStyles="text-gray-700 mr-auto"
          label="Private Community (requires access code)"
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
                <div className="flex flex-col max-w-xs md:max-w-none md:flex-row lg:flex-col lg:max-w-xs xl:max-w-sm w-full space-y-5 mb-5 lg:mb-0">
                  <button
                    type="button"
                    className={classNames(
                      'flex flex-col items-start py-5 px-8 rounded-md focus:outline-none',
                      {
                        'bg-white shadow-sm': onTab(0),
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
                      'flex flex-col items-start py-5 px-8 rounded-md focus:outline-none',
                      {
                        'bg-white shadow-sm': onTab(1),
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
                    initialValues={toFormikValues([
                      'name',
                      'about',
                      'website',
                      'email',
                      'location',
                      'tags',
                      'isPrivate',
                      'isSchool',
                      'maximumMembers',
                      'emailNotifications',
                    ])}
                    validationSchema={communitySchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={(values) => console.log(values)}
                  >
                    {({ setFieldValue }) => (
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
                                label="Name*"
                              />
                            </div>
                            <div className="max-w-lg">
                              <TagsField
                                name="tags"
                                placeholder="Enter tags..."
                                setFormikValues={setFieldValue}
                              />
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
                                label={
                                  <p>
                                    About
                                    <span className="text-red-500">*</span>
                                  </p>
                                }
                                textarea
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

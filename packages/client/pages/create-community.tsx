import classNames from 'classnames';
import { Form, Formik } from 'formik';
import { isNode } from 'graphql/language/ast';
import { CogOutline, GlobeAltOutline } from 'heroicons-react';
import React from 'react';
import { InputField } from '../components/forms/InputField';
import { AuthenticatedNavbar } from '../components/shared/navigation/AuthenticatedNavbar';
import { Tabs } from '../components/shared/tabs';

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
              <div className="flex items-start gap-x-10">
                <div className="flex flex-col max-w-xs w-full space-y-5">
                  <button
                    role="tab"
                    className={classNames('p-5 rounded-md focus:outline-none', {
                      'border-l-8 border-indigo-500 bg-white shadow-sm': onTab(
                        0
                      ),
                    })}
                    onClick={() => setTab(0)}
                  >
                    <div
                      className={classNames(
                        'pl-2 flex items-center text-gray-700',
                        { 'text-indigo-500': onTab(0) }
                      )}
                    >
                      <GlobeAltOutline className="-mr-1" />
                      <h2 className="text-2xl font-semibold ml-3">
                        General Information
                      </h2>
                    </div>
                    <p className="text-gray-600 ml-3">
                      Overview about your community
                    </p>
                  </button>
                  <button
                    role="tab"
                    onClick={() => setTab(1)}
                    className={classNames('p-5 rounded-md focus:outline-none', {
                      'border-l-8 border-indigo-500 bg-white shadow-sm': onTab(
                        1
                      ),
                    })}
                  >
                    <div
                      className={classNames(
                        'pl-2 flex items-center text-gray-700',
                        { 'text-indigo-500': onTab(1) }
                      )}
                    >
                      <CogOutline className="-mr-1" />
                      <h2 className="text-2xl font-semibold ml-3">
                        Contacts & Settings
                      </h2>
                    </div>
                    <p className="text-gray-600 ml-3">
                      Customizable options and contacts
                    </p>
                  </button>
                </div>
                <div className="w-full">
                  <Formik
                    initialValues={{ name: '', about: '', website: '' }}
                    onSubmit={(values) => console.log(values)}
                  >
                    {() => (
                      <Form className="bg-white shadow-md rounded-lg">
                        {onTab(0) ? (
                          <div className="p-8 space-y-8">
                            <div className="max-w-lg">
                              <InputField
                                name="name"
                                placeholder="Example"
                                label="Name"
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
                                label="About"
                                textarea
                              />
                            </div>
                          </div>
                        ) : null}
                        <div className="mt-10 space-x-3 flex rounded-b-md items-center justify-end py-2 px-3 border-t border-gray-200 bg-gray-50">
                          <button className="focus:outline-none focus:shadow-outline px-6 py-3 rounded-md shadow-md bg-white text-indigo-500">
                            Save
                          </button>
                          <button className="focus:outline-none focus:shadow-outline px-6 py-3 rounded-md shadow-md text-white bg-indigo-500">
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

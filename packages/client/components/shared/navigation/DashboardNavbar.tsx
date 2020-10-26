import { Plus } from 'heroicons-react';
import React from 'react';
import { useMeQuery } from '../../../generated/graphql';
import { UserDropdown } from '../dropdown/user';

export const DashboardNavbar: React.FC = ({}) => {
  const { data: me } = useMeQuery();

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto">
        <div className="flex space-x-10 items-center">
          <div className="flex items-center space-x-2">
            <img
              src={require('../../../public/static/logo-light.svg')}
              className="w-8 md:h-auto h-8 md:w-auto"
              alt="Pluto Logo"
            />
            <span className="text-gray-200 text-xl md:text-2xl font-medium">
              Pluto
            </span>
          </div>
          <ul className="flex items-center ml-10 space-x-5">
            <li>
              <a
                href="#"
                className="whitespace-no-wrap px-4 py-3 rounded-md text-gray-200 bg-gray-900 font-medium shadow-inner"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="whitespace-no-wrap px-4 py-3 rounded-md text-gray-300 bg-gray-800 font-medium shadow-inner"
              >
                My Communities
              </a>
            </li>
            <li>
              <a
                href="#"
                className="whitespace-no-wrap px-4 py-3 rounded-md text-gray-300 bg-gray-800 font-medium shadow-inner"
              >
                Browse
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4 mt-5 lg:mt-0">
          <button className="shadow-lg leading-none flex items-center px-4 py-2 text-white font-medium rounded-md bg-indigo-500">
            <Plus size={25} className="mr-1" />
            Create
          </button>
          {!!me ? <UserDropdown dark /> : null}
        </div>
      </div>
    </div>
  );
};

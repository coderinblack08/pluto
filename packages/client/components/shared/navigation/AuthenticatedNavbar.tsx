import classNames from 'classnames';
import { DotsHorizontalOutline, Plus } from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { useMeQuery } from '../../../generated/graphql';
import { UserDropdown } from '../dropdown/user';
import { NextLink } from '../nextlink';

export const AuthenticatedNavbar: React.FC = ({}) => {
  const { data: me, loading } = useMeQuery();
  const router = useRouter();

  const isOnRoute = (...routes: string[]) => routes.includes(router.pathname);

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex flex-row items-center justify-between container mx-auto">
        <div className="flex space-x-12 items-center">
          <NextLink href="/dashboard" className="flex items-center space-x-2">
            <img
              src={require('../../../public/static/logo-light.svg')}
              className="w-8 md:h-auto h-8 md:w-auto"
              alt="Pluto Logo"
            />
            <span className="text-gray-200 text-xl md:text-2xl font-medium">
              Pluto
            </span>
          </NextLink>
          <ul className="flex items-center space-x-5">
            <li>
              <NextLink
                href="/dashboard"
                className={classNames(
                  'whitespace-no-wrap px-4 py-3 text-md rounded-md text-gray-300 hover:text-gray-100 transition ease duration-200 bg-gray-800 font-medium shadow-inner',
                  {
                    'bg-gray-900 text-gray-100 hover:bg-opacity-75': isOnRoute(
                      '/dashboard'
                    ),
                  }
                )}
              >
                Dashboard
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/my-communities"
                className={classNames(
                  'whitespace-no-wrap px-4 py-3 text-md rounded-md text-gray-300 hover:text-gray-100 transition ease duration-200 bg-gray-800 font-medium shadow-inner',
                  {
                    'bg-gray-900 text-gray-100 hover:bg-opacity-75': isOnRoute(
                      '/c',
                      '/my-communities'
                    ),
                  }
                )}
              >
                My Communities
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/browse"
                className={classNames(
                  'whitespace-no-wrap px-4 py-3 text-md rounded-md text-gray-300 hover:text-gray-100 transition ease duration-200 bg-gray-800 font-medium shadow-inner',
                  {
                    'bg-gray-900 text-gray-100 hover:bg-opacity-75': isOnRoute(
                      '/browse'
                    ),
                  }
                )}
              >
                Browse
              </NextLink>
            </li>
            <li>
              <button className="block lg:hidden whitespace-no-wrap px-4 py-3 text-md rounded-md text-gray-300 hover:text-gray-100 transition ease duration-200 bg-gray-800 font-medium shadow-inner">
                <DotsHorizontalOutline />
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center space-x-4 mt-5 lg:mt-0">
          <NextLink
            href="/create-community"
            className="focus:outline-none focus:shadow-outline shadow-lg leading-none flex items-center px-4 py-2 text-white font-medium rounded-md bg-indigo-500"
          >
            <Plus size={25} className="mr-1" />
            Create
          </NextLink>
          {!loading && me && !!me?.me ? <UserDropdown dark /> : null}
        </div>
      </div>
    </div>
  );
};

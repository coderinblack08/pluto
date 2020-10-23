import classNames from 'classnames';
import { ChevronDown, MenuAlt4, X } from 'heroicons-react';
import React from 'react';

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={classNames(
        'bg-white border-b border-gray-200 bg-opacity-25 p-4 rounded-md relative z-10',
        {
          'shadow-md md:shadow-none m-3 md:m-0': open,
        }
      )}
      style={{
        opacity: 5,
        backdropFilter: 'blur(3px)',
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto">
        <div className="flex items-center justify-between w-full">
          <div
            className={classNames('flex items-center space-x-2', {
              'px-2': open,
            })}
          >
            <span className="sr-only">Home</span>
            <img
              src="../../../static/logo.svg"
              alt="Pluto Logo"
              className="w-8 md:h-auto h-8 md:w-auto"
            />
            <h1 className="text-gray-700 text-2xl md:text-3xl font-medium">
              Pluto
            </h1>
          </div>
          <button
            className="flex items-center justify-center md:hidden text-gray-700 hover:text-gray-600 p-3 focus:bg-gray-200 focus:outline-none rounded-md"
            onClick={() => setOpen(!open)}
          >
            {!open ? <MenuAlt4 size={24} /> : <X size={24} />}
          </button>
        </div>
        <div
          className={classNames(
            'md:flex md:flex-row md:py-0 md:w-auto md:items-center whitespace-no-wrap',
            {
              'flex flex-col items-start justify-start w-full py-2': open,
              hidden: !open,
            }
          )}
        >
          <a
            href="#"
            className="inline-flex items-center justify-between md:justify-start font-normal box-border text-gray-700 md:mr-4 px-4 py-3 hover:bg-gray-200 w-full rounded-md"
          >
            Solutions
            <div className="ml-2 text-gray-700">
              <ChevronDown size={18} />
            </div>
          </a>
          <a
            href="#"
            className="font-normal box-border text-gray-700 md:mr-4 px-4 py-3 hover:bg-gray-200 w-full rounded-md"
          >
            Pricing
          </a>
          <a
            href="#"
            className="font-normal box-border text-gray-700 md:mr-4 px-4 py-3 hover:bg-gray-200 w-full rounded-md"
          >
            Sign in
          </a>
          <button className="mt-3 sm:mt-0 font-medium focus:outline-none focus:shadow-outline inline-block w-full px-4 py-2 bg-gray-800 text-white rounded-md transition ease-in-out duration-150 focus:bg-gray-900 hover:bg-gray-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

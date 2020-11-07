import { Collection, SortDescendingOutline, ViewGrid } from 'heroicons-react';
import React from 'react';
import { AuthenticatedNavbar } from '../components/shared/navigation/AuthenticatedNavbar';

const Dashboard: React.FC = () => {
  return (
    <div>
      <AuthenticatedNavbar />
      <div className="bg-white w-full min-h-screen">
        <div className="flex items-center justify-between px-5 container mx-auto border-b py-6">
          <h3 className="text-xl text-gray-800 font-medium">
            <span className="font-medium">12</span> Communities
          </h3>
          <div className="flex items-center space-x-5">
            <button className="focus:outline-none focus:shadow-outline inline-flex items-center border shadow-sm rounded-md px-4 py-2 text-gray-600">
              <SortDescendingOutline size={18} className="mr-2" />
              Sort By
            </button>
            <div className="cursor-pointer flex items-center space-x-2 text-gray-500 bg-gray-100 p-1 shadow-inner rounded-md">
              <button className="focus:outline-none p-2 bg-white rounded-md shadow-md">
                <ViewGrid />
              </button>
              <button className="focus:outline-none p-2 rounded-sm">
                <Collection />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-5 ">
          <h1 className="text-2xl font-bold text-gray-800">Recently Posted</h1>
        </div>
      </div>
      <div className="border-t-2 bg-gray-200 py-10">
        <div className="container px-5 mx-auto space-y-8">
          <div className="flex items-start space-x-4">
            <img
              src={require('../public/static/party-popper.svg')}
              aria-hidden
            />
            <div className="mt-1">
              <h1 className="text-2xl font-bold text-gray-800">
                Announcment Board
              </h1>
              <p className="text-lg text-gray-600">
                Suggested announcments from your communities
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;

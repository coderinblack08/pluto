import classNames from 'classnames';
import { Flag, LocationMarker, Users } from 'heroicons-react';
import React from 'react';
import { AuthenticatedNavbar } from '../components/shared/navigation/AuthenticatedNavbar';
import { NextLink } from '../components/shared/nextlink';
import {
  FindCommunitiesQuery,
  useFindCommunitiesQuery,
} from '../generated/graphql';

const Browse: React.FC = () => {
  const { data: communities, fetchMore, variables } = useFindCommunitiesQuery({
    variables: { options: { limit: 2, cursor: null } },
  });

  console.log(communities);

  return (
    <main>
      <AuthenticatedNavbar />
      <div className="fixed w-screen h-screen bg-gray-50 -z-1" />
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-2xl font-bold">Explore Communities</h1>
        <div className="flex flex-col lg:flex-row items-start lg:space-x-10 mt-6">
          <ul
            className="flex-flex-col divide-y divide-gray-200 bg-white rounded shadow-sm border border-gray-200"
            style={{ width: '20rem' }}
          >
            <li className="px-6 py-3 bg-gray-100">
              <h2 className="font-medium text-gray-900">Categories</h2>
            </li>
            <li className="px-6 py-3">
              <p className="text-indigo-500 font-medium whitespace-no-wrap">
                Gaming
              </p>
            </li>
            <li className="px-6 py-3">
              <p className="text-gray-700 hover:text-gray-900 whitespace-no-wrap">
                Sports
              </p>
            </li>
            <li className="px-6 py-3">
              <p className="text-gray-700 hover:text-gray-900 whitespace-no-wrap">
                News
              </p>
            </li>
            <li className="px-6 py-3">
              <p className="text-gray-700 hover:text-gray-900 whitespace-no-wrap">
                Science / Technology
              </p>
            </li>
          </ul>
          <div className="flex flex-col w-full mt-8 lg:mt-0">
            {communities?.findCommunities.communities.map(
              (community, index) => (
                <NextLink
                  href={`/c?id=${community.id}`}
                  key={community.id}
                  className={classNames(
                    'relative text-left focus:outline-none p-5 hover:bg-white hover:bg-opacity-50 hover:shadow-sm rounded mb-5',
                    {
                      'px-8 bg-white shadow-sm': !index,
                    }
                  )}
                >
                  {!index ? (
                    <>
                      <div className="absolute top-0 left-0 z-10 -ml-4 mt-5 flex items-center justify-center bg-gradient bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full w-8 h-8 shadow">
                        1
                      </div>
                      <div className="absolute top-0 left-0 z-0 rounded-l flex items-center justify-center bg-gradient bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold w-1 h-full" />
                    </>
                  ) : null}
                  <h2 className="font-semibold text-xl text-gray-800">
                    {community.name}
                  </h2>
                  <div className="flex items-center divide-x-2 divide-gray-200 my-1">
                    <div className="flex items-center text-indigo-500 font-medium pr-4">
                      <Users className="mr-2" size={20} />
                      1.2k Members
                    </div>
                    {community.location ? (
                      <div className="flex items-center text-red-500 font-medium pl-4 pr-4">
                        <LocationMarker className="mr-2" size={20} />
                        {community.location}
                      </div>
                    ) : null}
                    <div className="flex items-center text-gray-500 font-medium pl-4">
                      <Flag className="mr-2" size={20} />
                      24 Posts
                    </div>
                  </div>
                  <p className="text-gray-700 max-w-xl mt-1 truncate">
                    {community.about}
                  </p>
                </NextLink>
              )
            )}
            {communities?.findCommunities.hasMore ? (
              <button
                className="focus:outline-none focus:shadow-outline focus:bg-gray-50 bg-white w-32 px-4 py-3 text-gray-700 rounded shadow-sm"
                onClick={() => {
                  fetchMore({
                    variables: {
                      options: {
                        limit: variables.options.limit,
                        cursor:
                          communities.findCommunities.communities[
                            communities.findCommunities.communities.length - 1
                          ].createdAt,
                      },
                    },
                    updateQuery: (
                      previousValue,
                      { fetchMoreResult }
                    ): FindCommunitiesQuery => {
                      if (!fetchMoreResult) {
                        return previousValue as FindCommunitiesQuery;
                      }

                      return {
                        __typename: 'Query',
                        findCommunities: {
                          communities: [
                            ...(previousValue as FindCommunitiesQuery)
                              .findCommunities.communities,
                            ...(fetchMoreResult as FindCommunitiesQuery)
                              .findCommunities.communities,
                          ],
                          hasMore: (fetchMoreResult as FindCommunitiesQuery)
                            .findCommunities.hasMore,
                        },
                      };
                    },
                  });
                }}
              >
                Load More
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Browse;

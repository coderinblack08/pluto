import { Box, Flex, Stack, useColorMode } from '@chakra-ui/core';
import { LocationMarker, Tag, Users } from 'heroicons-react';
import React from 'react';
import { NextLink } from '../components/nextlink';
import { AuthNavbar } from '../components/shared/AuthNavbar';
import {
  FindCommunitiesQuery,
  useFindCommunitiesQuery,
} from '../generated/graphql';

const Item: React.FC<{ name: string; highlighted?: boolean }> = ({
  name,
  highlighted,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      py={3}
      px={6}
      as="button"
      textAlign="left"
      rounded="none"
      bgColor={isDark ? 'gray.900' : 'white'}
      color={
        highlighted
          ? isDark
            ? 'indigo.400'
            : 'indigo.600'
          : isDark
          ? 'gray.600'
          : 'gray.700'
      }
      className={`hover:opacity-75 focus:opacity-75 border-t ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}
      fontWeight={highlighted ? 'font-medium' : 'font-normal'}
    >
      {name}
    </Box>
  );
};

const Browse: React.FC = () => {
  const categories = [
    'Gaming',
    'Sports',
    'Science & Technology',
    'News & Politics',
    'Other',
  ];
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { data: communities, fetchMore, variables } = useFindCommunitiesQuery({
    variables: { options: { limit: 2, cursor: null } },
  });

  return (
    <Box
      className={`min-h-screen ${
        isDark ? 'bg-gray-800' : 'bg-gray-100 bg-opacity-75'
      }`}
    >
      <AuthNavbar />
      <Box className="container mx-auto" py={10}>
        <Flex direction={['column', 'column', 'row']} px={5}>
          <Stack
            maxW={64}
            w="100%"
            as="ul"
            spacing={0}
            rounded="md"
            shadow="sm"
          >
            <Box
              as="li"
              py={3}
              px={6}
              fontWeight="semibold"
              className={`border ${
                isDark
                  ? 'border-none bg-gray-900 bg-opacity-25 text-gray-300'
                  : 'border-gray-200'
              } rounded-t-md border-b-0`}
            >
              Categories
            </Box>
            {categories.map((name, index) => (
              <Item name={name} highlighted={!index} />
            ))}
            <Box
              as="li"
              py={1}
              bgColor={isDark ? 'gray.900' : 'white'}
              fontWeight="semibold"
              roundedBottom="md"
            />
          </Stack>
          <Flex
            w="100%"
            flexDir="column"
            marginLeft={[0, 0, 10]}
            marginTop={[8, 8, 0]}
          >
            {communities?.findCommunities.communities.map(
              (community, index) => (
                <NextLink
                  href={`/c?id=${community.id}`}
                  key={community.id}
                  className={`transform transition ease duration-200 hover:-translate-y-1 relative text-left focus:outline-none ${
                    isDark ? 'bg-gray-700' : 'bg-white'
                  } p-5 shadow-sm hover:shadow rounded mb-5 ${
                    !index ? 'px-8' : null
                  } ${index ? 'bg-opacity-25' : 'bg-opacity-50'}`}
                >
                  {!index ? (
                    <>
                      <div className="absolute top-0 left-0 z-10 -ml-4 mt-5 flex items-center justify-center bg-gradient bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full w-8 h-8 shadow">
                        1
                      </div>
                      <div className="absolute top-0 left-0 z-0 rounded-l flex items-center justify-center bg-gradient bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold w-1 h-full" />
                    </>
                  ) : null}
                  <h2
                    className={`font-semibold text-xl ${
                      isDark ? 'text-gray-300' : 'text-gray-800'
                    }`}
                  >
                    {community.name}
                  </h2>
                  <div
                    className={`flex items-center divide-x-2 ${
                      isDark ? 'divide-gray-500' : 'divide-gray-200'
                    } my-1`}
                  >
                    <div
                      className={`flex items-center ${
                        isDark ? 'text-indigo-300' : 'text-indigo-500'
                      } font-medium pr-4`}
                    >
                      <Users className="mr-2" size={20} />
                      1.2k Members
                    </div>
                    {community.location ? (
                      <div className="flex items-center text-red-500 font-medium pl-4 pr-4">
                        <LocationMarker className="mr-2" size={20} />
                        {community.location}
                      </div>
                    ) : null}
                    <div
                      className={`flex items-center ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      } font-medium pl-4`}
                    >
                      <Tag className="mr-2" size={20} />
                      {community.category}
                    </div>
                  </div>
                  <p
                    className={`max-w-xl mt-2 truncate ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } `}
                  >
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
                        limit: variables!.options.limit,
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
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Browse;

import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/core';
import classNames from 'classnames';
import { ChevronDown, MenuAlt4, X } from 'heroicons-react';
import React from 'react';
import { useMeQuery } from '../../../generated/graphql';
import { UserDropdown } from '../dropdown/user';
import { NextLink } from '../nextlink';

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.55"
    stroke="#4a5568"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9-.745 1.46-5.783-.259-11.255-3.838-5.47-3.579-9.304-7.664-8.56-9.123.464-.91 2.926-.444 5.803.805" />
    <circle cx="12" cy="12" r="7" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data: me, loading } = useMeQuery();

  return (
    <Box
      p={4}
      zIndex={50}
      rounded="md"
      pos="relative"
      bg="rgb(255, 255, 255, 0.25)"
      className="border-b border-gray-200"
      style={{
        opacity: 5,
        backdropFilter: 'blur(3px)',
      }}
    >
      <Flex
        className="container"
        direction={['column', 'row']}
        justify="space-between"
        align="center"
        mx="auto"
      >
        <Flex
          align="center"
          justify="space-between"
          w="100%"
          mb={[open ? 5 : 0, 0]}
        >
          <Stack
            align="center"
            direction="row"
            spacing={2}
            href="/"
            as={NextLink}
          >
            {logo}
            <Text
              color="gray.700"
              fontSize={['2xl', '3xl']}
              fontWeight="medium"
            >
              Pluto
            </Text>
          </Stack>
          <IconButton
            bg="white"
            aria-label="menu"
            icon={!open ? <MenuAlt4 size={24} /> : <X size={20} />}
            className="flex items-center justify-center md:hidden text-gray-600 hover:text-gray-700 p-3 focus:bg-gray-200 focus:outline-none rounded-sm"
            onClick={() => setOpen(!open)}
            display={['flex', 'none']}
          />
        </Flex>
        <Flex
          align={['start', 'center']}
          display={[open ? 'flex' : 'none', 'flex']}
          direction={['column', 'row']}
          w={['100%', 'auto']}
        >
          <Flex
            color="gray.700"
            align="center"
            justify={['space-between', 'normal']}
            px={4}
            py={[2, 0]}
            ml={[0, 3]}
            mb={[2, 0]}
            rounded={['md', 'sm']}
            cursor="pointer"
            _hover={{ color: 'gray.900', bg: ['gray.200', 'transparent'] }}
            w={['100%', 'auto']}
          >
            Solutions
            <Icon ml={2} as={ChevronDown} color="gray.600" />
          </Flex>
          <Link
            href="/pricing"
            color="gray.700"
            px={4}
            py={[2, 0]}
            ml={[0, 3]}
            mb={[2, 0]}
            rounded={['md', 'sm']}
            _hover={{ color: 'gray.900', bg: ['gray.200', 'transparent'] }}
            as={NextLink}
            w={['100%', 'auto']}
          >
            Pricing
          </Link>
          <Link
            href="#"
            color="gray.700"
            px={4}
            py={[2, 0]}
            ml={[0, 3]}
            mb={[2, 0]}
            rounded={['md', 'sm']}
            _hover={{ color: 'gray.900', bg: ['gray.200', 'transparent'] }}
            as={NextLink}
            w={['100%', 'auto']}
          >
            Contact
          </Link>
          <Flex
            align="center"
            className="md:border-l md:border-gray-400 h-5 md:ml-4 md:pl-4 space-x-2 md:space-x-0"
            w={['100%', 'auto']}
            mt={[5, 0]}
          >
            <Button
              px={4}
              bg="white"
              href="/login"
              color="gray.700"
              py={[2, 0]}
              pl={[0, 4]}
              mr={[0, 2]}
              rounded="sm"
              fontWeight="normal"
              _hover={{ color: 'gray.900', bg: ['gray.200', 'transparent'] }}
              as={NextLink}
              w={['100%', 'auto']}
            >
              Sign In
            </Button>
            <Button
              ml={[0, 3]}
              href="/register"
              color="white"
              bgColor="gray.800"
              fontWeight="medium"
              _hover={{ bg: 'gray.900' }}
              _focusWithin={{ bg: 'gray.900' }}
              w={['100%', 'auto']}
              as={NextLink}
            >
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );

  return (
    <div
      className={classNames(
        'bg-white border-b border-gray-200 bg-opacity-25 p-4 rounded-md relative z-50',
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
          <NextLink
            href="/"
            className={classNames('flex items-center space-x-2', {
              'px-2': open,
            })}
          >
            <span className="sr-only">Home</span>
            <img
              src={require('../../../public/static/logo.svg')}
              alt="Pluto Logo"
              className="w-10 h-10"
            />
            <span className="text-gray-700 text-2xl md:text-3xl font-medium">
              Pluto
            </span>
          </NextLink>
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
            className="inline-flex items-center justify-between md:justify-start font-normal box-border text-gray-700 md:mr-4 px-3 py-2 md:ml-1 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-900 w-full rounded-sm"
          >
            Solutions
            <div className="ml-2 text-gray-600">
              <ChevronDown size={18} />
            </div>
          </a>
          <NextLink
            href="/pricing"
            className="font-normal box-border text-gray-700 md:mr-4 px-3 py-2 md:ml-1 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-900 w-full rounded-sm"
          >
            Pricing
          </NextLink>
          <a
            href="https://forms.formium.io/f/5f95e07cf0736d000186e6e0"
            target="_blank"
            className="font-normal box-border text-gray-700 md:mr-4 px-3 py-2 md:ml-1 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-900 w-full rounded-sm"
          >
            Contact
          </a>
          <hr className="hidden md:block border-l border-gray-400 h-5 ml-1 mr-2" />
          {!loading && me && !!me?.me ? (
            <div className="ml-3">
              <UserDropdown />
            </div>
          ) : (
            <>
              <NextLink
                href="/login"
                className="font-normal box-border text-gray-700 md:mr-4 px-3 py-2 md:ml-1 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-900 w-full rounded-md"
              >
                Sign in
              </NextLink>
              <NextLink
                href="/register"
                className="mt-3 sm:mt-0 font-medium inline-block w-full px-4 py-2 bg-gray-800 text-white rounded-md transition ease-in-out duration-150 focus:bg-gray-900 hover:bg-gray-700"
              >
                Get Started
              </NextLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

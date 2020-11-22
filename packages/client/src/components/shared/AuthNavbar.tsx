import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { MenuAlt4, Plus, X } from 'heroicons-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DarkModeSwitch } from '../chakra/DarkModeSwitch';
import { LogoImage } from '../index/LogoImage';
import { NextLink } from '../nextlink';
import { UserDropdown } from './UserDropdown';

export const AuthNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { pathname } = useRouter();

  const onPage = (path: string): boolean => pathname === path;

  return (
    <Box
      bgColor={isDark ? 'gray.900' : 'gray.800'}
      className={!onPage('/c') ? 'border-b' : undefined}
      borderColor="gray.700"
    >
      <Box className="container" mx="auto">
        <Flex
          p={4}
          align="center"
          justify="start"
          direction={['column', 'column', 'row']}
        >
          <Flex
            w={['100%', '100%', 'auto']}
            justify="space-between"
            align="center"
          >
            <Stack
              align="center"
              direction="row"
              spacing={2}
              href="/"
              color="gray.300"
              as={NextLink}
            >
              <LogoImage />
              <Text fontSize={['lg', 'xl', '2xl']} fontWeight="medium">
                Pluto
              </Text>
            </Stack>
            <IconButton
              aria-label="menu"
              icon={!open ? <MenuAlt4 size={24} /> : <X size={20} />}
              className="lg:hidden text-gray-400 hover:text-gray-500 p-3"
              backgroundColor="transparent"
              _hover={{ backgroundColor: 'transparent' }}
              _focusWithin={{ backgroundColor: 'transparent' }}
              onClick={() => setOpen(!open)}
              display={['flex', 'flex', 'none']}
            />
          </Flex>
          <Box className={`${open ? 'block' : 'hidden'} lg:block`} w="100%">
            <Flex
              w="100%"
              justify="space-between"
              align={['start', 'start', 'center']}
              direction={['column', 'column', 'row']}
            >
              <Stack
                mt={[5, 5, 0]}
                ml={[0, 0, 12]}
                spacing={[2, 2, 4]}
                direction={['column', 'column', 'row']}
                w={['100%', '100%', 'auto']}
              >
                <Box
                  px={5}
                  py={[3, 3, 2]}
                  rounded="md"
                  shadow={onPage('/dashboard') ? 'inner' : 'none'}
                  className={
                    onPage('/dashboard')
                      ? isDark
                        ? 'bg-black bg-opacity-50'
                        : 'bg-gray-900'
                      : undefined
                  }
                  color="gray.400"
                  fontWeight="semibold"
                  href="/dashboard"
                  _focus={{ shadow: 'outline' }}
                  as={NextLink}
                >
                  Dashboard
                </Box>
                <Box
                  px={5}
                  py={[3, 3, 2]}
                  rounded="md"
                  shadow={onPage('/#') ? 'inner' : 'none'}
                  color="gray.400"
                  className={
                    onPage('#')
                      ? isDark
                        ? 'bg-black bg-opacity-50'
                        : 'bg-gray-900'
                      : undefined
                  }
                  fontWeight="medium"
                  href="#"
                  _focus={{ shadow: 'outline' }}
                  as={NextLink}
                >
                  Communities
                </Box>
                <Box
                  px={5}
                  py={[3, 3, 2]}
                  rounded="md"
                  shadow={onPage('/browse') ? 'inner' : 'none'}
                  color="gray.400"
                  className={
                    onPage('/browse')
                      ? isDark
                        ? 'bg-black bg-opacity-50'
                        : 'bg-gray-900'
                      : undefined
                  }
                  fontWeight="medium"
                  href="/browse"
                  _focus={{ shadow: 'outline' }}
                  as={NextLink}
                >
                  Browse
                </Box>
              </Stack>
              <Stack
                align="center"
                spacing={3}
                direction={['column', 'column', 'row']}
                mt={[5, 5, 0]}
                w={['100%', '100%', 'auto']}
                className="whitespace-no-wrap"
              >
                <Button
                  colorScheme="indigo"
                  leftIcon={<Plus size={20} />}
                  iconSpacing={1}
                  w="100%"
                  href="/create"
                  as={NextLink}
                >
                  Create
                </Button>
                <UserDropdown w={['100%', '100%', 'auto']} />
                <DarkModeSwitch color="gray.500" />
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

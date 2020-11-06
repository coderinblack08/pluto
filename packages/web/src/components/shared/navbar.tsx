import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  Image,
  useColorMode,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { ChevronDown, MenuAlt4, X } from 'heroicons-react';
import { NextLink } from '../nextlink';
import { Banner } from './banner';
import { DarkModeSwitch } from '../chakra/DarkModeSwitch';
import { LogoImage } from '../index/LogoImage';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box>
      <Banner />
      <Box
        p={4}
        zIndex={50}
        pos="relative"
        bg={isDark ? 'gray.900' : "rgb(255, 255, 255, 0.25')"}
        className="border-b"
        borderBottomColor={isDark ? 'gray.700' : 'gray.200'}
        style={
          isDark
            ? undefined
            : {
                opacity: 5,
                backdropFilter: 'blur(3px)',
              }
        }
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
              color={isDark ? 'gray.300' : 'gray.700'}
              as={NextLink}
            >
              <LogoImage />
              <Text fontSize={['xl', '2xl', '3xl']} fontWeight="medium">
                Pluto
              </Text>
            </Stack>
            <IconButton
              aria-label="menu"
              icon={!open ? <MenuAlt4 size={24} /> : <X size={20} />}
              className="md:hidden text-gray-600 hover:text-gray-700 p-3"
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
              color={isDark ? 'gray.400' : 'gray.700'}
              align="center"
              justify={['space-between', 'normal']}
              px={4}
              py={[2, 0]}
              ml={[0, 3]}
              mb={[2, 0]}
              rounded={['md', 'sm']}
              cursor="pointer"
              _hover={{
                color: isDark ? 'gray.300' : 'gray.900',
                bg: [isDark ? 'gray.800' : 'gray.200', 'transparent'],
              }}
              w={['100%', 'auto']}
            >
              Solutions
              <Icon
                ml={2}
                as={ChevronDown}
                color={isDark ? undefined : 'gray.600'}
              />
            </Flex>
            <Link
              href="/pricing"
              color={isDark ? 'gray.400' : 'gray.700'}
              px={4}
              py={2}
              ml={[0, 3]}
              mb={[2, 0]}
              rounded={['md', 'sm']}
              _hover={{
                color: isDark ? 'gray.300' : 'gray.900',
                bg: [isDark ? 'gray.800' : 'gray.200', 'transparent'],
              }}
              as={NextLink}
              w={['100%', 'auto']}
            >
              Pricing
            </Link>
            <Link
              href="#"
              color={isDark ? 'gray.400' : 'gray.700'}
              px={4}
              py={2}
              ml={[0, 3]}
              mb={[2, 0]}
              rounded={['md', 'sm']}
              _hover={{
                color: isDark ? 'gray.300' : 'gray.900',
                bg: [isDark ? 'gray.800' : 'gray.200', 'transparent'],
              }}
              as={NextLink}
              w={['100%', 'auto']}
            >
              Contact
            </Link>
            <Flex
              align="center"
              className={`md:border-l md:${
                isDark ? 'border-gray-700' : 'border-gray-400'
              } h-5 md:ml-4 md:pl-4 space-x-2 md:space-x-0`}
              w={['100%', 'auto']}
              py={[6, 0]}
            >
              <Button
                px={4}
                href="/login"
                color={isDark ? 'gray.400' : 'gray.700'}
                bgColor={isDark ? ['black', 'transparent'] : 'transparent'}
                py={[2, 0]}
                pl={[0, 4]}
                mr={[0, 4]}
                fontWeight="normal"
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
              <Box pl={3}>
                <DarkModeSwitch />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

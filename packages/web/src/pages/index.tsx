import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { ChevronDownOutline, ChevronRight, ColorSwatch } from 'heroicons-react';
import React from 'react';
import { SkeletonImage } from '../components/index/SkeletonImage';
import { NextLink } from '../components/nextlink';
import { Navbar } from '../components/shared/navbar';
import { useMeQuery } from '../generated/graphql';
import { generateGradient } from '../utils/generateGradient';

const Index: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const { data: me } = useMeQuery();

  return (
    <Box overflow="hidden">
      <Navbar />
      <Box
        pos="relative"
        className="container mx-auto px-5 sm:px-0"
        py={[10, 20, 32]}
      >
        <Box>
          <Stack align="center" direction="row" spacing={2} mb={2}>
            <Tag
              backgroundImage={generateGradient('teal.500', 'blue.500')}
              fontWeight="bold"
              rounded="full"
              color="white"
              px={3}
            >
              NEW
            </Tag>
            <Text
              backgroundImage={generateGradient('blue.500', 'teal.500')}
              fontWeight="bold"
              color="none"
              className="text-gradient"
            >
              NOW IN EARLY ACCESS
            </Text>
          </Stack>
          <Text
            color={isDark ? 'gray.100' : 'gray.900'}
            fontSize={['3xl', '4xl', '5xl', '6xl']}
            className="leading-snug"
            fontWeight="black"
            as="h1"
          >
            Community Discussion
            <br /> Through One Platform
          </Text>
          <Text
            color={isDark ? 'gray.400' : 'gray.600'}
            fontSize={['md', 'lg', 'xl']}
            mt={[3, 4]}
            mb={8}
            maxW={['580px', '600px', '720px']}
            className="leading-relaxed"
          >
            Pluto does all the heavy-lifting with all the features you wished
            you had before! Tailored to everyone, including schools and
            classrooms!
          </Text>
          <Button
            size="lg"
            href={!me ? '/register' : '/dashboard'}
            color="white"
            bgColor={isDark ? 'gray.900' : 'gray.800'}
            fontWeight="medium"
            _hover={{ bg: 'gray.900' }}
            _focusWithin={{ bg: isDark ? 'black' : 'gray.900' }}
            w={['100%', 'auto', 'auto', 'auto']}
            mb={[3, 0]}
            justifyContent="space-between"
            rightIcon={<ChevronRight className="ml-2 -mr-2" />}
            shadow={isDark ? 'lg' : 'none'}
            as={NextLink}
          >
            {!me ? 'Get Started' : 'Dashboard'}
          </Button>
          <Button
            size="lg"
            href="#"
            ml={[0, 3]}
            color="gray.800"
            bgColor="gray.200"
            _hover={{ bg: 'gray.300' }}
            _focusWithin={{ bg: 'gray.300' }}
            fontWeight="medium"
            w={['100%', 'auto', 'auto', 'auto']}
            justifyContent="space-between"
            shadow={isDark ? 'lg' : 'none'}
            as={NextLink}
          >
            Learn More
          </Button>
        </Box>
        <SkeletonImage />
      </Box>
      <Flex justify="center" pb={10}>
        <IconButton
          color="gray.600"
          aria-label="Scroll Down"
          className="animate-bounce"
          icon={<ChevronDownOutline size={20} />}
          bgColor="transparent"
          href="#features"
          cursor="pointer"
          as="a"
        />
      </Flex>
      <Box py={24} shadow="inner" id="features" bgColor="gray.900">
        <div className="flex mx-auto">
          <Flex direction="column" align="center" mx="auto">
            <Flex color="teal.500" mb={3}>
              <ColorSwatch size={20} />
              <Text fontWeight="extrabold" fontSize="lg" ml={2}>
                FEATURES
              </Text>
            </Flex>
            <Heading
              as="h1"
              color="gray.300"
              fontWeight="black"
              fontSize={['3xl', '5xl', '6xl']}
              mb={[2, 4]}
            >
              Convincing Features
            </Heading>
            <Text
              fontSize={['sm', 'xl', '2xl']}
              color="gray.400"
              fontWeight="semibold"
            >
              Low footprint design with features you won’t forget
            </Text>
          </Flex>
        </div>
        <SimpleGrid
          columns={[1, 2]}
          spacing={3}
          maxW="3xl"
          mx="auto"
          w="100%"
          mt={10}
          px={[5, 0]}
        >
          <Box
            role="group"
            bg="gray.800"
            rounded="lg"
            shadow="lg"
            p={4}
            _hover={{
              backgroundImage: generateGradient('teal.500', 'blue.500'),
            }}
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.200" as="h3">
              Easy to use
            </Text>
            <Text
              color="gray.400"
              fontSize="lg"
              _groupHover={{ color: 'gray.300' }}
            >
              A simple and intuitive UI
            </Text>
          </Box>
          <Box
            role="group"
            bg="gray.800"
            rounded="lg"
            shadow="lg"
            p={4}
            _hover={{
              backgroundImage: generateGradient('orange.500', 'red.500'),
            }}
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.200" as="h3">
              Battery pack included
            </Text>
            <Text
              color="gray.400"
              fontSize="lg"
              _groupHover={{ color: 'gray.300' }}
            >
              Events, announcements, discussion threads, assignments, you name
              it!
            </Text>
          </Box>
          <Box
            role="group"
            className="bg-gray-800 bg-opacity-50"
            rounded="lg"
            shadow="lg"
            p={4}
            _hover={{
              backgroundImage: generateGradient('blue.500', 'indigo.500'),
            }}
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.200" as="h3">
              Spread the word
            </Text>
            <Text
              color="gray.400"
              fontSize="lg"
              _groupHover={{ color: 'gray.300' }}
            >
              Extends the reach of your community
            </Text>
          </Box>
          <Box
            role="group"
            className="bg-gray-800 bg-opacity-50"
            rounded="lg"
            shadow="lg"
            p={4}
            _hover={{
              backgroundImage: generateGradient('green.500', 'yellow.500'),
            }}
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.200" as="h3">
              For schools
            </Text>
            <Text
              color="gray.400"
              fontSize="lg"
              _groupHover={{ color: 'gray.300' }}
            >
              Gradebooks, assignments, and other features dedicated for
              classroom settings
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box>
        <Box
          pos="relative"
          textAlign="center"
          backgroundImage={
            isDark ? 'gray.700' : generateGradient('gray.100', 'indigo.100')
          }
          className={`border-b ${isDark ? 'border-gray-700' : null}`}
          py={[16, 20]}
        >
          <Box pos="relative" zIndex={10}>
            <div className="relative z-10 flex items-center justify-center rounded-md mb-2 bg-gradient-to-r from-teal-500 to-blue-500 w-8 md:w-12 h-8 md:h-12 mx-auto">
              <svg
                className="w-5 md:w-8 h-5 md:h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C19.995 17.4162 16.4162 20.995 12 21ZM12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C17.9961 9.68789 15.3121 7.00386 12 7ZM13 14H11V9H13V14ZM19.293 7.707L17.293 5.707L18.707 4.293L20.707 6.293L19.294 7.706L19.293 7.707ZM15 4H9V2H15V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <Text
              as="h1"
              color="gray.300"
              fontWeight="black"
              fontSize={['3xl', '4xl', '5xl', '6xl']}
              backgroundImage={generateGradient('teal.500', 'blue.500')}
              className="text-gradient"
            >
              Frequently asked questions
            </Text>
            <Text
              fontSize={['md', 'lg', 'xl', '2xl']}
              color={isDark ? 'gray.500' : 'gray.600'}
              fontWeight="semibold"
            >
              With frequently given answers to quench your questions
            </Text>
          </Box>
          <svg
            className="select-none absolute top-0 left-0 -ml-48 h-full mt-3 z-0"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                name="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className={isDark ? 'text-gray-700' : 'text-gray-300'}
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            ></rect>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;

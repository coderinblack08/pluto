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
import { ChevronDown, ChevronRight, ColorSwatch } from 'heroicons-react';
import React from 'react';
import { SkeletonImage } from '../components/index/SkeletonImage';
import { NextLink } from '../components/nextlink';
import { Navbar } from '../components/shared/navbar';
import { generateGradient } from '../utils/generateGradient';

const Index: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

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
            href="/register"
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
            Get Started
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
          icon={<ChevronDown />}
          aria-label="Scroll Down"
          color={isDark ? 'gray.600' : 'gray.700'}
          cursor="pointer"
          bgColor="transparent"
          className="animate-bounce"
          href="#features"
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
              fontSize={['4xl', '5xl', '6xl']}
              mb={4}
            >
              Convincing Features
            </Heading>
            <Text
              fontSize={['xl', '2xl']}
              color="gray.400"
              fontWeight="semibold"
            >
              Low footprint design with features you won’t forget
            </Text>
          </Flex>
        </div>
        <SimpleGrid
          columns={2}
          spacing={3}
          maxW="3xl"
          mx="auto"
          w="100%"
          mt={10}
        >
          <Box
            role="group"
            bg="gray.800"
            rounded="md"
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
          <Box role="group" bg="gray.800" rounded="md" shadow="lg" p={4}>
            <Text fontWeight="bold" fontSize="xl" color="gray.200" as="h3">
              Battery pack included
            </Text>
            <Text color="gray.400" fontSize="lg">
              Events, announcements, discussion threads, assignments, you name
              it!
            </Text>
          </Box>
          <Box
            role="group"
            className="bg-gray-800 bg-opacity-50"
            rounded="md"
            shadow="lg"
            p={4}
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.200" as="h3">
              Spread the word
            </Text>
            <Text color="gray.400" fontSize="lg">
              Extends the reach of your community
            </Text>
          </Box>
          <Box
            role="group"
            className="bg-gray-800 bg-opacity-50"
            rounded="md"
            shadow="lg"
            p={4}
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.200" as="h3">
              For schools
            </Text>
            <Text color="gray.400" fontSize="lg">
              Gradebooks, assignments, and other features dedicated for
              classroom settings
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;

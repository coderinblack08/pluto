import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/core';
import React from 'react';
import { AuthNavbar } from '../components/shared/AuthNavbar';

const Create: React.FC = () => {
  return (
    <Box className="min-h-screen bg-gray-100 bg-opacity-75">
      <AuthNavbar />
      <Tabs
        variant="unstyled"
        className="container mx-auto flex flex-row"
        py={10}
      >
        <TabList flexDirection="column">
          <Tab
            flexDir="column"
            py={5}
            px={8}
            mt={5}
            maxW="sm"
            rounded="md"
            _selected={{
              color: 'indigo.500',
              bg: 'white',
              shadow:
                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            }}
            style={{ alignItems: 'start' }}
            w="100%"
          >
            <Heading fontSize="2xl" fontWeight="semibold" as="h2">
              General Information
            </Heading>
            <Text color="gray.600" fontWeight="medium">
              Overview about your community
            </Text>
          </Tab>
          <Tab
            flexDir="column"
            py={5}
            px={8}
            mt={5}
            maxW="sm"
            rounded="md"
            _selected={{
              color: 'indigo.500',
              bg: 'white',
              shadow:
                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            }}
            style={{ alignItems: 'start' }}
            w="100%"
          >
            <Heading fontSize="2xl" fontWeight="semibold" as="h2">
              Contacts & Settings
            </Heading>
            <Text color="gray.600" fontWeight="medium">
              Customizable options and contacts
            </Text>
          </Tab>
        </TabList>
        <TabPanels
          p={5}
          ml={10}
          rounded="md"
          bg="white"
          shadow="md"
          w="calc(100% - 24rem)"
        >
          <TabPanel>
            <p>Contest Pug Rocks</p>
          </TabPanel>
          <TabPanel>
            <p>So does pluto</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Create;

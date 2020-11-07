import {
  Box,
  Button,
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { InputField } from '../components/form/InputField';
import { AuthNavbar } from '../components/shared/AuthNavbar';

const Create: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      className={`min-h-screen ${
        isDark ? 'bg-gray-800' : 'bg-gray-100 bg-opacity-75'
      }`}
    >
      <AuthNavbar />
      <Tabs
        variant="unstyled"
        className="container mx-auto flex flex-row"
        py={10}
        index={tabIndex}
        onChange={(index: number) => {
          setTabIndex(index);
        }}
      >
        <TabList flexDirection="column" w="sm">
          <Tab
            flexDir="column"
            py={5}
            px={8}
            mt={5}
            rounded="md"
            _selected={{
              color: isDark ? 'indigo.200' : 'indigo.500',
              bg: isDark ? 'gray.900' : 'white',
              shadow:
                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            }}
            style={{ alignItems: 'start' }}
            w="100%"
          >
            <Heading
              color={
                tabIndex !== 0 ? (isDark ? 'gray.300' : 'gray.800') : undefined
              }
              fontSize="2xl"
              fontWeight="semibold"
              as="h2"
            >
              General Information
            </Heading>
            <Text color={isDark ? 'gray.500' : 'gray.600'} fontWeight="medium">
              Overview about your community
            </Text>
          </Tab>
          <Tab
            flexDir="column"
            py={5}
            px={8}
            mt={5}
            rounded="md"
            _selected={{
              color: isDark ? 'indigo.200' : 'indigo.500',
              bg: isDark ? 'gray.900' : 'white',
              shadow:
                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            }}
            style={{ alignItems: 'start' }}
            w="100%"
          >
            <Heading
              fontSize="2xl"
              fontWeight="semibold"
              color={
                tabIndex !== 1 ? (isDark ? 'gray.300' : 'gray.800') : undefined
              }
              as="h2"
            >
              Contacts & Settings
            </Heading>
            <Text color={isDark ? 'gray.500' : 'gray.600'} fontWeight="medium">
              Customizable options and contacts
            </Text>
          </Tab>
        </TabList>
        <TabPanels mt={5} ml={10} w="calc(100% - 28rem)">
          <TabPanel
            p={0}
            shadow="md"
            rounded="lg"
            bg={isDark ? '#263040' : 'white'}
          >
            <Formik
              initialValues={{
                name: '',
                category: 'Gaming',
                website: '',
                about: '',
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {() => (
                <Form>
                  <Stack spacing={10} p={8}>
                    <InputField
                      name="name"
                      label="Name"
                      type="text"
                      placeholder="Example"
                      maxW="md"
                      isRequired
                    />
                    <Box>
                      <label
                        htmlFor="category"
                        className={`inline-block mb-1 font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Category
                      </label>
                      <Field
                        mt={1}
                        name="category"
                        bgColor="rgba(255, 255, 255, 0.06)"
                        borderColor={isDark ? 'gray.700' : 'gray.300'}
                        color={isDark ? 'gray.500' : 'gray.700'}
                        shadow="sm"
                        maxW="md"
                        _focus={{ shadow: 'outline' }}
                        as={Select}
                      >
                        <option value="Gaming">Gaming</option>
                        <option value="Sports">Sports</option>
                        <option value="Science & Technology">
                          Science & Technology
                        </option>
                        <option value="News & Politics">News & Politics</option>
                        <option value="Other">Other</option>
                      </Field>
                    </Box>
                    <InputField
                      name="website"
                      label="Website"
                      maxW="md"
                      placeholder="https://example.com"
                    />
                    <InputField
                      h={40}
                      name="about"
                      label="About"
                      placeholder="Hello World..."
                      maxW="lg"
                      isRequired
                      textarea
                    />
                  </Stack>
                  <Flex
                    w="100%"
                    px={5}
                    py={3}
                    roundedBottom="md"
                    className="justify-end border-t"
                    bg={isDark ? 'gray.900' : 'gray.100'}
                    borderColor={isDark ? 'gray.800' : undefined}
                  >
                    <Button
                      mr={2}
                      size="lg"
                      bgColor={isDark ? 'gray.800' : 'white'}
                      color="indigo.500"
                      _focusWithin={{
                        bgColor: isDark ? 'gray.800' : 'white',
                        shadow: 'outline',
                      }}
                      _hover={{ bgColor: isDark ? 'gray.800' : 'white' }}
                      fontWeight="normal"
                      shadow="md"
                      fontSize="md"
                    >
                      Save
                    </Button>
                    <Button
                      bgColor="indigo.500"
                      _hover={{ bgColor: 'indigo.600' }}
                      _focusWithin={{
                        bgColor: 'indigo.700',
                        shadow: 'outline',
                      }}
                      color="white"
                      size="lg"
                      shadow="md"
                      fontWeight="normal"
                      fontSize="md"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          </TabPanel>
          <TabPanel
            p={0}
            shadow="md"
            rounded="lg"
            bg={isDark ? '#263040' : 'white'}
          >
            <Formik
              initialValues={{
                name: '',
                category: 'Gaming',
                website: '',
                about: '',
                email: '',
                location: '',
                isPrivate: false,
                isSchool: false,
                emailNotifications: true,
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {() => (
                <Form>
                  <Stack spacing={10} p={8}>
                    <InputField
                      name="email"
                      label="Email Address"
                      type="email"
                      placeholder="contact@example.com"
                      maxW="md"
                    />
                    <InputField
                      name="location"
                      label="Location"
                      type="text"
                      placeholder="Santa Cruz, CA"
                      maxW="md"
                    />
                    <Box>
                      <label
                        htmlFor="maxParticipants"
                        className={`inline-block mb-1 font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Maximum Participants
                      </label>
                      <Field
                        mt={1}
                        min={0}
                        maxW="md"
                        shadow="sm"
                        name="maxParticipants"
                        color={isDark ? 'gray.500' : 'gray.700'}
                        rounded="md"
                        as={NumberInput}
                      >
                        <NumberInputField
                          _focus={{ shadow: 'outline' }}
                          bgColor="rgba(255, 255, 255, 0.06)"
                          borderColor={isDark ? 'gray.700' : 'gray.300'}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper
                            borderColor={isDark ? 'gray.700' : 'gray.300'}
                          />
                          <NumberDecrementStepper
                            borderColor={isDark ? 'gray.700' : 'gray.300'}
                          />
                        </NumberInputStepper>
                      </Field>
                    </Box>
                    <Stack spacing={4} color={isDark ? 'gray.400' : 'gray.700'}>
                      <InputField
                        name="isSchool"
                        label="School or Classroom (enables gradebook)"
                        checkbox
                      />
                      <InputField
                        name="isPrivate"
                        label="Private Community (requires access code)"
                        checkbox
                      />
                      <InputField
                        name="emailNotifications"
                        label="Email Notifications"
                        checkbox
                      />
                    </Stack>
                  </Stack>
                  <Flex
                    w="100%"
                    px={5}
                    py={3}
                    roundedBottom="md"
                    className="justify-end border-t"
                    bg={isDark ? 'gray.900' : 'gray.100'}
                    borderColor={isDark ? 'gray.800' : undefined}
                  >
                    <Button
                      mr={2}
                      size="lg"
                      bgColor={isDark ? 'gray.800' : 'white'}
                      color="indigo.500"
                      _focusWithin={{
                        bgColor: isDark ? 'gray.800' : 'white',
                        shadow: 'outline',
                      }}
                      _hover={{ bgColor: isDark ? 'gray.800' : 'white' }}
                      fontWeight="normal"
                      shadow="md"
                      fontSize="md"
                    >
                      Save
                    </Button>
                    <Button
                      bgColor="indigo.500"
                      _hover={{ bgColor: 'indigo.600' }}
                      _focusWithin={{
                        bgColor: 'indigo.700',
                        shadow: 'outline',
                      }}
                      color="white"
                      size="lg"
                      shadow="md"
                      fontWeight="normal"
                      fontSize="md"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Create;

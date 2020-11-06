import { Box, Button, Link, Stack, Text, useColorMode } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { LockClosed } from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { registerSchema } from '../common/UserSchema';
import { InputField } from '../components/form/InputField';
import { NextLink } from '../components/nextlink';
import { Navbar } from '../components/shared/navbar';
import { MeDocument, MeQuery, useRegisterMutation } from '../generated/graphql';

const Register: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [register] = useRegisterMutation();
  const router = useRouter();

  return (
    <Box color={isDark ? 'gray.200' : 'gray.800'}>
      <Navbar />
      <Box className="max-w-lg" px={5} mx="auto" py={20}>
        <Text as="h1" fontSize="4xl" fontWeight="extrabold">
          Register Pluto Account
        </Text>
        <Text fontSize="xl" color={isDark ? 'gray.500' : 'gray.600'}>
          Already have an account?{' '}
          <Link color="indigo.400" href="/login" as={NextLink}>
            Sign In
          </Link>
        </Text>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            schoolAccount: false,
          }}
          onSubmit={async (values) => {
            const response = await register({
              variables: { options: values },
              update: (cache, { data }) => {
                cache.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    me: data?.register.user,
                  },
                });
              },
            });

            if (!response.errors) {
              router.push('/dashboard');
            }
          }}
          validationSchema={registerSchema}
        >
          {({}) => (
            <Stack spacing={6} as={Form} mt={6}>
              <Stack spacing={3} direction="row">
                <InputField name="email" label="Email Address" type="email" />
                <InputField name="name" label="Full Name" type="text" />
              </Stack>
              <InputField name="password" label="Password" type="password" />
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
              <InputField
                name="schoolAccount"
                label="School Account?"
                checkbox
              />
              <Button
                w="100%"
                type="submit"
                display="flex"
                colorScheme="indigo"
                leftIcon={
                  <LockClosed
                    size={18}
                    className={`ml-auto ${
                      isDark ? 'text-indigo-800' : 'text-indigo-100'
                    }`}
                  />
                }
              >
                <Text mx="auto">Create Account</Text>
              </Button>
            </Stack>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Register;

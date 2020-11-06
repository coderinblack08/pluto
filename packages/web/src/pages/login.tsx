import { Box, Button, Link, Stack, Text, useColorMode } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { LockClosed } from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { loginSchema } from '../common/UserSchema';
import { InputField } from '../components/form/InputField';
import { NextLink } from '../components/nextlink';
import { Navbar } from '../components/shared/navbar';
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';

const Register: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [login] = useLoginMutation();
  const router = useRouter();

  return (
    <Box color={isDark ? 'gray.200' : 'gray.800'}>
      <Navbar />
      <Box className="max-w-lg" px={5} mx="auto" py={28}>
        <Text as="h1" fontSize="4xl" fontWeight="extrabold">
          Pluto Account Login
        </Text>
        <Text fontSize="xl" color={isDark ? 'gray.500' : 'gray.600'}>
          Don't have an account?{' '}
          <Link color="indigo.400" href="/register" as={NextLink}>
            Sign up
          </Link>
        </Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async (values) => {
            const response = await login({
              variables: { options: values },
              update: (cache, { data }) => {
                cache.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    me: data?.login.user,
                  },
                });
              },
            });

            if (!response.errors) {
              router.push('/dashboard');
            }
          }}
          validationSchema={loginSchema}
        >
          {({}) => (
            <Stack spacing={6} as={Form} mt={8}>
              <InputField name="email" label="Email Address" type="email" />
              <InputField name="password" label="Password" type="password" />
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
                <Text mx="auto">Sign in</Text>
              </Button>
            </Stack>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Register;

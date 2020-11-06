import { Box, Button, Flex, Stack, Text, useColorMode } from '@chakra-ui/core';
import { Plus } from 'heroicons-react';
import React from 'react';
import { DarkModeSwitch } from '../chakra/DarkModeSwitch';
import { LogoImage } from '../index/LogoImage';
import { NextLink } from '../nextlink';
import { UserDropdown } from './UserDropdown';

export const AuthNavbar: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      bgColor={isDark ? 'gray.900' : 'gray.800'}
      className="border-b"
      borderColor="gray.700"
    >
      <Box className="container" mx="auto">
        <Flex
          p={4}
          align="center"
          justify="start"
          direction={['column', 'column', 'row']}
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
            <Text fontSize={['xl', '2xl', '3xl']} fontWeight="medium">
              Pluto
            </Text>
          </Stack>
          <Flex
            align={['start', 'start', 'center']}
            w="100%"
            justify="space-between"
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
                shadow="inner"
                className={isDark ? 'bg-black bg-opacity-50' : 'bg-gray-900'}
                color="gray.400"
                fontWeight="semibold"
                href="/browse"
                _focus={{ shadow: 'outline' }}
                as={NextLink}
              >
                Dashboard
              </Box>
              <Box
                px={5}
                py={[3, 3, 2]}
                rounded="md"
                shadow="inner"
                color="gray.400"
                bgColor="transparent"
                fontWeight="medium"
                href="/browse"
                _focus={{ shadow: 'outline' }}
                as={NextLink}
              >
                Communities
              </Box>
              <Box
                px={5}
                py={[3, 3, 2]}
                rounded="md"
                shadow="inner"
                color="gray.400"
                bgColor="transparent"
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
              >
                Create
              </Button>
              <UserDropdown w={['100%', '100%', 'auto']} />
              <DarkModeSwitch color="gray.500" />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

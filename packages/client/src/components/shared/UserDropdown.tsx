import { useApolloClient } from '@apollo/client';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/core';
import { ChevronDown } from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';

export const UserDropdown: React.FC<any> = (props: any) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const { data: me } = useMeQuery();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const router = useRouter();

  return (
    <Menu isLazy>
      <MenuButton
        px={4}
        py={2}
        rounded="md"
        transition="all 0.2s"
        bgColor={isDark ? 'black' : 'gray.900'}
        _expanded={{ bgColor: 'black' }}
        _focus={{ bgColor: 'black', shadow: 'outline' }}
        _hover={{ bgColor: 'black', color: 'gray.200' }}
        fontWeight="medium"
        color="gray.300"
        {...props}
      >
        {me?.me?.name}
        <ChevronDown
          size={16}
          className="inline ml-1"
          style={{ marginBottom: '1px' }}
        />
      </MenuButton>
      <MenuList
        borderColor={isDark ? 'gray.600' : 'gray.200'}
        shadow={!isDark ? 'lg' : undefined}
        color={isDark ? 'gray.300' : 'gray.700'}
      >
        <MenuGroup
          title={me?.me?.email}
          color={isDark ? 'gray.500' : 'gray.600'}
        >
          <MenuItem
            _focus={{ bgColor: isDark ? 'rgb(0, 0, 0, 0.15)' : 'gray.200' }}
          >
            Account Settings
          </MenuItem>
          <MenuItem
            _focus={{ bgColor: isDark ? 'rgb(0, 0, 0, 0.15)' : 'gray.200' }}
          >
            Upgrade
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem
            _focus={{ bgColor: isDark ? 'rgb(0, 0, 0, 0.15)' : 'gray.200' }}
            onClick={async () => {
              await logout();
              await apolloClient.resetStore();
              router.push('/login');
            }}
          >
            Sign Out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

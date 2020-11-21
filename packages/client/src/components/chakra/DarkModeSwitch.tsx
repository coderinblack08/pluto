import { IconButton, useColorMode } from '@chakra-ui/core';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React from 'react';

export const DarkModeSwitch: React.FC<any> = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const toggleColorModeCookie = () => {
    toggleColorMode();
    document.cookie = `isDarkMode=${colorMode === 'light'}`;
  };

  return (
    <IconButton
      bg="transparent"
      _hover={{ bgColor: 'transparent' }}
      _focusWithin={{ bgColor: 'transparent' }}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      color={isDark ? 'gray.400' : 'gray.800'}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorModeCookie}
      {...props}
      p={3}
    />
  );
};

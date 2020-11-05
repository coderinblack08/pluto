import { Box, useColorMode } from '@chakra-ui/core';
import React from 'react';

export const Banner: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Box className="flex items-center justify-center py-2 relative z-20 text-white font-medium bg-gray-800 ">
      <Box
        bg={isDark ? 'gray.700' : 'gray.800'}
        className="flex items-center bg-opacity-50 rounded-full px-4 py-1"
      >
        Now available in alpha release.
        <a href="#" className="ml-2 hover:underline text-indigo-200">
          Learn More →
        </a>
      </Box>
    </Box>
  );
};

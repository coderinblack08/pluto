import { useColorMode } from '@chakra-ui/core';
import React from 'react';

export const SkeletonImage: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <img
      src={
        isDark
          ? require('../../public/static/skeleton-ui-dark.svg')
          : require('../../public/static/skeleton-ui.svg')
      }
      style={{ zIndex: -1, opacity: isDark ? '0.2' : undefined }}
      className="hidden md:block select-none absolute top-0 right-0 mt-10 md:-mt-10 lg:-mt-32 xl:-mt-48 -mr-32 md:-mr-48 xl:-mr-64 xl:max-w-6xl z-0 opacity-75"
      alt="Skeleton UI"
    />
  );
};

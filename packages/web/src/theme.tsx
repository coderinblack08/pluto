import { theme as chakraTheme } from '@chakra-ui/core';
// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const tailwind = resolveConfig(tailwindConfig);

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export const theme = {
  ...chakraTheme,
  config,
  fonts: {
    heading: tailwind.theme.fontFamily.sans.join(', '),
    body: tailwind.theme.fontFamily.sans.join(', '),
  },
  colors: tailwind.theme.colors,
  breakpoints: tailwind.theme.screens,
};

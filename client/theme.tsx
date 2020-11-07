import { theme as chakraTheme } from '@chakra-ui/core';
// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './tailwind.config';

const tailwind = resolveConfig(tailwindConfig);

export const theme = {
  ...chakraTheme,
  colors: tailwind.theme.colors,
  breakpoints: tailwind.theme.screens,
};

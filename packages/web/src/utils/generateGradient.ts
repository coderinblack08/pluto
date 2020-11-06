import { useToken } from '@chakra-ui/core';

export const generateGradient = (from: string, to: string) => {
  const [fromColor, toColor] = useToken('colors', [from, to]);
  return `linear-gradient(90deg, ${fromColor}, ${toColor})`;
};

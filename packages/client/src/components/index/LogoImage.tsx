import React from 'react';
import { Image } from '@chakra-ui/core';

export const LogoImage: React.FC = () => (
  <Image
    w={[6, 7, 9]}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="1.55"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
    as="svg"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9-.745 1.46-5.783-.259-11.255-3.838-5.47-3.579-9.304-7.664-8.56-9.123.464-.91 2.926-.444 5.803.805" />
    <circle cx="12" cy="12" r="7" />
  </Image>
);

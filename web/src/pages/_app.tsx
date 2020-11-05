import '../styles/tailwind.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import { theme } from '../theme';
import cookies from 'next-cookies';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Pluto</title>
        <link
          rel="shortcut icon"
          href={require('../public/favicon.ico')}
          type="image/x-icon"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="Pluto, pluto, communities, reach out, online classrooms"
        />
        <meta name="description" content="Pluto, where communities thrive" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  const { isDarkMode = 'false' } = cookies(ctx);
  return {
    pageProps,
    initialColorMode: isDarkMode === 'true' ? 'dark' : 'light',
  };
};

export default App;

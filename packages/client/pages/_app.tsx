import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '../styles/index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="antialiased">
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;

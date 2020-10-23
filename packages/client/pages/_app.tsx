import '../styles/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <title>Pluto</title>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="Pluto, pluto, communities, reach out, online classrooms"
        />
        <meta name="description" content="Pluto, where communities thrive" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

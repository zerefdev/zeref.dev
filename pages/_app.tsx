import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import theme from '../theme';
import '@fontsource/roboto-mono';
import '../styles/globals.css';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: translate metadata to other languages */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I am a self-taught full-stack developer with over four years of hands-on experience efficiently coding web apps using modern technologies."
        />
        <meta name="author" content="zeref.dev" />
        <meta name="copyright" content="https://zeref.dev" />
        <meta
          name="keywords"
          content="zerefdev, mosseab chakrani, javascript developer, web developer, full-stack developer"
        />
        <meta property="og:title" content="Mosseab Chakrani - Full-stack Developer" />
        <meta
          property="og:description"
          content="I am a self-taught full-stack developer with over four years of hands-on experience efficiently coding web apps using modern technologies."
        />
        <meta property="og:site_name" content="zeref.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeref.dev/" />
        <meta property="og:image" content="/img/me.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Mosseab Chakrani - Full-stack Developer</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
export default MyApp;

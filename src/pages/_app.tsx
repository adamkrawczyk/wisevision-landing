import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import React from 'react';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import Head from 'next/head';
import { Layout } from 'components/Layout';

const globalStyles = `
  html,
  body,
  body > div:first-of-type,
  div#__next {
    height: 100%;
    width: 100%;
  }

  html {
    overflow-x: hidden;
  }

  div#__next {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
  }

  body.ReactModal__Body--open {
    overflow: hidden;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...{ theme }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

import Head from 'next/head';
import { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="img/icon-512.png" />
        <link rel="apple-touch-icon" href="img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work TypeScript, React, Next and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}

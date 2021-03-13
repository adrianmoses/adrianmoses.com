import Head from 'next/head'
import React from 'react';
import Footer from '../components/Footer';
import { GlobalStyle } from '../components/Global.styled'
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>virtus</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" 
          rel="stylesheet"/>
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp

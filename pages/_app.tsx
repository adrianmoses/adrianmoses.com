import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { GlobalStyle } from '../components/Global.styled'
import Navigation from '../components/Navigation';
import userbase, { UserResult} from 'userbase-js';
import tw from 'twin.macro';

const BodyContainer = tw.div`
  px-4
  sm:px-6
  max-w-3xl
  mx-auto
  xl:max-w-5xl
  xl:px-0
`
const Container = tw.div`
  flex
  flex-col
  justify-between
  h-screen
`

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
      <BodyContainer>
        <Container>
          <Navigation />
            <Component {...pageProps} />
          <Footer />
        </Container>
      </BodyContainer>
    </>
  );
}

export default MyApp

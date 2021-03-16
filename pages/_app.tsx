import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { GlobalStyle } from '../components/Global.styled'
import Navigation from '../components/Navigation';
import userbase, { UserResult} from 'userbase-js';

function MyApp({ Component, pageProps }) {
  const userManagementComponents = [
    'Login',
    'SignUp',
  ]
  const [user, setUser] = useState<UserResult>();

  useEffect(() => {
    userbase.init({ appId: process.env.NEXT_PUBLIC_USERBASE_APP_ID })
      .then((session) => {
        console.log("[SESSION] ", session);
        if (session.user) {
          setUser(session.user);
        }
      })
  }, [])

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
      <Navigation user={user} />
      {userManagementComponents.includes(Component.name) ? 
        (
          <Component user={user} setUser={setUser} {...pageProps} />
        ) :

        (
          <Component user={user}  {...pageProps} />
        )
      }
      <Footer />
    </>
  );
}

export default MyApp

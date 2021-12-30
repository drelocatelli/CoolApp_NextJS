import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cool App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
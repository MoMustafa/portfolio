/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Main from 'components/main'
import WindowsDimensionsProvider from 'contexts/windowDimensionsCtx/provider'
import Header from 'components/header'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Portfolio App</title>
      <meta name="description" content="Mo's Portfolio App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="lightTheme">
      <WindowsDimensionsProvider>
        <Header />
        <Main />
      </WindowsDimensionsProvider>
    </main>
  </div>
)

export default Home

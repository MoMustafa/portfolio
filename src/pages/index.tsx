/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'
import Main from 'components/main'
import WindowsDimensionsProvider from 'contexts/windowDimensionsCtx/provider'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Portfolio App</title>
      <meta name="description" content="Mo's Portfolio App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <WindowsDimensionsProvider>
        <Main />
      </WindowsDimensionsProvider>
    </main>
  </div>
)

export default Home

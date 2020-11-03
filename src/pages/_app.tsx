import { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import Head from 'next/head'
import '../styles/base.css'

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App

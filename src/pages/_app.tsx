import '../styles/global.scss'
import type { AppProps } from 'next/app';
import Head from 'next/head';
// Components
import Layout from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Administrador de usuarios</title>
          <meta name="Landing Page" content="CRUD users" />
          <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;
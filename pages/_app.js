import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Head from 'next/head';
import { SSRProvider } from 'react-bootstrap';
export default function App({ Component, pageProps }) {
  
    return (
      <SSRProvider>
        <Head>
        <link rel="icon" href="/iiitlLogo.png" />
        <title>Indian Institute of Information Technology, Lucknow</title>
      </Head>
     <Component {...pageProps} />
  </SSRProvider>
    )
  
  
}

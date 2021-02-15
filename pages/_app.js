import { useEffect } from 'react'
import '../styles/globals.css'
import Head from 'next/head'


const CommonHead = () => {
  useEffect(()=> {
    register('/service-worker.js', {scope: '/'}) 
    return () => {
        unregister();  
    };
}, [])
  return (
        <Head>
            <title>Next PWA demo</title>
            <link rel="manifest" href="/static/manifest.webmanifest" />
            <meta name = "apple-mobile-web-app-capable" content="yes" />
            <meta name = "apple-mobile-web-app-status-bar-style" content="black" />
            <meta name = "apple-mobile-web-app-title" content="Next PWA demo" />
            <link rel="apple-touch-icon" href="/static/logo-icon-144x144.png" />
            <link rel="apple-touch-startup-icon" href="/static/logo-icon-144x144.png" />
        </Head>
    )
}


function MyApp({ Component, pageProps }) {
  return (
    <>
    <CommonHead/>
    <Component {...pageProps}/>
    </>
  ) 
}

export default MyApp

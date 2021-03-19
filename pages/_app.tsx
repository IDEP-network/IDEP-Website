import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';

//
// ─── OWN IMPORTS ────────────────────────────────────────────────────────────────
import '../styles/main.scss'
import HeadAndMeta from 'components/global/head/HeadAndMeta';
import Loading from 'components/global/loading/Loading';





function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    // window.addEventListener("load", function () {
    setTimeout(() => {
      console.log('should load')
      setIsLoading(false)
    }, 8000);
    // });
  }, [])


  return (
    <>
      <HeadAndMeta />
      <Loading isLoading={isLoading} />
      <Component {...pageProps} />
      <style jsx global> {`
      @font-face {
        font-family: "Inter";
        font-style: normal;
        font-weight: 100 900; // Range of weights supported
        src: url(/fonts/Inter.var.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
          U+FEFF, U+FFFD;
      }
      `}</style>
    </>
  )
}

export default MyApp

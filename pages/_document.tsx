import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from 'components/lib/google analitics/gtag'


const scriptTxt = `
    (function () {
      const { pathname } = window.location
      const ipfsMatch = /.*\\/Qm\\w{44}\\//.exec(pathname)
      const base = document.createElement('base')

      base.href = ipfsMatch ? ipfsMatch[0] : '/'
      document.head.append(base)
    })();

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
`


class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script dangerouslySetInnerHTML={{ __html: scriptTxt }} />
          <link
            rel="preload"
            href="/fonts/Inter.var.woff2"
            as="font"
            type="font/woff2"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
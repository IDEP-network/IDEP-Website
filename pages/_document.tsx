import Document, { Html, Head, Main, NextScript } from 'next/document'


const scriptTxt = `
    (function () {
      const { pathname } = window.location
      const ipfsMatch = /.*\\/Qm\\w{44}\\//.exec(pathname)
      const base = document.createElement('base')

      base.href = ipfsMatch ? ipfsMatch[0] : '/'
      document.head.append(base)
    })();
`



class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
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
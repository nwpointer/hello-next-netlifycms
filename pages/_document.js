// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html className="h-full">
        <Head>
          <meta name="viewport" content="width=device-width"/>
          <link href="https://fonts.googleapis.com/css?family=Alegreya:100,400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,400,700" rel="stylesheet"/>
          <link rel="stylesheet" href="/static/main.css"/>
          <link rel="stylesheet" href="/static/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css"/>
          <link rel="stylesheet" href="/static/fontawesome/web-fonts-with-css/css/fa-brands.min.css"/>
          <link rel="stylesheet" href="/static/carousel.min.css"/>
          <style>{`
            #__next{ height: 100%}
          `}</style>
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
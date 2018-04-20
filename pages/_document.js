import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'
import { siteDescription, siteTitle, themeColor } from 'site-metadata'
import normalize from 'normalize.css'

import global from './global.css'

export default class CustomDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <meta name="theme-color" content={themeColor} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="manifest" href="/manifest.json" />

          <style dangerouslySetInnerHTML={{ __html: `${normalize} ${global}` }} />
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

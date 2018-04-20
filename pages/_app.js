import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'site-theme'
import App, { Container } from 'next/app'
import Layout from 'components/layout/Layout'
import { loadGoogleFonts } from 'google-fonts'
import { registerServiceWorker } from 'service-worker'

const googleFonts = {
  Roboto: ['400', '400i', '700'],
  'Roboto Mono': ['400'],
}

export default class CustomApp extends App {
  componentDidMount() {
    loadGoogleFonts(googleFonts)
    registerServiceWorker()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    )
  }
}

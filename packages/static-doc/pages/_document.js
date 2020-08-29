import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang={userConfig?.lang || 'en'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

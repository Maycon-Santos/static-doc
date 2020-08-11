import React from 'react'
import { AppProps } from 'next/app'
import Theme from '@static-doc/default-theme/theme'

const App: React.FC<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

export default App

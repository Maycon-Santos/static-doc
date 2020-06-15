import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { IncomingMessage } from 'http'
import cookie from 'cookie'
import jsCookie from 'js-cookie'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components/macro'
import theme from 'theme'
import { HeadingsContext, Heading } from 'contexts/headings-context'
import { GlobalStyle } from 'styles/global.styled'
import Layout from 'components/layout'
import * as mdxComponents from 'components/mdx'
import { Theme } from 'theme/type'
import userConfig from 'data/user-config'
import { useCurrentPageData } from 'hooks/use-current-page-data'

interface Props extends AppProps {
  initialColorMode: Theme['colorMode']
}

const App = (props: Props) => {
  const { Component, pageProps, initialColorMode } = props
  const [colorMode, setColorMode] = useState<Theme['colorMode']>(initialColorMode || theme.colorMode)
  const [headings, setHeadings] = useState<Heading[]>([])
  const headingsMemo = useMemo<Heading[]>(() => [], [])
  const currentPage = useCurrentPageData()
  const baseUrl = userConfig.baseUrl
  const { title } = currentPage?.data || {}
  theme.colorMode = colorMode

  const headingsRegister = (heading: Heading) => {
    headingsMemo.push(heading)
  }

  useEffect(() => {
    setHeadings([...headingsMemo])
    headingsMemo.splice(0, headingsMemo.length)
  }, [Component])

  useEffect(() => {
    if (!initialColorMode) {
      const savedColorMode = jsCookie.get('colorMode') as Theme['colorMode']
      setColorMode(savedColorMode || theme.colorMode)
    }
  }, [])

  const themeProviderSetColorMode = (colorMode: Theme['colorMode']) => {
    jsCookie.set('colorMode', colorMode)
    setColorMode(colorMode)
  }

  return (
    <ThemeProvider theme={{ ...theme, setColorMode: themeProviderSetColorMode }}>
      <Head>
        <title>{title}</title>
        <base href={baseUrl} />
        {theme.googleFonts?.map(font => {
          const { name, weights } = font

          const formattedName = name.replace(/ /g, '+')
          const formattedWeight = weights.join(';')

          return (
            <link
              key={name}
              href={`https://fonts.googleapis.com/css2?family=${formattedName}:wght@${formattedWeight}&display=swap`}
              rel="stylesheet"
            />
          )
        })}
      </Head>
      <GlobalStyle {...theme} />
      <HeadingsContext.Provider value={{ register: headingsRegister, items: headings }}>
        <Layout>
          <MDXProvider components={mdxComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </Layout>
      </HeadingsContext.Provider>
    </ThemeProvider>
  )
}

App.getInitialProps = async ({ ctx: { req } }: { ctx: { req: IncomingMessage }}) => {
  const cookieString = req ? req.headers.cookie : document.cookie
  const { colorMode } = cookie.parse(cookieString || '')
  return { initialColorMode: colorMode }
}

export default App

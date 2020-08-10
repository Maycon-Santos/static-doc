import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
// import { IncomingMessage } from 'http'
// import cookie from 'cookie'
import jsCookie from 'js-cookie'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components/macro'
import { HeadingsContext, Heading } from '../contexts/headings-context'
import { LayoutContext } from '../contexts/layout-context'
import { GlobalStyle } from '../styles/global.styled'
import Layout from '../components/layout'
import * as mdxComponents from '../components/mdx'
import theme from '../theme'
import { Theme } from '../theme/type'
import userConfig from '../data/user-config'
import getAsset from '../utils/get-asset'
import { useCurrentPageData } from '../hooks'

interface Props extends AppProps {
  initialColorMode: Theme['colorMode']
}

const App = (props: Props) => {
  const { Component, pageProps, initialColorMode } = props
  // const defaultColorMode = global?.matchMedia ? (
  //   global.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  // ) : theme.colorMode
  const defaultColorMode = 'dark'
  const [colorMode, setColorMode] = useState<Theme['colorMode']>(
    initialColorMode || defaultColorMode
  )
  const [headings, setHeadings] = useState<Heading[]>([])
  const [asideIsOpen, setAsideIsOpen] = useState<boolean>(false)
  const headingsMemo = useMemo<Heading[]>(() => [], [])
  const currentPage = useCurrentPageData()
  const router = useRouter()
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

  useEffect(() => {
    setAsideIsOpen(false)
  }, [router.pathname])

  const themeProviderSetColorMode = (colorMode: Theme['colorMode']) => {
    jsCookie.set('colorMode', colorMode)
    setColorMode(colorMode)
  }

  return (
    <ThemeProvider
      theme={{ ...theme, setColorMode: themeProviderSetColorMode }}
    >
      <Head>
        <title>
          {userConfig.titlePrefix}
          {title}
          {userConfig.titleSuffix}
        </title>
        <link rel='shortcut icon' href={getAsset(userConfig.favicon)} />
        <base href={baseUrl} />
        {theme.googleFonts?.map(font => {
          const { name, weights } = font

          const formattedName = name.replace(/ /g, '+')
          const formattedWeight = weights.join(';')

          return (
            <link
              key={name}
              href={`https://fonts.googleapis.com/css2?family=${formattedName}:wght@${formattedWeight}&display=swap`}
              rel='stylesheet'
            />
          )
        })}
      </Head>
      <GlobalStyle {...theme} />
      <HeadingsContext.Provider
        value={{ register: headingsRegister, items: headings }}
      >
        <LayoutContext.Provider
          value={{
            aside: {
              isOpen: asideIsOpen,
              toggle: () => setAsideIsOpen(!asideIsOpen),
              close: () => setAsideIsOpen(false),
              open: () => setAsideIsOpen(true)
            }
          }}
        >
          <Layout>
            <MDXProvider components={mdxComponents}>
              <Component {...pageProps} />
            </MDXProvider>
          </Layout>
        </LayoutContext.Provider>
      </HeadingsContext.Provider>
    </ThemeProvider>
  )
}

// App.getInitialProps = async ({ ctx: { req } }: { ctx: { req: IncomingMessage }}) => {
//   const cookieString = req ? req.headers.cookie : document.cookie
//   const { colorMode } = cookie.parse(cookieString || '')
//   return { initialColorMode: colorMode }
// }

export default App

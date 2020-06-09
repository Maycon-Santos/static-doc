import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { IncomingMessage } from 'http'
import cookie from 'cookie'
import jsCookie from 'js-cookie'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import { HeadingsContext, Heading } from 'contexts/headings-context'
import { GlobalStyle } from 'styles/global.styled'
import Layout from 'components/layout'
import pages from 'data/pages'
import * as mdxComponents from 'components/mdx'
import { Theme } from 'theme/type'

interface Props extends AppProps {
  initialColorMode: Theme['colorMode']
}

const App = (props: Props) => {
  const { Component, pageProps, initialColorMode } = props
  const [colorMode, setColorMode] = useState<Theme['colorMode']>(initialColorMode || theme.colorMode)
  const [headings, setHeadings] = useState<Heading[]>([])
  const headingsMemo = useMemo<Heading[]>(() => [], [])
  const router = useRouter()
  const currentPage = pages.find(page => router.pathname === page.route)
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
    jsCookie.set('colorMode', colorMode)
  }, [colorMode])

  return (
    <ThemeProvider theme={{ ...theme, setColorMode }}>
      <Head>
        <title>{title}</title>
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

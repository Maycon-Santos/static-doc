import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import getConfig from 'next/config'
import Theme from '@static-doc/user-theme'
import getAsset from '../utils/run-time/get-asset'
import resolveHeadingId from '../utils/run-time/resolve-heading-id'
import { useCurrentPage } from '@static-doc/theme-utils'

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

const App = props => {
  const { Component, pageProps } = props
  const [initialized, setInitialized] = useState(false)
  const [headingItems, setHeadingItems] = useState([])
  const headingItemsMemo = useMemo(() => [], [])
  const router = useRouter()
  const currentPage = useCurrentPage()

  const headings = {
    register (content, element) {
      const id = resolveHeadingId(content)

      useEffect(() => {
        headingItemsMemo.push({
          content,
          id,
          level: Number(element.replace(/\D+/, ''))
        })
      }, [])

      return { id }
    },
    items: headingItems
  }

  useEffect(() => {
    setHeadingItems([...headingItemsMemo])
    headingItemsMemo.length = 0
  }, [router.pathname])

  useEffect(() => {
    setInitialized(true)
  }, [])

  return (
    <Theme essentials={{ getAsset, headings }}>
      <Component {...pageProps} />
      <Head>
        <title>
          {userConfig.titlePrefix}
          {currentPage?.data?.title}
          {userConfig.titleSuffix}
        </title>
        <link rel='shortcut icon' href={getAsset(userConfig?.favicon)} />
        <meta name='Description' content={currentPage?.data?.description} />
        <style>{`
          body {
            opacity: ${Number(initialized)};
            transition: opacity 0ms 100ms;
          }
        `}</style>

        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='keywords' content='Keywords' />
        {!userConfig.pwa.disable && (
          <link rel='manifest' href={userConfig.pwa.manifestUrl} />
        )}
        {/* <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' /> */}
        {/* <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' /> */}
        {/* <link rel="apple-touch-icon" href="/apple-icon.png" /> */}
        {/* <meta name="theme-color" content="#317EFB"/> */}
      </Head>
    </Theme>
  )
}

export default App

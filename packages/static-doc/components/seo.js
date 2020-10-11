import React from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import { useCurrentPage } from '@static-doc/theme-utils'

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

const SEO = () => {
  const currentPage = useCurrentPage()

  return (
    <Head>
      <title>
        {userConfig.titlePrefix}
        {currentPage?.data?.title}
        {userConfig.titleSuffix}
      </title>

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" content="Keywords" />

      {!userConfig.pwa.disable && (
        <link rel="manifest" href={userConfig.pwa.manifestUrl} />
      )}

      <meta name="title" content={userConfig.titlePrefix + currentPage?.data?.title + userConfig.titleSuffix} />
      <meta name="description" content={currentPage?.data?.description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={userConfig.titlePrefix + currentPage?.data?.title + userConfig.titleSuffix} />
      <meta property="og:description" content={currentPage?.data?.description} />
      <meta property="og:image" content={currentPage?.data?.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={userConfig.titlePrefix + currentPage?.data?.title + userConfig.titleSuffix} />
      <meta property="twitter:description" content={currentPage?.data?.description} />
      <meta property="twitter:image" content={currentPage?.data?.image} />

      {typeof userConfig?.favicon === 'object' ? (
        <>
          {userConfig.favicon.normal && <link rel="shortcut icon" href={userConfig.favicon.normal} />}
          {userConfig.favicon.normal && <link rel="icon" type="image/png" href={userConfig.favicon.normal} />}
          {userConfig.favicon.x16 && <link href={userConfig.favicon.x16} rel="icon" type="image/png" sizes="16x16" />}
          {userConfig.favicon.x32 && <link href={userConfig.favicon.x32} rel="icon" type="image/png" sizes="32x32" />}
        </>
      ) : (
        userConfig.favicon && (
          <>
            <link rel="icon" type="image/png" href={userConfig.favicon} />
            <link rel="shortcut icon" href={userConfig.favicon} />
          </>
        )
      )}

      {userConfig.appleTouchIcon && <link rel="apple-touch-icon" href={userConfig.appleTouchIcon} />}
    </Head>
  )
}

export default SEO

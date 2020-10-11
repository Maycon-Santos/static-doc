import React from 'react'
import NextHead from 'next/head'
import { useColorMode, useStyleVars } from '@static-doc/theme-utils'

const Head: React.FC = () => {
  const { colorMode } = useColorMode()
  const { color } = useStyleVars()

  return (
    <NextHead>
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      />
      <meta name='theme-color' content={color[colorMode].primary[500]} />
    </NextHead>
  )
}

export default Head

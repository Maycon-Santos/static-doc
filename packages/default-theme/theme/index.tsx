import React from 'react'
import {
  StyleVarsProvider,
  ColorModeProvider,
  Fonts,
  useThemeConfig
} from '@static-doc/theme-utils'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import './styles/global.css'
import styleVars from './config/style-vars'
import * as MarkdownComponents from './markdown'
import Layout from './layout'

const Theme: React.FC<{ essentials: any }> = props => {
  const { children } = props
  const { initialColorMode = 'light' } = useThemeConfig()

  return (
    <StyleVarsProvider value={styleVars} cssVars>
      <ColorModeProvider
        bodyClassNames={{ light: 'light-mode', dark: 'dark-mode' }}
        initial={initialColorMode}
      >
        <Head>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
          />
        </Head>
        <Fonts
          body={{
            family: ['Montserrat', 'sans-serif'],
            weight: 500
          }}
          googleFonts={[
            {
              family: 'Montserrat',
              weights: [500, 600, 700]
            }
          ]}
        />
        <MDXProvider components={MarkdownComponents}>
          <Layout>{children}</Layout>
        </MDXProvider>
      </ColorModeProvider>
    </StyleVarsProvider>
  )
}

export default Theme

import React from 'react'
import {
  StyleVarsProvider,
  ColorModeProvider,
  Fonts,
  useThemeConfig
} from '@static-doc/theme-utils'
import { MDXProvider } from '@mdx-js/react'
import './styles/global.css'
import styleVars from './config/style-vars'
import * as MarkdownComponents from './markdown'
import Layout from './layout'
import Head from './head'

const Theme: React.FC<{ essentials: any }> = props => {
  const { children } = props
  const { initialColorMode = 'light' } = useThemeConfig()

  return (
    <StyleVarsProvider value={styleVars} cssVars>
      <ColorModeProvider
        bodyClassNames={{ light: 'light-mode', dark: 'dark-mode' }}
        initial={initialColorMode}
      >
        <Head />
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

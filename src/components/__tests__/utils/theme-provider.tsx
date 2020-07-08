import React from 'react'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
// @ts-ignore
import merge from 'lodash.merge'

const ThemeProvider: React.FC = ({ children, theme: themeOverwrite = {} }) => {
  const theme = {
    colorMode: 'light',
    colors: {
      light: {},
      dark: {}
    }
  }

  merge(theme, themeOverwrite)

  return <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
}

export default ThemeProvider

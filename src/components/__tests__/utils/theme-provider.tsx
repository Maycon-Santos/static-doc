import React from 'react'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
// @ts-ignore
import merge from 'lodash.merge'
import { ThemeContextValue } from '../../../theme/type'

const ThemeProvider: React.FC<{ theme?: Partial<ThemeContextValue> }> = ({ children, theme: themeOverwrite = {} }) => {
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

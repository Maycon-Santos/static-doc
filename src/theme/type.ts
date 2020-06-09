export interface Theme {
  colorMode: 'light' | 'dark'
  spacing: number[]
  fontSizes: number[]
  fontWeights: {
    [key: string]: number
  }
  lineHeights: {
    [key: string]: number
  }
  radii: {
    [key: string]: number
  }
  googleFonts?: Array<{
    name: string,
    weights: number[]
  }>
  fontFamilies: {
    [key: string]: string[]
  }
  colors: {
    light: { [key: string]: any },
    dark: { [key: string]: any }
  }
}

export interface ThemeContext extends Theme {
  setColorMode: (colorMode: string) => void
}

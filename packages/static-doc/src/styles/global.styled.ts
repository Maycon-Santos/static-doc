import { createGlobalStyle } from 'styled-components/macro'
import { reset } from './reset'
import { useColor, useFontFamily } from '../hooks'

export const GlobalStyle = createGlobalStyle<any>`
  ${reset}
  html, body, #__next { height: 100%; }
  html { scroll-behavior: smooth; }
  body {
    color: ${() => useColor('text')};
    font-family: ${() => useFontFamily('primary')};
    line-height: ${theme => theme.lineHeights.body};
    font-weight: ${theme => theme.fontWeights.body};
    background-color: ${() => useColor('body', 'background')};
  }
`

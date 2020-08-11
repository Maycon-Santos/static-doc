import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { useLineHeight } from '../use-line-height'

const theme = {
  lineHeights: {
    body: 1.5,
    heading: 1.125
  }
}

describe('[hook] useLineHeight', () => {
  it.each(Object.keys(theme.lineHeights))(
    'should return the line height %s',
    lineHeight => {
      const wrapper: React.FC = ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )
      const { result } = renderHook(() => useLineHeight(lineHeight), {
        wrapper
      })

      expect(result.current).toBe(theme.lineHeights[lineHeight])
    }
  )
})

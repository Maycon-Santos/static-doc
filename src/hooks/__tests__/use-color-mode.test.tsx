import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { useColorMode } from '../use-color-mode'

describe('[hook] usecolorMode', () => {
  it.each(['light', 'dark'])('should return value on %s', colorMode => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={{ colorMode }}>{children}</ThemeProvider>
    )
    const values = { light: 'light value', dark: 'dark value' }
    const { result } = renderHook(() => useColorMode(values), { wrapper })

    expect(result.current).toBe(values[colorMode])
  })
})

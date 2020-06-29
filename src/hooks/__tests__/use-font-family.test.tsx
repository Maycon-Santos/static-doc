import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { useFontFamily } from 'hooks/use-font-family'

const theme = {
  fontFamilies: {
    primary: ['Open Sans', 'sans-serif']
  }
}

describe('[hook] useFontFamily', () => {
  it('should return font family with css syntax', () => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
    const { result } = renderHook(() => useFontFamily('primary'), { wrapper })

    expect(result.current).toBe("'Open Sans', sans-serif")
  })
})

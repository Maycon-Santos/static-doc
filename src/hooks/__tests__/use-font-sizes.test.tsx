import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { useFontSize } from 'hooks/use-font-size'

const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64]
}

describe('[hook] useFontSize', () => {
  it('should return a size by index', () => {
    const indexes = Array(theme.fontSizes.length)
      .fill(0)
      .map((_, index) => index)
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )

    for (const index of indexes) {
      const { result } = renderHook(() => useFontSize(index), { wrapper })
      expect(result.current).toBe(`${theme.fontSizes[index]}px`)
    }
  })
})

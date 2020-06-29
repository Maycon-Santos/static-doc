import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { useSpacing } from 'hooks/use-spacing'

const theme = {
  spacing: [0, 2, 4, 8, 16, 32, 48, 64, 80, 100]
}

describe('[hook] useSpacing', () => {
  it('should return a spacing by index', () => {
    const indexes = Array(theme.spacing.length)
      .fill(0)
      .map((_, index) => index)
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )

    for (const index of indexes) {
      const { result } = renderHook(() => useSpacing(index), { wrapper })
      expect(result.current).toBe(`${theme.spacing[index]}px`)
    }
  })
})

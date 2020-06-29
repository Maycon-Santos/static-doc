import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { useRadii } from 'hooks/use-radii'

const theme = {
  radii: {
    square: 0,
    radius: 4,
    rounded: 10
  }
}

describe('[hook] useRadii', () => {
  it.each(Object.keys(theme.radii))('should return the %s radius', radius => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )

    const { result } = renderHook(() => useRadii(radius), { wrapper })
    expect(result.current).toBe(`${theme.radii[radius]}px`)
  })
})

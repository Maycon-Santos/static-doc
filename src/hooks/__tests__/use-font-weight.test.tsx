import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { useFontWeight } from 'hooks/use-font-weight'

const theme = {
  fontWeights: {
    body: 400,
    semiBold: 600,
    bold: 700
  }
}

describe('[hook] useFontWeight', () => {
  it.each(Object.keys(theme.fontWeights))(
    'should return the %s weight',
    weight => {
      const wrapper: React.FC = ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )

      const { result } = renderHook(() => useFontWeight(weight), { wrapper })
      expect(result.current).toBe(theme.fontWeights[weight])
    }
  )
})

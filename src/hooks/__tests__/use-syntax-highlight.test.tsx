import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { useSyntaxHighlight } from 'hooks/use-syntax-highlight'
import theme from 'theme'

describe('[hook] useSyntaxHighlight', () => {
  it('should return the syntax highlight colors', () => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )

    const { result } = renderHook(() => useSyntaxHighlight(), { wrapper })
    expect(result.current).toMatchSnapshot()
  })
})

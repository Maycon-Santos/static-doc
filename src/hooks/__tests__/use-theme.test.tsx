import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
// @ts-ignore
import merge from 'lodash.merge'

const theme = {
  option: {
    subOption: 0,
    subOption1: [0, 1, 2, 3]
  },
  option1: 1,
  option2: 2
}

describe('[hook] useTheme', () => {
  const userConfigMock = {}

  jest.doMock('data/user-config', () => userConfigMock)

  beforeEach(() => {
    Object.keys(userConfigMock).forEach(key => delete userConfigMock[key])
  })

  it('should return the theme', () => {
    const { useTheme } = require('hooks/use-theme')
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current).toEqual(theme)
  })

  it('should return the theme with user configuration', () => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )

    const mergedTheme = { ...theme }
    const userTheme = {
      option: {
        subOption1: [4, 5, 6, 7, 8],
        subOption2: 2
      },
      option3: 3
    }

    Object.assign(userConfigMock, { theme: userTheme })

    const { useTheme } = require('hooks/use-theme')
    const { result } = renderHook(() => useTheme(), { wrapper })

    merge(mergedTheme, userTheme)

    expect(result.current).toEqual(mergedTheme)
  })
})

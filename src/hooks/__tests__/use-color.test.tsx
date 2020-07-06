import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider } from 'styled-components/macro'
import { rgba } from 'polished'
import { useColor } from '../use-color'

const theme = {
  colorMode: 'light',
  colors: {
    light: {
      text: {
        variant1: '#13161F',
        variant2: 'white'
      },
      gray: {
        400: '#dadde2',
        500: '#ececee',
        600: '#cfd5e0'
      },
      only: {
        500: '#ffffff'
      },
      withoutVariations: '#ff0000'
    },
    dark: {
      text: {
        variant1: '#FFFEFF',
        variant2: '#282A36'
      },
      gray: {
        400: '#2E2B4C',
        500: '#25233F',
        600: '#211F3B'
      },
      withoutVariations: '#00ff00'
    }
  }
}

describe('[hook] useColor', () => {
  it.each(['light', 'dark'])('should return a color of %s mode', colorMode => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={{ ...theme, colorMode }}>{children}</ThemeProvider>
    )
    const { result } = renderHook(() => useColor('gray', 500), { wrapper })
    const colors = theme.colors[colorMode]

    expect(result.current).toBe(colors.gray[500])
  })

  it.each(['light', 'dark'])(
    'should return a color without variation of %s mode',
    colorMode => {
      const wrapper: React.FC = ({ children }) => (
        <ThemeProvider theme={{ ...theme, colorMode }}>
          {children}
        </ThemeProvider>
      )
      const { result } = renderHook(() => useColor('withoutVariations'), {
        wrapper
      })
      const colors = theme.colors[colorMode]

      expect(result.current).toBe(colors.withoutVariations)
    }
  )

  it.each([
    ['gray', 500, 'light'],
    ['text', 'variant1', 'dark']
  ])(
    'should return a color with variation fallback of %s mode',
    (colorName, variantion, colorMode) => {
      const wrapper: React.FC = ({ children }) => (
        <ThemeProvider theme={{ ...theme, colorMode }}>
          {children}
        </ThemeProvider>
      )
      const { result } = renderHook(() => useColor(colorName), { wrapper })
      const colors = theme.colors[colorMode]

      expect(result.current).toBe(colors[colorName][variantion])
    }
  )

  it.each([
    ['gray', 'light'],
    ['gray', 'dark'],
    ['withoutVariations', 'light'],
    ['withoutVariations', 'dark']
  ])('should return a transparent color of %s mode', (colorName, colorMode) => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={{ ...theme, colorMode }}>{children}</ThemeProvider>
    )
    const { result } = renderHook(() => useColor(colorName, undefined, 0.5), {
      wrapper
    })
    const colors = theme.colors[colorMode]
    const color = colors[colorName][500] || colors[colorName]

    expect(result.current).toBe(rgba(color, 0.5))
  })

  it.each([
    ['variant1', 'text', 'light'],
    ['variant2', 'text', 'light'],
    ['variant1', 'text', 'dark'],
    ['variant2', 'text', 'dark'],
    [400, 'gray', 'light'],
    [600, 'gray', 'light'],
    [400, 'gray', 'dark'],
    [600, 'gray', 'dark']
  ])(
    'should return variation %s of color %s of %s mode',
    (variation, colorName, colorMode) => {
      const wrapper: React.FC = ({ children }) => (
        <ThemeProvider theme={{ ...theme, colorMode }}>
          {children}
        </ThemeProvider>
      )
      const { result } = renderHook(() => useColor(colorName, variation), {
        wrapper
      })
      const colors = theme.colors[colorMode]

      expect(result.current).toBe(colors[colorName][variation])
    }
  )

  it('should return color fallback', () => {
    const colorMode = 'dark'
    const colorName = 'only'
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={{ ...theme, colorMode }}>{children}</ThemeProvider>
    )
    const { result } = renderHook(() => useColor(colorName), { wrapper })
    const colors = theme.colors.light

    expect(result.current).toBe(colors[colorName][500])
  })
})

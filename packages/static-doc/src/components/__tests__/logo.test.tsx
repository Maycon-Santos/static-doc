import React from 'react'
import { render, screen } from '@testing-library/react'
import ThemeProvider from './utils/theme-provider'

describe('<Logo>', () => {
  const userConfigMock = {} as {
    name: string
    logo: {
      light: string
      dark: string
    }
  }

  jest.doMock('data/user-config', () => userConfigMock)

  beforeEach(() => {
    Object.keys(userConfigMock).forEach(key => delete userConfigMock[key])
  })

  it('Should render app name', () => {
    userConfigMock.name = 'App name'
    const Logo = require('../logo').default
    render(
      <ThemeProvider>
        <Logo />
      </ThemeProvider>
    )

    expect(screen.getByText(userConfigMock.name)).toBeInTheDocument()
  })

  it.each(['light', 'dark'])('Should render app logo in %s mode', (colorMode: 'light' | 'dark') => {
    userConfigMock.name = 'App name'
    userConfigMock.logo = {
      light: 'light-logo-url.svg',
      dark: 'dark-logo-url.svg'
    }
    const Logo = require('../logo').default
    render(
      <ThemeProvider theme={{ colorMode }}>
        <Logo />
      </ThemeProvider>
    )

    expect(screen.getByTitle(userConfigMock.name)).toHaveAttribute(
      'src',
      `${colorMode}-logo-url.svg`
    )
  })

  it('should render text fallback', () => {
    const Logo = require('../logo').default
    render(
      <ThemeProvider>
        <Logo />
      </ThemeProvider>
    )

    expect(screen.getByText('Your logo here')).toBeInTheDocument()
  })
})

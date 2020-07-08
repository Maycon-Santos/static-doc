import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ThemeProvider from './utils/theme-provider'

describe('<Logo>', () => {
  const userConfigMock = {}

  jest.doMock('data/user-config', () => userConfigMock)

  beforeEach(() => {
    Object.keys(userConfigMock).forEach(key => delete userConfigMock[key])
  })

  it('Should render app name', () => {
    userConfigMock.name = 'App name'
    const Logo = require('../logo').default
    const { getByText } = render(
      <ThemeProvider>
        <Logo />
      </ThemeProvider>
    )

    expect(getByText(userConfigMock.name)).toBeInTheDocument()
  })

  it.each(['light', 'dark'])('Should render app logo in %s mode', colorMode => {
    userConfigMock.name = 'App name'
    userConfigMock.logo = {
      light: 'light-logo-url.svg',
      dark: 'dark-logo-url.svg'
    }
    const Logo = require('../logo').default
    const { getByTitle } = render(
      <ThemeProvider theme={{ colorMode }}>
        <Logo />
      </ThemeProvider>
    )

    expect(getByTitle(userConfigMock.name)).toHaveAttribute(
      'src',
      `${colorMode}-logo-url.svg`
    )
  })

  it('should render text fallback', () => {
    const Logo = require('../logo').default
    const { getByText } = render(
      <ThemeProvider>
        <Logo />
      </ThemeProvider>
    )

    expect(getByText('Your logo here')).toBeInTheDocument()
  })
})

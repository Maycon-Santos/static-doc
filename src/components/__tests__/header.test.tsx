import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ThemeProvider from './utils/theme-provider'
import Header from '../header'

describe('<Header>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call openAside by clicking on HamburgerButton', () => {
    const openAsideSpy = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider>
        <Header openAside={openAsideSpy} />
      </ThemeProvider>
    )

    fireEvent.click(getByTestId('HamburgerButton'))

    expect(openAsideSpy).toBeCalled()
  })

  it.each(['dark', 'light'])(
    'should call setColorMode with %s by clicking on ColorModeSwitchButton',
    colorMode => {
      const setColorModeSpy = jest.fn()
      const { getByTestId } = render(
        <ThemeProvider
          theme={{
            setColorMode: setColorModeSpy,
            colorMode: colorMode === 'light' ? 'dark' : 'light'
          }}
        >
          <Header />
        </ThemeProvider>
      )

      fireEvent.click(getByTestId('ColorModeSwitchButton'))

      expect(setColorModeSpy).toBeCalledWith(colorMode)
    }
  )
})

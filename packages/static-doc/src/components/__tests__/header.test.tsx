import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { LayoutContext, LayoutContextValue } from '../../contexts/layout-context'
import Header from '../header'
import ThemeProvider from './utils/theme-provider'

const layoutContextValue = {} as LayoutContextValue

describe('<Header>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    Object.assign(layoutContextValue, {
      aside: {
        isOpen: true,
        toggle: jest.fn(),
        close: jest.fn(),
        open: jest.fn()
      }
    })
  })

  it('should call aside.open by clicking on HamburgerButton', () => {
    render(
      <ThemeProvider>
        <LayoutContext.Provider value={layoutContextValue}>
          <Header />
        </LayoutContext.Provider>
      </ThemeProvider>
    )

    fireEvent.click(screen.getByTestId('HamburgerButton'))

    expect(layoutContextValue.aside.open).toHaveBeenCalled()
  })

  it.each(['dark', 'light'])(
    'should call setColorMode with %s by clicking on ColorModeSwitchButton',
    colorMode => {
      const setColorModeSpy = jest.fn()
      render(
        <ThemeProvider
          theme={{
            setColorMode: setColorModeSpy,
            colorMode: colorMode === 'light' ? 'dark' : 'light'
          }}
        >
          <LayoutContext.Provider value={layoutContextValue}>
            <Header />
          </LayoutContext.Provider>
        </ThemeProvider>
      )

      fireEvent.click(screen.getByTestId('ColorModeSwitchButton'))

      expect(setColorModeSpy).toBeCalledWith(colorMode)
    }
  )
})

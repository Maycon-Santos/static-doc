import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { LayoutContext, LayoutContextValue } from '../../contexts/layout-context'
import Aside from '../aside'
import ThemeProvider from './utils/theme-provider'

const layoutContextValue = {} as LayoutContextValue

describe('<Aside>', () => {
  beforeEach(() => {
    Object.assign(layoutContextValue, {
      aside: {
        isOpen: true,
        toggle: jest.fn(),
        close: jest.fn(),
        open: jest.fn()
      }
    })
  })

  it('should be open', () => {
    layoutContextValue.aside.isOpen = true

    render(
      <ThemeProvider>
        <LayoutContext.Provider value={layoutContextValue}>
          <Aside />
        </LayoutContext.Provider>
      </ThemeProvider>
    )

    const overlayStyle = window.getComputedStyle(screen.getByTestId('Overlay'))
    const asideStyle = window.getComputedStyle(screen.getByTestId('Aside'))

    expect(overlayStyle.opacity).toBe('1')
    expect(asideStyle.transform).toBe('translate3d(0,0,0)')
  })

  it('should be closed', () => {
    layoutContextValue.aside.isOpen = false

    render(
      <ThemeProvider>
        <Aside />
      </ThemeProvider>
    )

    const overlayStyle = window.getComputedStyle(screen.getByTestId('Overlay'))
    const asideStyle = window.getComputedStyle(screen.getByTestId('Aside'))

    expect(overlayStyle.opacity).toBe('0')
    expect(asideStyle.transform).toBe('translate3d(-100%,0,0)')
  })

  it('should call aside.close by clicking on Overlay', () => {
    render(
      <ThemeProvider>
        <Aside />
      </ThemeProvider>
    )

    fireEvent.click(screen.getByTestId('Aside'))

    expect(layoutContextValue.aside.close).toHaveBeenCalled()
  })
})

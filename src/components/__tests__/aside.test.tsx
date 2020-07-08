import React from 'react'
import { render } from '@testing-library/react'
import ThemeProvider from './utils/theme-provider'
import Aside from '../aside'

describe('<Aside>', () => {
  it('should be open', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Aside open={true} />
      </ThemeProvider>
    )

    const overlayStyle = window.getComputedStyle(getByTestId('Overlay'))
    const asideStyle = window.getComputedStyle(getByTestId('Aside'))

    expect(overlayStyle.opacity).toBe('1')
    expect(asideStyle.transform).toBe('translate3d(0,0,0)')
  })

  it('should be closed', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Aside open={false} />
      </ThemeProvider>
    )

    const overlayStyle = window.getComputedStyle(getByTestId('Overlay'))
    const asideStyle = window.getComputedStyle(getByTestId('Aside'))

    expect(overlayStyle.opacity).toBe('0')
    expect(asideStyle.transform).toBe('translate3d(-100%,0,0)')
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import ThemeProvider from './utils/theme-provider'
import Menu from '../menu'

describe('<Menu>', () => {
  it('should render the menu tree', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Menu />
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import ThemeProvider from './utils/theme-provider'

describe('<TableOfContents>', () => {
  it('should render a list with levels', () => {
    jest.mock('../../hooks/use-headings.ts', () => ({
      useHeadings: () => ({
        items: [
          {
            level: 1,
            id: 'id-test-1',
            text: 'text test 1'
          },
          {
            level: 2,
            id: 'id-test-2',
            text: 'text test 2'
          },
          {
            level: 3,
            id: 'id-test-3',
            text: 'text test 3'
          },
          {
            level: 4,
            id: 'id-test-4',
            text: 'text test 4'
          },
          {
            level: 5,
            id: 'id-test-5',
            text: 'text test 5'
          }
        ]
      })
    }))
    const TableOfContents = require('../table-of-contents').default

    const { getByText } = render(
      <ThemeProvider>
        <TableOfContents />
      </ThemeProvider>
    )

    for (let i = 1; i <= 5; i++) {
      const element = getByText(new RegExp(`text test ${i}`))
      const parent = element.parentElement

      expect(element).toHaveAttribute('href', `#id-test-${i}`)
      expect(parent).toHaveClass(`level-${i}`)
    }
  })
})

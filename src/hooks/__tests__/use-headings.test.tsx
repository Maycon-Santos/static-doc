import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { HeadingsContext } from 'contexts/headings-context'
import { useHeadings } from 'hooks/use-headings'

const headings = {
  items: [
    {
      text: 'Heading text',
      id: 'heading-id',
      level: 0
    }
  ]
}

describe('[hook] useHeadings', () => {
  it('should return the heading context value', () => {
    const wrapper: React.FC = ({ children }) => (
      // @ts-ignore
      <HeadingsContext.Provider value={headings}>
        {children}
      </HeadingsContext.Provider>
    )

    const { result } = renderHook(() => useHeadings(), { wrapper })
    expect(result.current).toBe(headings)
  })
})

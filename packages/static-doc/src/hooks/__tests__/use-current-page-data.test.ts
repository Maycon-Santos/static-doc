import { renderHook } from '@testing-library/react-hooks'
import { useCurrentPageData } from '../use-current-page-data'
import pages from '../../data/__mocks__/pages'

jest.mock('data/pages')

describe('[hook] useCurrentPageData', () => {
  it('should return data about current page', () => {
    const { result } = renderHook(() => useCurrentPageData())

    const currentPage = pages.find(page => page.route === '/mock')

    expect(result.current).toEqual(currentPage)
  })
})

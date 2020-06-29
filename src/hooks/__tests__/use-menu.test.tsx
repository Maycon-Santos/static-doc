import { renderHook } from '@testing-library/react-hooks'
import { useMenu } from 'hooks/use-menu'

jest.mock('data/pages')

describe('[hook] useMenu', () => {
  it('should return the menu tree', () => {
    const { result } = renderHook(() => useMenu())

    expect(result.current).toEqual({
      '': [
        {
          path: 'index.mdx',
          route: '/',
          category: '',
          isExternalLink: false,
          data: {
            title: 'Page index title',
            name: 'Page index name'
          }
        },
        {
          path: 'mock.mdx',
          route: '/mock',
          category: '',
          isExternalLink: false,
          data: {
            title: 'Page mock title',
            name: 'Page mock name'
          }
        }
      ],
      mock: [
        {
          path: 'mock/mock.mdx',
          route: '/mock/mock',
          category: 'mock',
          isExternalLink: false,
          data: {
            title: 'Page mock subpath title',
            name: 'Page mock subpath name'
          }
        }
      ]
    })
  })
})

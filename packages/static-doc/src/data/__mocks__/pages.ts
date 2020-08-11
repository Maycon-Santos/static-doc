export default [
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
  },
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

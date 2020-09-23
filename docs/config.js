const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  name: '⚡ Static Doc',
  favicon: '/assets/favicon.ico',
  titlePrefix: 'Static Doc | ',
  buildDir: '../packages/static-doc/.docs',
  pwa: {
    disable: !isProd,
    manifestUrl: 'manifest.json'
  },
  menu: [
    'index.mdx',
    {
      icon: {
        dark: '/assets/github-icon-dark.svg',
        light: '/assets/github-icon-light.svg'
      },
      to: 'configure.mdx'
    },
    'Customize/theme.mdx',
    'Customize/custom-components.mdx',
    'Customize/error-page.mdx'
  ],
  theme: {
    path: '',
    config: {
      colorMode: {
        initial: 'light'
      }
    }
  }
}

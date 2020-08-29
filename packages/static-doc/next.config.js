const { join } = require('path')
const withImages = require('next-images')
const withMDX = require('./next/mdx')
const allowGlobalCssImport = require('./next/allow-global-css-import')
// const allowAbsoluteImport = require('./next/allow-absolute-import')
const injectConfig = require('./next/inject-config')
const injectThemeAlias = require('./next/inject-theme-alias')
const { baseUrl, buildDir } = require('./bin/modules/user-config')
const { root } = require('./config')

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)
const osRoot = root.own.split('/').map(() => '..').join('/')

module.exports = pipe(
  withImages,
  withMDX,
  injectConfig,
  injectThemeAlias,
  allowGlobalCssImport
  // allowAbsoluteImport,
)({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  distDir: join(osRoot, buildDir),
  assetPrefix: baseUrl !== '/' ? baseUrl : ''
})

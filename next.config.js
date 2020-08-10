const withImages = require('next-images')
const withMDX = require('./next/mdx')
const allowGlobalCssImport = require('./next/allow-global-css-import')
const allowAbsoluteImport = require('./next/allow-absolute-import')
const generateBuildId = require('./next/generate-build-id')
const { baseUrl } = require('./bin/modules/user-config')
const { build, isDev } = require('./config/build-time')

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

module.exports = pipe(
  withImages,
  withMDX,
  allowGlobalCssImport,
  allowAbsoluteImport,
  generateBuildId
)({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  distDir: isDev ? build.dev.dir : build.prod.dir,
  assetPrefix: baseUrl !== '/' ? baseUrl : ''
})

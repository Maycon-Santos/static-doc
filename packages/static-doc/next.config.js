const { join } = require('path')
const { existsSync } = require('fs')
const withImages = require('next-images')
const withMDX = require('./next/mdx')
const allowGlobalCssImport = require('./next/allow-global-css-import')
const injectConfig = require('./next/inject-config')
const injectThemeAlias = require('./next/inject-theme-alias')
const { baseUrl, buildDir } = require('./bin/modules/user-config')
const { pwa } = require('./bin/modules/user-config')
const { root, docs } = require('./config')
const pipe = require('./utils/pipe')

require('./next/setup').call()

const allowPWA = existsSync(docs.public.origin) && !pwa.disable
const withPWA = allowPWA && require('next-pwa')

module.exports = pipe(
  withImages,
  withMDX,
  withPWA,
  injectConfig,
  injectThemeAlias,
  allowGlobalCssImport
)({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  distDir: join(root.os, buildDir),
  assetPrefix: baseUrl !== '/' ? baseUrl : '',
  pwa: {
    dest: 'public'
  }
})

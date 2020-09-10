const { join } = require('path')
const { existsSync } = require('fs')
const withMDX = require('./next/mdx')
const warmup = require('./next/warmup')
const allowGlobalCssImport = require('./next/allow-global-css-import')
const injectConfig = require('./next/inject-config')
const injectThemeAlias = require('./next/inject-theme-alias')
const { baseUrl, buildDir, pwa } = require('./data/user-config')
const { root, docs } = require('./config')
const pipe = require('./utils/pipe')

const allowPWA = existsSync(docs.public.origin) && !pwa.disable
const withPWA = allowPWA && require('next-pwa')

warmup()

module.exports = pipe(
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

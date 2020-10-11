const { join } = require('path')
const { existsSync } = require('fs')
const withMDX = require('./next/with-mdx')
const warmup = require('./next/warmup')
const withCssGlobalImport = require('./next/with-css-global-import')
const WithRuntimeConfig = require('./next/with-runtime-config')
const WithThemeAlias = require('./next/with-theme-alias')
const { baseUrl, buildDir, pwa } = require('./data/user-config')
const { OS_ROOT_PATH, DOCS_PUBLIC_ORIGIN_PATH, GENERATED_FILES_DIR } = require('./constants')
const pipe = require('./utils/pipe')

const allowPWA = existsSync(DOCS_PUBLIC_ORIGIN_PATH) && !pwa.disable
const withPWA = allowPWA && require('next-pwa')

warmup()

module.exports = pipe(
  withMDX,
  withPWA,
  WithRuntimeConfig,
  WithThemeAlias,
  withCssGlobalImport
)({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  distDir: join(OS_ROOT_PATH, buildDir),
  assetPrefix: baseUrl !== '/' ? baseUrl : '',
  pwa: {
    dest: `public/${GENERATED_FILES_DIR}/pwa`
  }
})

const {
  resolve
} = require('path')

const { argv } = require('yargs')

argv.dir = argv.dir || ''

const docsOriginPath = resolve(process.cwd(), argv.dir)
const sourcePath = resolve(__dirname, '../src')
const buildDir = `.build/${Buffer.from(process.cwd()).toString('base64')}`
const devDir = `.dev/${Buffer.from(process.cwd()).toString('base64')}`
const userConfigPath = resolve(docsOriginPath, '.config')
const assetsDir = '.assets'
const assetsDestinyPath = resolve(sourcePath, `public/${assetsDir}`)
const originalComponentsDir = 'components'

module.exports = {
  docsOriginPath,
  sourcePath,
  devDir,
  buildDir,
  userConfigPath,
  assetsDir,
  assetsDestinyPath,
  docsDestinyPath: resolve(sourcePath, 'pages'),
  devPath: resolve(sourcePath, devDir),
  buildPath: resolve(sourcePath, buildDir),
  customComponentsOriginPath: resolve(docsOriginPath, '.components'),
  customComponentsDestinyPath: resolve(sourcePath, '.components'),
  originalComponentsDir,
  originalComponentsPath: resolve(sourcePath, originalComponentsDir),

  ignorePathsToSymlink: /^\.config$/,
  pathsSymlinkToSource: /^\.components$/,
  customComponents: ['logo']
}

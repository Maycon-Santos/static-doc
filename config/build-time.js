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
const assetsDir = 'static/_assets'
const assetsDestinyPath = resolve(sourcePath, assetsDir)
const originalComponentsDir = 'components'
const outDir = `.out/${Buffer.from(process.cwd()).toString('base64')}`

module.exports = {
  docsOriginPath,
  sourcePath,
  devDir,
  userConfigPath,
  assetsDir,
  assetsDestinyPath,
  docsDestinyPath: resolve(sourcePath, 'pages'),
  devPath: resolve(sourcePath, devDir),
  customComponentsOriginPath: resolve(docsOriginPath, '.components'),
  customComponentsDestinyPath: resolve(sourcePath, '.components'),
  originalComponentsDir,
  originalComponentsPath: resolve(sourcePath, originalComponentsDir),
  nextBinPath: resolve(__dirname, '../node_modules/.bin/next'),
  buildDir,
  outDir,
  buildPath: resolve(sourcePath, buildDir),
  outPath: resolve(sourcePath, outDir),

  ignorePathsToSymlink: /^\.config$/,
  pathsSymlinkToSource: /^\.components$/,
  customComponents: ['logo']
}

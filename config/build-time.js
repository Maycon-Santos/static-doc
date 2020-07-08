const { resolve } = require('path')

const { argv } = require('yargs')

const command = argv._[0]

const rootPath = resolve(__dirname, '..')
const userRootPath = process.cwd()
const docsOriginPath = resolve(userRootPath, process.env.dir || 'docs')
const sourcePath = resolve(rootPath, 'src')
const buildDir = `.build/${Buffer.from(userRootPath).toString('base64')}`
const devDir = `.dev/${Buffer.from(userRootPath).toString('base64')}`
const userConfigPath = resolve(docsOriginPath, '.config')
const assetsDir = 'assets'
const assetsDestinyPath = resolve(rootPath, `public/${assetsDir}`)
const originalComponentsDir = 'components'
const outDir = `.out/${Buffer.from(userRootPath).toString('base64')}`

module.exports = {
  rootPath,
  docsOriginPath,
  sourcePath,
  devDir,
  userConfigPath,
  assetsDir,
  assetsDestinyPath,
  userRootPath,
  docsDestinyPath: resolve(sourcePath, 'pages'),
  publicPath: resolve(rootPath, 'public'),
  devPath: resolve(rootPath, devDir),
  customComponentsOriginPath: resolve(docsOriginPath, '.components'),
  customComponentsDestinyPath: resolve(sourcePath, '.components'),
  originalComponentsDir,
  originalComponentsPath: resolve(sourcePath, originalComponentsDir),
  nextBinPath: resolve(__dirname, '../node_modules/.bin/next'),
  buildDir,
  outDir,
  buildPath: resolve(rootPath, buildDir),
  outPath: resolve(rootPath, outDir),

  ignorePathsToSymlink: /^\.config$/,
  pathsSymlinkToSource: /^\.components$/,
  customComponents: ['logo'],
  isDev: command === 'dev'
}

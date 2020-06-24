const {
  resolve
} = require('path')

const rootPath = process.cwd()
const docsOriginPath = resolve(rootPath, process.env.dir)
const sourcePath = resolve(rootPath, 'src')
const buildDir = `.build/${Buffer.from(process.cwd()).toString('base64')}`
const devDir = `.dev/${Buffer.from(process.cwd()).toString('base64')}`
const userConfigPath = resolve(docsOriginPath, '.config')
const assetsDir = '_assets'
const assetsDestinyPath = resolve(rootPath, `public/${assetsDir}`)
const originalComponentsDir = 'components'
const outDir = `.out/${Buffer.from(process.cwd()).toString('base64')}`

module.exports = {
  rootPath,
  docsOriginPath,
  sourcePath,
  devDir,
  userConfigPath,
  assetsDir,
  assetsDestinyPath,
  docsDestinyPath: resolve(sourcePath, 'pages'),
  publicPath: resolve(sourcePath, 'public'),
  devPath: resolve(sourcePath, devDir),
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
  customComponents: ['logo']
}

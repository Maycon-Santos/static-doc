const {
  resolve
} = require('path')

const {
  spawnSync
} = require('child_process')

const copydir = require('copy-dir')

const {
  originPagesDir,
  sourcePath,
  docsOriginPath,
  buildPath,
  nextBinPath,
  outPath
} = require('../../config/build-time')

const rmRecursive = require('./rm-recursive')
const loadUserConfig = require('./load-user-config')

function resolveNextJsBuildArgs () {
  return [
    nextBinPath,
    'build',
    sourcePath
  ]
}

function resolveNextJsExportArgs () {
  return [
    nextBinPath,
    'export',
    sourcePath
  ]
}

module.exports = function build () {
  const nextJsBuildArgs = resolveNextJsBuildArgs()
  const nextJsExportArgs = resolveNextJsExportArgs()
  const userConfig = loadUserConfig(originPagesDir)

  const spawnConfig = {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      config: JSON.stringify(userConfig)
    }
  }

  rmRecursive(outPath)

  spawnSync('node', nextJsBuildArgs, spawnConfig)
  spawnSync('node', nextJsExportArgs, spawnConfig)

  const distDir = userConfig.distDir || '.docs_build'
  const distPath = resolve(docsOriginPath, `../${distDir}`)

  copydir.sync(outPath, distPath)

  console.log('\n', '\x1b[30m\x1b[42m', 'Done! ')
}

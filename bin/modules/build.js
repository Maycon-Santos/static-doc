const {
  resolve,
  join
} = require('path')

const {
  spawnSync
} = require('child_process')

const {
  argv
} = require('yargs')

const copydir = require('copy-dir')

const {
  originPagesDir,
  sourcePath,
  docsOriginPath,
  buildPath,
  nextBinPath,
  outPath,
  publicPath
} = require('../../config/build-time')

const rmRecursive = require('./rm-recursive')
const loadUserConfig = require('./load-user-config')
const unlinkFiles = require('./unlink-files')

function resolveNextJsBuildArgs () {
  return [
    nextBinPath,
    'build'
  ]
}

function resolveNextJsExportArgs () {
  return [
    nextBinPath,
    'export',
    '-o',
    outPath
  ]
}

module.exports = function build () {
  const command = argv._[0]
  const nextJsBuildArgs = resolveNextJsBuildArgs()
  const nextJsExportArgs = resolveNextJsExportArgs()
  const userConfig = loadUserConfig()
  const outFiles = command === 'build:static' ? outPath : buildPath

  const spawnConfig = {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      config: JSON.stringify(userConfig)
    }
  }

  rmRecursive(outFiles)

  spawnSync('node', nextJsBuildArgs, spawnConfig)

  const distDir = userConfig.distDir || '.docs_build'
  const distPath = resolve(docsOriginPath, `../${distDir}`)

  if (command === 'build:static') {
    spawnSync('node', nextJsExportArgs, spawnConfig)
  }

  copydir.sync(outFiles, distPath)

  console.log('\n', '\x1b[30m\x1b[42m', 'Done! ')
}

const { resolve, join } = require('path')
const { spawnSync } = require('child_process')
const { argv } = require('yargs')
const { renameSync, symlinkSync, existsSync } = require('fs')

const {
  rootPath,
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
  return [nextBinPath, 'build']
}

function resolveNextJsExportArgs () {
  return [nextBinPath, 'export', '-o', outPath]
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
      cwd: rootPath,
      NODE_ENV: 'production',
      config: JSON.stringify(userConfig)
    }
  }

  const distDir =
    command === 'build:static'
      ? userConfig.buildStaticDir || '.docs_static_build'
      : userConfig.buildDir || '.docs_build'
  const distPath = resolve(docsOriginPath, `../${distDir}`)

  if (existsSync(distPath)) {
    rmRecursive(outFiles)
  }

  if (existsSync(distPath)) {
    rmRecursive(distPath)
  }

  spawnSync('node', nextJsBuildArgs, spawnConfig)

  if (command === 'build:static') {
    spawnSync('node', nextJsExportArgs, spawnConfig)
  }

  renameSync(outFiles, distPath)
  symlinkSync(distPath, outFiles)

  console.log('\n', '\x1b[30m\x1b[42m', 'Done! ')
}

const {
  resolve
} = require('path')

const {
  spawn
} = require('child_process')

const {
  symlinkSync,
  existsSync,
  lstatSync,
  realpathSync
} = require('fs')

const {
  originPagesDir,
  sourcePath,
  docsOriginPath,
  buildPath
} = require('../../config/build-time')

const loadUserConfig = require('./load-user-config')

function resolveNextJsArgs () {
  const nextBin = resolve(__dirname, '../../node_modules/.bin/next')

  return [
    nextBin,
    'build',
    sourcePath
  ]
}

module.exports = function build () {
  const nextJsArgs = resolveNextJsArgs()
  const userConfig = loadUserConfig(originPagesDir)

  spawn('node', nextJsArgs, {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      config: JSON.stringify(userConfig)
    }
  }).on('exit', () => {
    const distDir = userConfig.distDir || '.docs_build'
    const distPath = resolve(docsOriginPath, `../${distDir}`)

    if (existsSync(distPath)) {
      const isSymbolicLink = lstatSync(distPath).isSymbolicLink()

      if (!isSymbolicLink || realpathSync(distPath) !== buildPath) {
        process.stdout.write('\u001b[3J\u001b[2J\u001b[1J')
        console.clear()
        console.error(`The ${distDir} directory already exists. Change the "distDir" option in the file ${resolve(docsOriginPath, '.config')} (JSON Format)`)
      }

      return
    }

    symlinkSync(buildPath, distPath)
  })
}

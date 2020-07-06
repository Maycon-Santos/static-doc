const {
  resolve
} = require('path')
const {
  existsSync,
  symlinkSync
} = require('fs')
const {
  rootPath,
  userRootPath
} = require('../../config/build-time')

const configurationFiles = {
  ts: {
    defaultFile: 'tsconfig.json',
    fallbackFile: 'tsconfig.default.json',
    possibleFiles: ['tsconfig.json']
  },
  js: {
    defaultFile: null,
    fallbackFile: null,
    possibleFiles: ['jsconfig.json']
  },
  babel: {
    defaultFile: 'babel.config.js',
    fallbackFile: 'babel.config.default.js',
    possibleFiles: ['babel.config.js', '.babelrc']
  },
  postcss: {
    defaultFile: null,
    fallbackFile: null,
    possibleFiles: ['postcss.config.json']
  }
}

module.exports = function resolveConfigurationFiles () {
  Object.keys(configurationFiles).forEach(key => {
    const { defaultFile, fallbackFile, possibleFiles } = configurationFiles[key]

    const hasConfigurationFile = possibleFiles.some(filename => {
      const absolutePath = resolve(userRootPath, filename)

      if (existsSync(absolutePath)) {
        symlinkSync(absolutePath, resolve(rootPath, filename))
        return true
      }
    })

    if (!hasConfigurationFile && defaultFile) {
      symlinkSync(resolve(rootPath, fallbackFile), resolve(rootPath, defaultFile))
    }
  })
}

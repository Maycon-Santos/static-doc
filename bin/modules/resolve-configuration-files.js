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
      const originAbsolutePath = resolve(userRootPath, filename)
      const destinyAbsolutePath = resolve(rootPath, filename)

      if (existsSync(originAbsolutePath) && !existsSync(destinyAbsolutePath)) {
        symlinkSync(originAbsolutePath, destinyAbsolutePath)
        return true
      }
    })

    if (!hasConfigurationFile && fallbackFile && defaultFile) {
      const fallbackPath = resolve(rootPath, fallbackFile)
      const defaultOriginPath = resolve(rootPath, defaultFile)

      if (!existsSync(defaultOriginPath)) {
        symlinkSync(fallbackPath, defaultOriginPath)
      }
    }
  })
}

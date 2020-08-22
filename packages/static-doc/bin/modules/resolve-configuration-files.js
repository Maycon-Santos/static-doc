const { resolve } = require('path')
const { existsSync, symlinkSync } = require('fs')
const { root } = require('../../config')

const configurationFiles = {
  ts: {
    defaultFile: 'tsconfig.json',
    fallbackFile: null,
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

    const hasConfigurationFile = /node_modules/.test(root.own) && possibleFiles.some(filename => {
      const originAbsolutePath = resolve(root.user, filename)
      const destinyAbsolutePath = resolve(root.own, filename)

      if (existsSync(originAbsolutePath) && !existsSync(destinyAbsolutePath)) {
        symlinkSync(originAbsolutePath, destinyAbsolutePath)
        return true
      }
    })

    if (!hasConfigurationFile && fallbackFile && defaultFile) {
      const fallbackPath = resolve(root.own, fallbackFile)
      const defaultOriginPath = resolve(root.own, defaultFile)

      if (!existsSync(defaultOriginPath)) {
        symlinkSync(fallbackPath, defaultOriginPath)
      }
    }
  })
}

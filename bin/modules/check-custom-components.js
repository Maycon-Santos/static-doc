const { readdirSync, existsSync } = require('fs')
const {
  customComponentsOriginPath,
  customComponents
} = require('../../config/build-time')

module.exports = function checkCustomComponents () {
  const availableComponents = {}
  const customComponentsFiles = existsSync(customComponentsOriginPath)
    ? readdirSync(customComponentsOriginPath)
    : []

  customComponents.forEach(componentName => {
    availableComponents[componentName] = false
  })

  customComponentsFiles.forEach(filename => {
    if (/.(jsx?|tsx)$/.test(filename)) {
      const filenameWithoutExtension = filename
        .split('.')
        .slice(0, -1)
        .join('.')
      if (customComponents.includes(filenameWithoutExtension)) {
        availableComponents[filenameWithoutExtension] = true
      }
    }
  })

  return availableComponents
}

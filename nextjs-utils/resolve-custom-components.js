const {
  join
} = require('path')

const {
  customComponentsDestinyPath,
  originalComponentsPath,
  originalComponentsDir
} = require('../config/build-time')

module.exports = function resolveCustomComponents () {
  const customComponents = JSON.parse(process.env.CUSTOM_COMPONENTS)
  const result = {}

  Object.keys(customComponents).forEach(componentName => {
    const isAvailable = Boolean(customComponents[componentName])
    const alias = join(originalComponentsDir, componentName)

    result[alias] = join(
      isAvailable ? customComponentsDestinyPath : originalComponentsPath,
      componentName
    )
  })

  return result
}

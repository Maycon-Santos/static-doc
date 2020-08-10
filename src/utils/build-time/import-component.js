const { resolve, join } = require('path')
const { readdirSync, statSync, existsSync } = require('fs')
const { components } = require('../../../config')

const ignore = ['__tests__']
const extensions = ['js', 'jsx', 'ts', 'tsx']

const originalComponents = readdirSync(components.own).filter(f => !ignore.includes(f))
const customComponents = []
const componentsToFind = []

originalComponents.forEach(filename => {
  extensions.forEach(ext => {
    componentsToFind.push(`${filename}.${ext}`)
    componentsToFind.push(join(filename, `index.${ext}`))
  })
})

componentsToFind.forEach(filename => {
  const path = resolve(components.user, filename)

  if (existsSync(path)) {
    const isDir = statSync(path).isDirectory()
    if (isDir) return

    const componentFilename = filename.includes('/') ? filename.split('/')[0] : filename
    const componentBaseName = componentFilename.includes('.') ? componentFilename.split('.').slice(0, -1).join('.') : componentFilename

    customComponents.push({
      name: componentBaseName,
      path: path
    })
  }
})

module.exports = function importComponent (componentName) {
  const foundCustomComponent = customComponents.find(({ name }) => name === componentName)

  if (!foundCustomComponent) {
    return resolve(components.own, componentName)
  }

  return foundCustomComponent.path
}

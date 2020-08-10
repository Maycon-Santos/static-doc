#!/usr/bin/env node
const cli = require('./modules/cli')
const { argv } = cli.init()

const deleteIgnoredFiles = require('./modules/delete-ignored-files')
const linkPages = require('./modules/link-pages')
const startServer = require('./modules/start-server')
const build = require('./modules/build')
const resolveConfigurationFiles = require('./modules/resolve-configuration-files')
const unlinkFiles = require('./modules/unlink-files')
const command = argv._[0]

async function main () {
  if (command === 'setup-test') {
    unlinkFiles()
    resolveConfigurationFiles()
  }

  if (command === 'link') {
    unlinkFiles()
    linkPages()
    resolveConfigurationFiles()
    console.log('All files have been linked!')
  }

  if (command === 'clear') {
    console.log('Cleaning...')
    unlinkFiles()
    await deleteIgnoredFiles()
    console.log('Clean!')
  }

  if (command === 'dev') {
    unlinkFiles()
    linkPages()
    resolveConfigurationFiles()
    startServer()
  }

  if (command === 'build') {
    unlinkFiles()
    linkPages()
    resolveConfigurationFiles()
    build()
  }

  if (command === 'build:static') {
    unlinkFiles()
    linkPages()
    resolveConfigurationFiles()
    build()
  }

  if (command === 'start') {
    startServer()
  }
}

main()

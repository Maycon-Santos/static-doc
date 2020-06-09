#!/usr/bin/env node

const {
  resolve
} = require('path')

const {
  existsSync,
  mkdirSync
} = require('fs')

const { argv } = require('yargs')
  .command('dev', 'Run the development server')
  .command('build', 'Build the production project')
  .command('start', 'Starts the production server (must run the build command first)')
  .option('port', {
    alias: 'p',
    default: '3000',
    describe: 'Sets the server port',
    type: 'number'
  })
  .option('dir', {
    alias: 'd',
    default: 'docs',
    describe: 'Directory of MDX documents',
    type: 'string'
  })

const linkFiles = require('./modules/link-files')
const unlinkFiles = require('./modules/unlink-files')
const clearNextJsCache = require('./modules/clear-nextjs-cache')
const startServer = require('./modules/start-server')
const build = require('./modules/build')
const checkCustomComponents = require('./modules/check-custom-components')
const command = argv._[0]

const {
  docsDestinyPath
} = require('../config/build-time')

function main () {
  if (!existsSync(docsDestinyPath)) {
    mkdirSync(docsDestinyPath)
  }

  unlinkFiles()

  if (['dev', 'build'].includes(command)) {
    linkFiles()
    clearNextJsCache(command)
  }

  const customComponentsAvailable = checkCustomComponents()

  process.env.CUSTOM_COMPONENTS = JSON.stringify(customComponentsAvailable)

  switch (command) {
    case 'dev':
    case 'start':
      startServer(argv)
      break
    case 'build':
      build()
  }
}

process.on('SIGINT', () => {
  clearNextJsCache(command)
  unlinkFiles()
  process.exit()
})

main()

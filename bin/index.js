#!/usr/bin/env node

const { existsSync, mkdirSync } = require('fs')

const { argv } = require('yargs')
  .command('dev', 'Run the development server')
  .command('build', 'Build the production project')
  .command('start', 'Start the development server')
  .command('build:static', 'Build the production project with static files')
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

process.env.dir = argv.dir

const linkPages = require('./modules/link-pages')
const clear = require('./modules/clear')
const startServer = require('./modules/start-server')
const build = require('./modules/build')
const checkCustomComponents = require('./modules/check-custom-components')
const resolveConfigurationFiles = require('./modules/resolve-configuration-files')
const command = argv._[0]

const { docsDestinyPath } = require('../config/build-time')

function main () {
  if (!existsSync(docsDestinyPath)) {
    mkdirSync(docsDestinyPath)
  }

  if (!['start', 'clear'].includes(command)) {
    clear()
    linkPages()
    resolveConfigurationFiles()
  }

  const customComponentsAvailable = checkCustomComponents()
  process.env.CUSTOM_COMPONENTS = JSON.stringify(customComponentsAvailable)

  switch (command) {
    case 'dev':
    case 'start':
      startServer()
      break
    case 'build':
    case 'build:static':
      build()
      break
    case 'link':
      console.log('All files have been linked!')
      break
    case 'clear':
      console.log('Cleaning...')
      clear()
      console.log('Clean!')
  }
}

main()

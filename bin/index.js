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
const resolveConfigurationFiles = require('./modules/resolve-configuration-files')
const linkCustomComponents = require('./modules/link-custom-components')
const command = argv._[0]

const { docsDestinyPath } = require('../config/build-time')

function main () {
  if (!existsSync(docsDestinyPath)) {
    mkdirSync(docsDestinyPath)
  }

  if (!['start', 'clear', 'setup-test'].includes(command)) {
    clear()
    linkPages()
    linkCustomComponents()
    resolveConfigurationFiles()
  }

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
      break
    case 'setup-test':
      clear()
      resolveConfigurationFiles()
  }
}

main()

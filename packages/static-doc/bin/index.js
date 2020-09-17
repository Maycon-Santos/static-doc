#!/usr/bin/env node
const cli = require('./modules/cli')
const { argv } = cli.init()

const deleteIgnoredFiles = require('./modules/delete-ignored-files')
const startServer = require('./modules/start-server')
const build = require('./modules/build')
const link = require('./modules/link')
const command = argv._[0]

if (command === 'link') {
  link()
}

if (command === 'clear') {
  console.log('Cleaning...')
  deleteIgnoredFiles()
  console.log('Clean!')
}

if (command === 'dev') {
  startServer()
}

if (command === 'build') {
  build()
}

if (command === 'build:static') {
  build()
}

if (command === 'start') {
  startServer()
}

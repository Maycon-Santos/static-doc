#!/usr/bin/env node
const cli = require('./modules/cli')
const { argv } = cli.init()

process.env.config = JSON.stringify(require('../config'))

const deleteIgnoredFiles = require('./modules/delete-ignored-files')
const linkPages = require('./modules/link-pages')
const startServer = require('./modules/start-server')
const build = require('./modules/build')
const unlinkFiles = require('./modules/unlink-files')
const command = argv._[0]

if (command === 'setup-test') {
  unlinkFiles()
}

if (command === 'link') {
  unlinkFiles()
  linkPages()
  console.log('All files have been linked!')
}

if (command === 'clear') {
  console.log('Cleaning...')
  unlinkFiles()
  deleteIgnoredFiles()
  console.log('Clean!')
}

if (command === 'dev') {
  deleteIgnoredFiles()
  unlinkFiles()
  linkPages()
  startServer()
}

if (command === 'build') {
  deleteIgnoredFiles()
  unlinkFiles()
  linkPages()
  build()
}

if (command === 'build:static') {
  deleteIgnoredFiles()
  unlinkFiles()
  linkPages()
  build()
}

if (command === 'start') {
  startServer()
}

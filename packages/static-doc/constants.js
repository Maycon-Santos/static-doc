const { join, dirname } = require('path')
const { argv } = require('yargs')

const DEFAULT_DOCS_DIR = 'docs'
const DOCS_DIR = argv.dir || process.env.STATIC_DOCS_DIR || DEFAULT_DOCS_DIR

const USER_ROOT_PATH = process.cwd()
const OWN_ROOT_PATH = __dirname
const OS_ROOT_PATH = __dirname.split('/').map(() => '..').join('/')
const DOCS_ROOT_PATH = join(USER_ROOT_PATH, DOCS_DIR)

exports.DEFAULT_DOCS_DIR = DEFAULT_DOCS_DIR
exports.DOCS_DIR = DOCS_DIR
exports.USER_ROOT_PATH = USER_ROOT_PATH
exports.OWN_ROOT_PATH = OWN_ROOT_PATH
exports.OS_ROOT_PATH = OS_ROOT_PATH
exports.DOCS_ROOT_PATH = DOCS_ROOT_PATH

exports.DOCS_PAGES_ORIGIN_PATH = join(DOCS_ROOT_PATH, 'pages')
exports.DOCS_PAGES_DESTINY_PATH = join(OWN_ROOT_PATH, 'pages')
exports.DOCS_PUBLIC_ORIGIN_PATH = join(DOCS_ROOT_PATH, 'public')
exports.DOCS_PUBLIC_DESTINY_PATH = join(OWN_ROOT_PATH, 'public')
exports.USER_CONFIG_PATH = join(DOCS_ROOT_PATH, 'config.js')
exports.GENERATED_FILES_DIR = '_staticdoc'

exports.NEXT_BIN_PATH = join(dirname(require.resolve('next/package.json')), 'dist/bin/next')

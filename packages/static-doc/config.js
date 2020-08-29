const { resolve } = require('path')
let { argv } = require('yargs')

if (!argv.dir) {
  argv = JSON.parse(process.env.argv)
}

const command = argv._[0]

const paths = {
  root: {
    user: process.cwd(),
    own: __dirname
  },
  docs: {
    get root () {
      return resolve(paths.root.user, argv.dir)
    },
    pages: {
      get origin () {
        return resolve(paths.docs.root, 'pages')
      },
      get destiny () {
        return resolve(paths.root.own, 'pages')
      }
    }
  },
  get userConfig () {
    return resolve(paths.docs.root, '.config')
  },

  get testEnvironments () {
    return resolve(paths.root.own, 'test-environments')
  },

  nextBin: resolve(__dirname, '../node_modules/.bin/next'),
  userBuildDirDefault: '.docs_build',
  userBuildStaticDirDefault: '.docs_build_static',

  isDev: command === 'dev'
}

module.exports = paths

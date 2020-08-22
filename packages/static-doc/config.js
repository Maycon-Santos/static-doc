const { resolve } = require('path')
const { argv } = require('yargs')

const command = argv._[0]

const paths = {
  get source () {
    return resolve(paths.root.own, 'src')
  },
  root: {
    user: process.cwd(),
    own: resolve(__dirname)
  },
  docs: {
    get root () {
      return resolve(paths.root.user, argv.dir || 'docs')
    },
    pages: {
      get origin () {
        return resolve(paths.docs.root, 'pages')
      },
      get destiny () {
        return resolve(paths.source, 'pages')
      }
    }
  },
  components: {
    get user () {
      return resolve(paths.docs.root, '.components')
    },
    get own () {
      return resolve(paths.source, 'components')
    }
  },
  build: {
    prod: {
      get dir () {
        return `.build/${Buffer.from(paths.root.user).toString('base64')}`
      },
      get path () {
        return resolve(paths.root.own, paths.build.prod.dir)
      }
    },
    dev: {
      get dir () {
        return `.dev/${Buffer.from(paths.root.user).toString('base64')}`
      }
    }
  },
  out: {
    get dir () {
      return `.out/${Buffer.from(paths.root.user).toString('base64')}`
    },
    get path () {
      return resolve(paths.root.own, paths.out.dir)
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

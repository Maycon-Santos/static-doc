module.exports = {
  init () {
    return require('yargs')
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
  }
}

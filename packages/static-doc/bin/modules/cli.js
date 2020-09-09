const injectDirPositional = yargs => {
  yargs.positional('dir', {
    default: 'docs',
    describe: 'Directory of docs',
    type: 'string'
  })
}

module.exports = {
  init () {
    return require('yargs')
      .command('dev [dir]', 'Run the development server', injectDirPositional)
      .command(
        'build [dir]',
        'Build the production project',
        injectDirPositional
      )
      .command(
        'start [dir]',
        'Start the development server',
        injectDirPositional
      )
      .command('build:static', 'Build the production project with static files')
      .command(
        'link [dir]',
        'Creates a folder as a symbolic link referencing the static-doc root',
        yargs => {
          yargs.positional('dir', {
            describe: 'Name of the folder that will be linked',
            type: 'string',
            default: 'static-doc'
          })
        }
      )
      .option('port', {
        alias: 'p',
        default: '3000',
        describe: 'Sets the server port',
        type: 'number'
      })
  }
}

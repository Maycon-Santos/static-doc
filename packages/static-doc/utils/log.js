module.exports = {
  warn (...data) {
    console.log(
      '\x1b[36m',
      '\n',
      '[static-doc]',
      '\x1b[33m',
      ...data,
      '\x1b[0m',
      '\n'
    )
  },
  error (...data) {
    console.log(
      '\x1b[36m',
      '\n',
      '[static-doc]',
      '\x1b[31m',
      ...data,
      '\x1b[0m',
      '\n'
    )
  }
}

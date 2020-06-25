const tasks = t => t.join(' && ') 

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'node bin/index.js clear',
      'lint-staged'
    ])
  }
}

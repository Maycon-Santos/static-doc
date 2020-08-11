const tasks = t => t.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['node bin/index.js link', 'lint-staged', 'node bin/index.js clear'])
  }
}

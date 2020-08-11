const tasks = t => t.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['node packages/static-doc/bin/index.js link', 'lint-staged', 'node packages/static-doc/bin/index.js clear'])
  }
}

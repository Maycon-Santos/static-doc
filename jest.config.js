const { join } = require('path')

module.exports = {
  transform: {
    '^.+\\.(js|ts)x?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleDirectories: ['node_modules', join(__dirname, 'src')],
  testPathIgnorePatterns: ['/node_modules/', '/.dev/', '/.build/', '/.out/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(js|ts)x?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
}

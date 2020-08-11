const { join } = require('path')

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  transform: {
    '^.+\\.(js|ts)x?$': 'babel-jest',
    "\\.ts$": 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$': '<rootDir>/jest/file-transformer.js'
  },
  // moduleDirectories: ['node_modules', join(__dirname, 'packages')],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(js|ts)x?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
}

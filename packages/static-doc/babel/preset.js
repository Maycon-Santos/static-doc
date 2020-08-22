const isTest = process.env.NODE_ENV === 'test'

module.exports = () => ({
  presets: ['next/babel'],
  plugins: [
    'macros'
  ].filter(Boolean)
})

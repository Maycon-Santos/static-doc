const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  presets: ['next/babel'],
  plugins: [
    'macros',
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ],
    !isTest && [
      'react-remove-properties', {
        properties: ['data-testid']
      }
    ]
  ].filter(Boolean)
}

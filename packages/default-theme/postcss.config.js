module.exports = ({ extractModules }) => ({
  plugins: {
    'postcss-nested': {},
    'postcss-modules': {
      getJSON: extractModules || (() => {})
    },
    'postcss-preset-env': {
      stage: 1,
      preserve: false
    }
  }
})

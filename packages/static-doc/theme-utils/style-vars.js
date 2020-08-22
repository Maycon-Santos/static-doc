const React = require('react')
const Head = require('next/head').default
const flat = require('flat')
const preval = require('babel-plugin-preval/macro')
const merge = require('lodash.merge')
const getConfig = require('next/config').default

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

const StyleVarsContext = React.createContext({})

/**
 * @param {string} styleVars
 */
function useCssVars (styleVars) {
  return React.useMemo(() => {
    const flattenStyleVars = flat(styleVars, { delimiter: '-' })

    const StyleVarsArr = Object.keys(flattenStyleVars).map(varName => {
      const varNameHyphenCase = varName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return `--${varNameHyphenCase}: ${flattenStyleVars[varName]}`
    })

    return `:root {${StyleVarsArr.join(';')}} `
  }, [])
}

/**
 * @param {{
 *  cssVars?: boolean
 *  value: { [key: string]: any }
 *  children: React.Node
 * }} props
 */
function StyleVarsProvider (props) {
  const { cssVars = false, value, children } = props

  const styleVars = React.useMemo(() => {
    const styleVars = value

    if (userConfig.styleVars) {
      merge(styleVars, userConfig.styleVars)
    }

    return styleVars
  }, [])

  const provider = StyleVarsContext.Provider
  const style = cssVars && React.createElement(
    Head, {},
    React.createElement('style', {}, useCssVars(styleVars))
  )

  return React.createElement(
    provider, { value: styleVars },
    style,
    children
  )
}

/**
 * @return {{ [key: string]: string }}
 */
function useStyleVars () {
  return React.useContext(StyleVarsContext)
}

module.exports = {
  StyleVarsProvider,
  useStyleVars
}

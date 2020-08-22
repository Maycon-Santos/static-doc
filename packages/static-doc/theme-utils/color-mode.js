const React = require('react')
const getConfig = require('next/config').default

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

const ColorModeContext = React.createContext({
  colorMode: 'light',
  toggle () {}
})

/**
 * @return {{
 *  colorMode: 'light' | 'dark'
 *  toggle: () => void
 * }}
 */
function useColorMode () {
  return React.useContext(ColorModeContext)
}

/**
 * @param {{
 *  bodyClassNames?: {
 *    light: string
 *    dark: string
 *  }
 *  children: React.Node
 * }} props
 */
function ColorModeProvider (props) {
  const { bodyClassNames, children } = props
  const [colorMode, setColorMode] = React.useState(() => (userConfig.colorMode && userConfig.colorMode.initial) || 'light')

  React.useEffect(() => {
    if (bodyClassNames) {
      Object.keys(bodyClassNames).map(_colorMode => {
        if (_colorMode === colorMode) {
          document.body.classList.add(bodyClassNames[_colorMode])
        } else {
          document.body.classList.remove(bodyClassNames[_colorMode])
        }
      })
    }
  }, [colorMode])

  return React.createElement(
    ColorModeContext.Provider,
    {
      value: {
        colorMode,
        toggle () {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }
      }
    },
    children
  )
}

module.exports = {
  useColorMode,
  ColorModeProvider
}

import React, { createContext, useContext, useState, useEffect } from 'react'

const getConfig = require('next/config').default

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

const ColorModeContext = createContext({
  colorMode: 'light',
  toggle () {}
})

export function useColorMode () {
  return useContext(ColorModeContext)
}

type ColoModeProviderProps = {
  bodyClassNames?: {
    light: string
    dark: string
  }
}

export const ColorModeProvider: React.FC<ColoModeProviderProps> = (props) => {
  const { bodyClassNames, children } = props
  const [colorMode, setColorMode] = useState(() => (userConfig.colorMode && userConfig.colorMode.initial) || 'light')

  useEffect(() => {
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

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        toggle () {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

import React, { createContext, useContext, useState, useEffect } from 'react'
import getConfig from 'next/config'

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
  children: React.ReactNode
  bodyClassNames?: {
    light: string
    dark: string
  }
}

export const ColorModeProvider = (props: ColoModeProviderProps) => {
  const { bodyClassNames, children } = props
  const initialColorMode = userConfig.colorMode && userConfig.colorMode.initial
  const [colorMode, setColorMode] = useState(undefined)

  useEffect(() => {
    if (colorMode) {
      localStorage.setItem('colorMode', colorMode)

      if (bodyClassNames) {
        Object.keys(bodyClassNames).map(_colorMode => {
          if (_colorMode === colorMode) {
            document.body.classList.add(bodyClassNames[_colorMode])
          } else {
            document.body.classList.remove(bodyClassNames[_colorMode])
          }
        })
      }
    }
  }, [colorMode])

  useEffect(() => {
    const persistedColorMode = localStorage.getItem('colorMode')

    if (persistedColorMode === 'light' || persistedColorMode === 'dark') {
      setColorMode(persistedColorMode)
    }
  }, [])

  return (
    <ColorModeContext.Provider
      value={{
        colorMode: colorMode || initialColorMode || 'light',
        toggle () {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

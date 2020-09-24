import React, { createContext, useContext, useState, useEffect } from 'react'

const ColorModeContext = createContext({
  colorMode: 'light',
  toggle () {}
})

export function useColorMode () {
  return useContext(ColorModeContext)
}

type ColoModeProviderProps = {
  initial?: 'light' | 'dark'
  bodyClassNames?: {
    light: string
    dark: string
  }
}

export const ColorModeProvider: React.FC<ColoModeProviderProps> = props => {
  const { bodyClassNames, initial, children } = props
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
    } else {
      setColorMode(initial || 'light')
    }
  }, [])

  return (
    <ColorModeContext.Provider
      value={{
        colorMode: colorMode || initial || 'light',
        toggle () {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

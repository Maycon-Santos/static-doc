import React, { createContext, useContext } from 'react'
import Head from 'next/head'
import flat from 'flat'
import merge from 'lodash.merge'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

const StyleVarsContext = createContext({})

type StyleVars = {
  [key in string | number]: any
}

function injectStyleVars (styleVars: StyleVars) {
  return React.useMemo(() => {
    const flattenStyleVars = flat(styleVars, { delimiter: '-' }) as { [key: string]: any }

    const StyleVarsArr = Object.keys(flattenStyleVars).map(varName => {
      const varNameHyphenCase = varName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return `--${varNameHyphenCase}: ${flattenStyleVars[varName]}`
    })

    return `:root{${StyleVarsArr.join(';')}}`
  }, [])
}

type StyleVarsProviderProps = {
  cssVars: boolean
  value: StyleVars
  children: React.ReactNode
}

export const StyleVarsProvider: React.FC<StyleVarsProviderProps> = props => {
  const { cssVars = false, value, children } = props

  const styleVars = React.useMemo(() => {
    const styleVars = value

    if (userConfig.styleVars) {
      merge(styleVars, userConfig.styleVars)
    }

    return styleVars
  }, [])

  return (
    <StyleVarsContext.Provider value={styleVars}>
      {cssVars && (
        <Head>
          <style>{injectStyleVars(styleVars)}</style>
        </Head>
      )}
      {children}
    </StyleVarsContext.Provider>
  )
}

export function useStyleVars () {
  return useContext(StyleVarsContext)
}

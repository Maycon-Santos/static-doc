// @ts-ignore
import merge from 'lodash.merge'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components/macro'
import userConfig from '../data/user-config'
import { Theme } from '../theme/type'

export function useTheme () {
  const theme: Theme = { ...useContext(ThemeContext) }

  if (userConfig.theme) {
    merge(theme, userConfig.theme)
  }

  return theme
}

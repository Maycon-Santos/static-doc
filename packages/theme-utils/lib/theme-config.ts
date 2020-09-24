import { useUserConfig } from './user-config'

export function useThemeConfig () {
  const { theme = {} } = useUserConfig()
  return theme.config || {}
}

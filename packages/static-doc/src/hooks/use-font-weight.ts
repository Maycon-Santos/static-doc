import { useTheme } from './use-theme'

export function useFontWeight (fontWeight: string): number {
  const theme = useTheme()
  const { fontWeights } = theme

  return fontWeights?.[fontWeight]
}

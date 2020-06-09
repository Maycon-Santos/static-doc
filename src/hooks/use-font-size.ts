import { useTheme } from './use-theme'

export function useFontSize (fontSizeIndex: number): string {
  const theme = useTheme()
  const { fontSizes } = theme

  return `${fontSizes[fontSizeIndex]}px`
}

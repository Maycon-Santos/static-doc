import { useTheme } from './use-theme'

export function useLineHeight (lineHeight: string): number {
  const theme = useTheme()
  const { lineHeights } = theme

  return lineHeights[lineHeight]
}

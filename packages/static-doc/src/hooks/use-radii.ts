import { useTheme } from './use-theme'

export function useRadii (...radii: string[]): string {
  const theme = useTheme()

  return radii.map(radius => `${theme.radii?.[radius]}px`).join(' ')
}

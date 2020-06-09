import { useTheme } from './use-theme'

type ColorModes = {
  [key: string]: string | number
}

export function useColorMode (colorModes: ColorModes): string | number {
  const theme = useTheme()
  const { colorMode } = theme

  return colorModes[colorMode]
}

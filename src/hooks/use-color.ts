import { rgba } from 'polished'
import { useTheme } from './use-theme'

export function useColor (colorName: string, type?: string | number, opacity = 1): string {
  const theme = useTheme()
  const colors = theme.colors[theme.colorMode]
  let color = colors[colorName]

  if (!color) {
    const colorModes = Object.keys(theme.colors)
    colorModes.find(colorMode => {
      if (colors[colorMode]?.[colorName]) {
        color = colors[colorMode][colorName]
      }
    })
  }

  if (typeof color === 'string') {
    return opacity < 1 ? rgba(color, opacity) : color
  }

  type = type || (color[500] && 500) || Object.keys(color)[0]
  return opacity < 1 ? rgba(color[type], opacity) : color[type]
}

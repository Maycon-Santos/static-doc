import { rgba } from 'polished'
import { useTheme } from './use-theme'

export function useColor (
  colorName: string,
  type?: string | number,
  opacity = 1
): string {
  const theme = useTheme()
  let color = theme.colors[theme.colorMode][colorName]

  if (!color) {
    const colorModes = Object.keys(theme.colors)
    colorModes.find(colorMode => {
      const colors = theme.colors[colorMode]
      if (colors?.[colorName]) {
        color = colors[colorName]
      }
    })
  }

  if (typeof color === 'string') {
    return opacity < 1 ? rgba(color, opacity) : color
  }

  type = type || (color && ((color?.[500] && 500) || Object.keys(color)[0]))
  color = color?.[type] || undefined

  return color && (opacity < 1 ? rgba(color, opacity) : color)
}

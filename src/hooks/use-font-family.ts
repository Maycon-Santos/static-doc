import { useTheme } from './use-theme'

export function useFontFamily (fontName: string): string {
  const theme = useTheme()
  const { fontFamilies } = theme

  return fontFamilies[fontName].map(font => / /.test(font) ? `'${font}'` : font).join(', ')
}

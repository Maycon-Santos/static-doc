// @ts-ignore
import merge from 'lodash.merge'
import { useTheme } from './use-theme'

export function useSyntaxHighlight () {
  const theme = useTheme()
  const colorModes = Object.keys(theme.colors)
  let { syntaxHighlight } = theme.colors[theme.colorMode]

  if (!syntaxHighlight) {
    colorModes.find(colorMode => {
      if (theme.colors[colorMode]?.syntaxHighlight) {
        syntaxHighlight = theme.colors[colorMode].syntaxHighlight
      }
    })
  }

  colorModes.forEach(colorMode => {
    if (theme.colors[colorMode]?.syntaxHighlight) {
      const newSyntaxHighlight = {}
      merge(
        newSyntaxHighlight,
        theme.colors[colorMode].syntaxHighlight,
        syntaxHighlight
      )
      syntaxHighlight = newSyntaxHighlight
    }
  })

  return {
    plain: {
      color: syntaxHighlight.plain.text,
      backgroundColor: syntaxHighlight.plain.background
    },
    styles: syntaxHighlight.highlight.map((item: any) => {
      return {
        types: item.types,
        style: {
          color: item.text
        }
      }
    })
  }
}

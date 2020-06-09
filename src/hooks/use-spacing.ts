import { useTheme } from './use-theme'

export function useSpacing (...spaceIndices: Array<number|string>): string {
  const theme = useTheme()
  const { spacing } = theme

  return spaceIndices.map(spaceIndex => {
    return (
      typeof spaceIndex === 'string'
        ? spaceIndex
        : `${spacing[spaceIndex]}px`
    )
  }).join(' ')
}

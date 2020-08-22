import { useContext } from 'react'
import { EssentialsContext } from './essentials'

export function useHeading () {
  const { headings } = useContext(EssentialsContext)
  return headings
}

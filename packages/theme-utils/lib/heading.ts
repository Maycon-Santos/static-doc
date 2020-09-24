import { useContext, createContext } from 'react'

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const HeadingContext = createContext({
  register (content: string, element: Element) {
    return { id: content + element }
  },
  items: []
})

export function useHeading () {
  return useContext(HeadingContext)
}

import { createContext } from 'react'

export const EssentialsContext = createContext({
  headings: {
    register (content: string, element: string) {
      return { id: content + element }
    },
    items: [
      {
        content: '',
        id: '',
        level: 1
      }
    ]
  }
})

export const EssentialsProvider = EssentialsContext.Provider

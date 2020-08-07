import { createContext } from 'react'

export type Heading = {
  text: string
  id: string
  level: number
}

export type HeadingsContextValue = {
  register: (heading: Heading) => void
  items: Heading[]
}

export const HeadingsContext = createContext<HeadingsContextValue>(
  {} as HeadingsContextValue
)

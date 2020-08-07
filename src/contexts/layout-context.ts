import { createContext } from 'react'

export type LayoutContextValue = {
  aside: {
    isOpen: boolean
    toggle: () => void
    close: () => void
    open: () => void
  }
}

export const LayoutContext = createContext({
  aside: {
    isOpen: false,
    toggle: () => {},
    close: () => {},
    open: () => {}
  }
})

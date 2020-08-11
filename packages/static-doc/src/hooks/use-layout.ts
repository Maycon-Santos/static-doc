import { useContext } from 'react'
import { LayoutContext } from '../contexts/layout-context'

export function useLayout () {
  return useContext(LayoutContext)
}

import { useContext } from 'react'
import { HeadingsContext } from 'contexts/headings-context'

export function useHeadings () {
  return useContext(HeadingsContext)
}

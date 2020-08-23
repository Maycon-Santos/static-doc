import React from 'react'
import { useHeading } from '@static-doc/theme-utils'
import styles from '../styles/markdown/headings.css'

function headingFactory (element: string): React.FC<{ children: string }> {
  const Element = element as React.ElementType

  return function Heading (props) {
    const { children } = props
    const { register } = useHeading()
    const { id } = register(children, element)

    return (
      <Element className={styles.heading} id={id}>
        {children}
      </Element>
    )
  }
}

export const h1 = headingFactory('h1')
export const h2 = headingFactory('h2')
export const h3 = headingFactory('h3')
export const h4 = headingFactory('h4')
export const h5 = headingFactory('h5')
export const h6 = headingFactory('h6')

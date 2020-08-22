import React from 'react'
import css from 'styled-jsx/css'
import { useHeading } from 'static-doc/theme-utils'

const headingFactory = (element: string, styles: any): React.FC<{ children: string }> => {
  const Element = element as React.ElementType

  return function Heading (props) {
    const { children } = props
    const { register } = useHeading()
    const { id } = register(children, element)

    return (
      <Element className="heading" id={id}>
        {children}
        <style jsx>{sharedStyles}</style>
        <style jsx>{styles}</style>
      </Element>
    )
  }
}

const sharedStyles = css`
  .heading {
    margin-top: 1em;
    margin-bottom: var(--spacing-3);
    line-height: var(--line-height-heading);
    font-weight: var(--font-weight-bold);
  }
`

const h1Styles = css`
  .heading {
    font-size: var(--font-size-6)
  }
`

const h2Styles = css`
  .heading {
    font-size: var(--font-size-5)
  }
`

const h3Styles = css`
  .heading {
    font-size: var(--font-size-4)
  }
`

const h4Styles = css`
  .heading {
    font-size: var(--font-size-3)
  }
`

const h5Styles = css`
  .heading {
    font-size: var(--font-size-2)
  }
`

const h6Styles = css`
  .heading {
    font-size: var(--font-size-1)
  }
`

export const h1 = headingFactory('h1', h1Styles)
export const h2 = headingFactory('h2', h2Styles)
export const h3 = headingFactory('h3', h3Styles)
export const h4 = headingFactory('h4', h4Styles)
export const h5 = headingFactory('h5', h5Styles)
export const h6 = headingFactory('h6', h6Styles)

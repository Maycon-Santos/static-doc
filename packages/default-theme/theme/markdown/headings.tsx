import React from 'react'
import { useHeading } from 'static-doc/theme-utils'

function headingFactory (element: string): React.FC<{ children: string }> {
  const Element = element as React.ElementType

  return function Heading (props) {
    const { children } = props
    const { register } = useHeading()
    const { id } = register(children, element)

    return (
      <Element className="heading" id={id}>
        {children}
        <style jsx>{`
          .heading {
            margin-top: 1em;
            margin-bottom: var(--spacing-3);
            line-height: var(--line-height-heading);
            font-weight: var(--font-weight-bold);
          }

          h1.heading {
            font-size: var(--font-size-6);
          }

          h2.heading {
            font-size: var(--font-size-5);
          }

          h3.heading {
            font-size: var(--font-size-4);
          }

          h4.heading {
            font-size: var(--font-size-3);
          }

          h5.heading {
            font-size: var(--font-size-2);
          }

          h6.heading {
            font-size: var(--font-size-1);
          }
        `}</style>
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

import React, { useEffect } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import resolveHeadingId from 'utils/resolve-heading-id'
import { useSyntaxHighlight } from 'hooks/use-syntax-highlight'
import { useHeadings } from 'hooks/use-headings'
import * as MDXComponents from './mdx.styled'

function headingFactory (tag: string) {
  return function Heading ({ children }: { children: string }) {
    const id = resolveHeadingId(children)
    const Component = MDXComponents[tag]
    const headings = useHeadings()

    useEffect(() => {
      const level = Number(tag.replace(/\D+/, ''))

      headings.register({
        text: children,
        id,
        level
      })
    }, [])

    return (
      <Component>
        <span className="anchor-target" id={id} />
        {children}
      </Component>
    )
  }
}

export const h1 = headingFactory('h1')
export const h2 = headingFactory('h2')
export const h3 = headingFactory('h3')
export const h4 = headingFactory('h4')
export const h5 = headingFactory('h5')
export const h6 = headingFactory('h6')

export const table = ({ children }: { children: React.ReactNode }) => {
  return (
    <MDXComponents.tableWrapper>
      <MDXComponents.table>
        {children}
      </MDXComponents.table>
    </MDXComponents.tableWrapper>
  )
}

export const code = ({ children = '', className }: { children: string, className: string }) => {
  const language = className?.replace(/language-/, '') as Language
  const syntaxHighlight = useSyntaxHighlight()
  const { backgroundColor } = syntaxHighlight.plain

  return (
    <MDXComponents.code style={{ backgroundColor }}>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={syntaxHighlight}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <div className={className}>
            {tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line, key: index })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        )}
      </Highlight>
    </MDXComponents.code>
  )
}

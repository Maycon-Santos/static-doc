import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { useColorMode } from '@static-doc/theme-utils'
import syntaxHighlighting from '../../syntax-highlighting'

export const inlineCode: React.FC = (props) => {
  const { children } = props

  return (
    <code className="inlineCode">
      {children}
      <style jsx>{`
        .inlineCode {
          display: inline-block;
          margin: var(--spacing-2) var(--spacing-0);
          padding: var(--spacing-1) var(--spacing-2);
          box-sizing: border-box;
          border-radius: 5px;
          white-space: nowrap;
        }

        :global(.light-mode) .inlineCode {
          background-color: var(--color-light-gray-300);
        }

        :global(.dark-mode) .inlineCode {
          background-color: var(--color-dark-gray-300);
        }
      `}</style>
    </code>
  )
}

export const code: React.FC<{ children: string, className: string }> = (props) => {
  const { children, className } = props
  const language = className?.replace(/language-/, '') as Language
  const { colorMode } = useColorMode()
  const theme = syntaxHighlighting[colorMode]
  const { backgroundColor } = theme.plain

  return (
    <code className="code" style={{ backgroundColor }}>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={theme}
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
      <style jsx>{`
        .code {
          display: block;
          overflow: auto;
          margin: var(--spacing-3) 0;
          padding: var(--spacing-3);
          box-sizing: border-box;
          border-radius: 5px;
        }
      `}</style>
    </code>
  )
}

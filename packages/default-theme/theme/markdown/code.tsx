import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { useColorMode } from '@static-doc/theme-utils'
import syntaxHighlighting from '../config/syntax-highlighting'
import styles from '../styles/markdown/code.css'

export const inlineCode: React.FC = (props) => {
  const { children } = props

  return (
    <code className={styles.inlineCode}>
      {children}
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
    <code className={styles.code} style={{ backgroundColor }}>
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
    </code>
  )
}

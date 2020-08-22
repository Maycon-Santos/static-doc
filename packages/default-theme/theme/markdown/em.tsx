import React from 'react'

export const em: React.FC = (props) => {
  const { children } = props

  return (
    <em className="wrapper">
      {children}
      <style jsx>{`
        .wrapper {
          font-style: italic;
        }  
      `}</style>
    </em>
  )
}

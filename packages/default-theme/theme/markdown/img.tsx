import React from 'react'

export const img: React.FC = (props) => {
  const { ...rest } = props

  return (
    <>
      <img alt="" {...rest} className="image" />
      <style jsx>{`
        .image {
          max-width: 100%;
        }
      `}</style>
    </>
  )
}

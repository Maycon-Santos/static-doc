import React from 'react'
import css from 'styled-jsx/css'

export const img: React.FC = (props) => {
  const { ...rest } = props

  return (
    <>
      <img alt="" {...rest} className="image" />
      <style jsx>{styles}</style>
    </>
  )
}

const styles = css`
  .image {
    max-width: 100%;
  }
`

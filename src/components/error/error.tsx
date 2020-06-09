import React from 'react'
import { ErrorProps } from 'next/error'
import { Wrapper } from './error.styled'

export default function Error (props: ErrorProps) {
  const { statusCode } = props

  return (
    <Wrapper>
      {statusCode ? (
        `Error ${statusCode}`
      ) : (
        <>
          Unexpected error
          <br />
          ¯\_(ツ)_/¯
        </>
      )}
    </Wrapper>
  )
}

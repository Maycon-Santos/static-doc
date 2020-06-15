import React from 'react'
import { ErrorProps } from 'next/error'
import Error from 'components/error'

export default function ErrorPage (props: ErrorProps) {
  return <Error {...props} />
}

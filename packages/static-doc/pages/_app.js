import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import Theme from '@static-doc/user-theme'
import getAsset from '../utils/run-time/get-asset'
import resolveHeadingId from '../utils/run-time/resolve-heading-id'

const App = props => {
  const { Component, pageProps } = props
  const [headingItems, setHeadingItems] = useState([])
  const headingItemsMemo = useMemo(() => [], [])
  const router = useRouter()

  const headings = {
    register (content, element) {
      const id = resolveHeadingId(content)

      useEffect(() => {
        headingItemsMemo.push({
          content,
          id,
          level: Number(element.replace(/\D+/, ''))
        })
      }, [])

      return { id }
    },
    items: headingItems
  }

  useEffect(() => {
    setHeadingItems([...headingItemsMemo])
    headingItemsMemo.length = 0
  }, [router.pathname])

  return (
    <Theme essentials={{ getAsset, headings }}>
      <Component {...pageProps} />
    </Theme>
  )
}

export default App

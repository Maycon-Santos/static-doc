import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import Theme from '@static-doc/user-theme'
import { HeadingContext } from '@static-doc/theme-utils'
import SEO from '../components/seo'

function resolveHeadingId (content = '') {
  return content.replace(/ /g, '-')
}

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
    <HeadingContext.Provider value={headings}>
      <SEO />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </HeadingContext.Provider>
  )
}

export default App

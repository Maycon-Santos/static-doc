import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import Aside from '../aside'
import { Main, Wrapper, MainSection, Content } from './layout.styled'
import TableOfContents from '../table-of-contents'
import Header from '../header'

type Props = {
  children: React.ReactNode
  test?: string
}

export default function Layout (props: Props) {
  const { children } = props
  const [asideOpen, setAsideOpen] = useState(false)
  const router = useRouter()

  useEffect(() => setAsideOpen(false), [router.pathname])

  return (
    <Wrapper>
      <Aside open={asideOpen} onClose={() => setAsideOpen(false)} />
      <MainSection>
        <Header openAside={() => setAsideOpen(true)} />
        <Main>
          <TableOfContents />
          <Content>{children}</Content>
        </Main>
      </MainSection>
    </Wrapper>
  )
}

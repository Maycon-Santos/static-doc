import React from 'react'
import dynamic from 'next/dynamic'
// @ts-ignore
import preval from 'babel-plugin-preval/macro'
import { Main, Wrapper, MainSection, Content } from './layout.styled'

const Aside = dynamic(() =>
  import(preval`
  const importComponent = require('../../utils/build-time/import-component')
  module.exports = importComponent('aside')
`)
)

const Header = dynamic(() =>
  import(preval`
  const importComponent = require('../../utils/build-time/import-component')
  module.exports = importComponent('header')
`)
)

const TableOfContents = dynamic(() =>
  import(preval`
  const importComponent = require('../../utils/build-time/import-component')
  module.exports = importComponent('table-of-contents')
`)
)

type Props = {
  children: React.ReactNode
}

export default function Layout (props: Props) {
  const { children } = props

  return (
    <Wrapper>
      <Aside />
      <MainSection>
        <Header />
        <Main>
          <TableOfContents />
          <Content>{children}</Content>
        </Main>
      </MainSection>
    </Wrapper>
  )
}

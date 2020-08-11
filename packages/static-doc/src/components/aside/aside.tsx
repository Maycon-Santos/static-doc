import React from 'react'
// @ts-ignore
import preval from 'babel-plugin-preval/macro'
import dynamic from 'next/dynamic'
import { useLayout } from '../../hooks'
import { AsideWrapper, Overlay, Wrapper } from './aside.styled'

const Logo = dynamic(() =>
  import(preval`
  const importComponent = require('../../utils/build-time/import-component')
  module.exports = importComponent('logo')
`)
)

const Menu = dynamic(() =>
  import(preval`
  const importComponent = require('../../utils/build-time/import-component')
  module.exports = importComponent('menu')
`)
)

export default function Aside () {
  const { aside } = useLayout()

  return (
    <Wrapper>
      <Overlay
        open={aside.isOpen}
        onClick={aside.close}
        data-testid='Overlay'
      />
      <AsideWrapper open={aside.isOpen} data-testid='Aside'>
        <Logo />
        <Menu />
      </AsideWrapper>
    </Wrapper>
  )
}

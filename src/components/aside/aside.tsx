import React from 'react'
import Menu from '../menu'
import Logo from '../logo'
import { AsideWrapper, Overlay, Wrapper } from './aside.styled'

type Props = {
  open: boolean
  onClose?: () => void
}

export default function Aside (props: Props) {
  const { open, onClose } = props

  return (
    <Wrapper>
      <Overlay open={open} onClick={onClose} data-testid='Overlay' />
      <AsideWrapper open={open} data-testid='Aside'>
        <Logo />
        <Menu />
      </AsideWrapper>
    </Wrapper>
  )
}

import React from 'react'
import Menu from 'components/menu'
import Logo from 'components/logo'
import { AsideWrapper, Overlay, Wrapper } from './aside.styled'

type Props = {
  open: boolean
  onClose: () => void
}

export default function Aside (props: Props) {
  const { open, onClose } = props

  return (
    <Wrapper>
      <Overlay
        open={open}
        onClick={onClose}
      />
      <AsideWrapper open={open}>
        <Logo />
        <Menu />
      </AsideWrapper>
    </Wrapper>
  )
}

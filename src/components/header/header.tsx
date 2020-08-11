import React from 'react'
import { useLayout, useTheme } from '../../hooks'
import {
  Wrapper,
  Container,
  HamburgerButton,
  ColorModeSwitchButton
} from './header.styled'

export default function Header () {
  const { aside } = useLayout()
  const theme = useTheme()
  const { colorMode, setColorMode } = theme

  return (
    <Wrapper>
      <Container>
        <HamburgerButton onClick={aside.open} data-testid='HamburgerButton' />
        <ColorModeSwitchButton
          className={colorMode}
          data-testid='ColorModeSwitchButton'
          onClick={() => {
            if (colorMode === 'dark') {
              setColorMode('light')
            } else {
              setColorMode('dark')
            }
          }}
        />
      </Container>
    </Wrapper>
  )
}

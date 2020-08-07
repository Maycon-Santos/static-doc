import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/macro'
import { useLayout } from '../../hooks'
import { ThemeContext as ThemeContextType } from '../../theme/type'
import {
  Wrapper,
  Container,
  HamburgerButton,
  ColorModeSwitchButton
} from './header.styled'

export default function Header () {
  const { aside } = useLayout()
  const theme: ThemeContextType = useContext(ThemeContext)
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

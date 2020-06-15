import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/macro'
import { Wrapper, Container, HamburgerButton, ColorModeSwitchButton } from './header.styled'
import { ThemeContext as ThemeContextType } from 'theme/type'

type Props = {
  openAside: () => void
}

export default function Header (props: Props) {
  const { openAside } = props
  const theme: ThemeContextType = useContext(ThemeContext)
  const { colorMode, setColorMode } = theme

  return (
    <Wrapper>
      <Container>
        <HamburgerButton
          onClick={openAside}
        />
        <ColorModeSwitchButton
          className={colorMode}
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

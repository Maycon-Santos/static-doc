import styled from 'styled-components/macro'
import { useColor, useSpacing, useColorMode } from '../../hooks'

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: ${() => useSpacing(0, 4)};
  margin-bottom: ${() => useSpacing(4)};
  border-bottom: 1px ${() => useColor('gray', 200)} solid;
  background-color: ${() =>
    useColorMode({
      dark: useColor('gray', 700),
      light: useColor('gray', 300)
    })};

  @media (min-width: 768px) {
    height: 70px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 0;
    border-bottom: none;
    background-color: transparent;
    pointer-events: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    max-width: 1318px;
    margin: 0 auto;
    padding: ${() => useSpacing(0, 4)};

    > * {
      pointer-events: all;
    }
  }
`

export const HamburgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 40px;
  border: none;
  outline: none;
  background: transparent;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    box-shadow: 0 -7px 0 ${() => useColor('dark')},
      0 7px 0 ${() => useColor('dark')};
    background: ${() => useColor('dark')};
  }

  @media (min-width: 1200px) {
    display: none;
  }
`

export const ColorModeSwitchButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: auto;
  outline: none;
  cursor: pointer;
  transition: all 300ms linear;

  &.light {
    border: 4px ${() => useColor('dark')} solid;
    box-shadow: inset 6px 0 0 ${() => useColor('light')};
    background-color: ${() => useColor('dark')};
  }

  &.dark {
    border: 4px ${() => useColor('dark')} solid;
    box-shadow: inset 0 8px 0 ${() => useColor('light')};
    background-color: ${() => useColor('dark')};
  }
`

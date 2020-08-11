import styled, { css } from 'styled-components/macro'
import { useColor, useColorMode } from '../../hooks'

type Props = {
  open: boolean
}

const asideWidth = 280

export const Wrapper = styled.div`
  @media (min-width: 1200px) {
    padding-left: ${asideWidth}px;
  }
`

export const AsideWrapper = styled.aside<Props>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  transform: translate3d(-100%, 0, 0);
  width: 100%;
  max-width: ${asideWidth}px;
  border-right: 1px
    ${() =>
      useColorMode({
        dark: useColor('gray', 200),
        light: useColor('gray', 300)
      })}
    solid;
  overflow-x: hidden;
  overflow-y: auto;
  color: ${() => useColor('text')};
  background-color: ${() =>
    useColorMode({
      dark: useColor('gray', 300),
      light: useColor('gray', 200)
    })};
  transition: transform 150ms ease-out;

  ${({ open }) =>
    open &&
    css`
      transform: translate3d(0, 0, 0);
    `}

  @media (min-width: 1200px) {
    transform: none;
    flex: 0 0 ${asideWidth}px;
  }
`

export const Overlay = styled.div<Props>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  opacity: 0;
  background-color: ${() => useColor('dark', undefined, 0.5)};
  pointer-events: none;
  transition: opacity 300ms linear;

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  @media (min-width: 1200px) {
    display: none;
  }
`

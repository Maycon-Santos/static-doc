import styled from 'styled-components/macro'
import { useColor } from 'hooks/use-color'
import { useSpacing } from 'hooks/use-spacing'
import { useFontSize } from 'hooks/use-font-size'
import { useFontFamily } from 'hooks/use-font-family'
import { useRadii } from 'hooks/use-radii'

export const Wrapper = styled.div`
  font-family: ${() => useFontFamily('menu')};
`

export const NavGroup = styled.div`
  & + & {
    margin-top: ${() => useSpacing(4)};
  }
`

export const NavName = styled.h4`
  display: block;
  padding: ${() => useSpacing(0, 4)};
  margin-bottom: ${() => useSpacing(3)};
  color: ${() => useColor('primary')};
  font-size: ${() => useFontSize(2)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const List = styled.ul`
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  padding-right: ${() => useSpacing(4)};
  a {
    display: flex;
    align-items: center;
    height: 50px;
    padding: ${() => useSpacing(0, 4)};
    border-radius: ${() => useRadii('square', 'radius', 'radius', 'square')};
    color: ${() => useColor('dark', undefined, 0.6)};
    font-size: ${() => useFontSize(2)};
    text-decoration: none;
    transition: transform 200ms ease-out;

    &:hover {
      color: ${() => useColor('link', 'dark')};
      background-color: ${() => useColor('link', 'background', 0.2)};
    }

    &.active {
      color: white;
      background-color: ${() => useColor('link', 'background')};
    }
  }
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  object-position: center;
  margin-right: ${() => useSpacing(3)};
`

export const externalLinkIcon = styled.img``

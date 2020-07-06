import styled from 'styled-components/macro'
import {
  useSpacing,
  useColor,
  useFontSize,
  useFontWeight,
  useRadii
} from '../../hooks'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: ${() => useSpacing(4)};
  padding-bottom: ${() => useSpacing(4)};
  border-bottom: 1px ${() => useColor('gray', 300)} solid;

  @media (min-width: 768px) {
    position: sticky;
    top: 86px;
    flex: 0 0 250px;
    margin-left: ${() => useSpacing(4)};
    padding: ${() => useSpacing(4)};
    border: 1px ${() => useColor('gray', 400)} solid;
    border-radius: ${() => useRadii('radius')};
    box-sizing: border-box;
    background-color: ${() => useColor('gray', 100)};
  }

  @media (min-width: 1200px) {
    top: 70px;
  }
`

export const Title = styled.h5`
  color: ${() => useColor('dark')};
  font-size: ${() => useFontSize(1)};
  font-weight: ${() => useFontWeight('bold')};
`

export const List = styled.ul`
  margin-top: ${() => useSpacing(2)};
  list-style: none;
`

export const Item = styled.li`
  &.level-2 {
    padding-left: ${() => useSpacing(3)};
  }

  &.level-3 {
    padding-left: ${() => useSpacing(5)};
  }

  &.level-4 {
    padding-left: ${() => useSpacing(6)};
  }

  &.level-5 {
    padding-left: ${() => useSpacing(7)};
  }

  &.level-6 {
    padding-left: ${() => useSpacing(8)};
  }
`

export const ItemLink = styled.a`
  display: block;
  padding: ${() => useSpacing(1, 0)};
  color: ${() => useColor('link')};
  font-size: ${() => useFontSize(1)};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

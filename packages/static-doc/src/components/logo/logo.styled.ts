import styled from 'styled-components/macro'
import { useSpacing, useFontSize, useColor, useFontFamily } from '../../hooks'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 70px;
  padding: ${() => useSpacing(4, 4)};
  margin-bottom: ${() => useSpacing(5)};
  border-bottom: 1px ${() => useColor('gray', 200)} solid;
  box-sizing: border-box;
  font-family: ${() => useFontFamily('logo')};
  font-size: ${() => useFontSize(3)};
  font-weight: ${({ theme }) => theme.fontWeights?.bold};
  background-color: ${() => useColor('gray', 500)};
`

export const LogoImage = styled.img`
  width: 100%;
  max-height: 70px;
  object-fit: contain;
  object-position: left;
`

import styled from 'styled-components'
import { useSpacing } from 'hooks/use-spacing'
import { useFontSize } from 'hooks/use-font-size'
import { useColor } from 'hooks/use-color'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 70px;
  padding: ${() => useSpacing(4, 4)};
  margin-bottom: ${() => useSpacing(5)};
  border-bottom: 1px ${() => useColor('gray', 200)} solid;
  box-sizing: border-box;
  font-size: ${() => useFontSize(3)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${() => useColor('gray', 500)};
`

export const LogoImage = styled.img`
  width: 100%;
  max-height: 70px;
  object-fit: contain;
  object-position: left;
`

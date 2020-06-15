import styled from 'styled-components/macro'
import { useFontSize, useFontWeight } from 'hooks'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${() => useFontSize(5)};
  font-weight: ${() => useFontWeight('bold')};
  text-align: center;
  text-transform: uppercase;
`

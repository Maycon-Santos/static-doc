import styled from 'styled-components'
import { useSpacing } from 'hooks/use-spacing'

export const Wrapper = styled.div`
  min-height: 100%;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1350px;
  padding: ${() => useSpacing(0, 4)};
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-start;
    margin: ${() => useSpacing(0, 'auto')};
  }

  @media (min-width: 1200px) {
    padding: ${() => useSpacing(0, 5)};
    margin: ${() => useSpacing(0, 'auto')};
  }
`

export const Content = styled.div`
  width: 100%;
  min-width: 0;
  min-height: 100%;

  > *:nth-child(1) {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    flex: 0 0 calc(100% - 266px);
    width: auto;
  }
`

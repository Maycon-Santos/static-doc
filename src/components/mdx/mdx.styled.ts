import styled, { css } from 'styled-components/macro'
import { useColor } from 'hooks/use-color'
import { useSpacing } from 'hooks/use-spacing'
import { useFontSize } from 'hooks/use-font-size'
import { useLineHeight } from 'hooks/use-line-height'
import { useFontWeight } from 'hooks/use-font-weight'
import { useColorMode } from 'hooks/use-color-mode'

const heading = css`
  position: relative;
  margin-top: 1em;
  margin-bottom: ${() => useSpacing(4)};
  line-height: ${() => useLineHeight('heading')};
  font-weight: ${() => useFontWeight('bold')};

  .anchor-target {
    position: absolute;
    top: -60px;
  }

  @media (min-width: 768px) {
    .anchor-target {
      top: -80px;
    }
  }

  @media (min-width: 1200px) {
    .anchor-target {
      top: -10px;
    }
  }
`

const list = css`
  padding-left: 30px;
  margin: ${() => useSpacing(4, 0)};
`

export const h1 = styled.h1`
  ${heading}
  font-size: ${() => useFontSize(5)};
`

export const h2 = styled.h2`
  ${heading}
  font-size: ${() => useFontSize(4)};
`

export const h3 = styled.h3`
  ${heading}
  font-size: ${() => useFontSize(3)};
`

export const h4 = styled.h4`
  ${heading}
  font-size: ${() => useFontSize(2)};
`

export const h5 = styled.h5`
  ${heading}
  font-size: ${() => useFontSize(1)};
`

export const h6 = styled.h6`
  ${heading}
  font-size: ${() => useFontSize(0)};
`

export const p = styled.p`
  margin: ${() => useSpacing(4, 0)};
`

export const em = styled.em`
  font-style: italic;
`

export const strong = styled.strong`
  font-weight: 600;
`

export const a = styled.a`
  color: ${() => useColor('link')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const img = styled.img`
  max-width: 100%;
`

export const ul = styled.ul`
  ${list}
`

export const ol = styled.ol`
  ${list}
`

export const li = styled.li`
  ul, ol {
    margin: ${() => useSpacing(2, 0)};
  }
`

export const hr = styled.hr`
  border-style: solid;
  border-color: ${() => useColor('gray')};
`

export const inlineCode = styled.code`
  display: inline-block;
  margin: ${() => useSpacing(2, 1)};
  padding: ${() => useSpacing(2, 3)};
  background-color: ${() => useColorMode({ light: useColor('gray', 300), dark: useColor('gray', 400) })};
  border-radius: ${({ theme }) => theme.radii.radius}px;
  white-space: nowrap;
`

export const code = styled.pre`
  overflow: auto;
  margin: ${() => useSpacing(4, 0)};
  padding: ${() => useSpacing(4)};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radii.radius}px;
  letter-spacing: 0.05em;
`

export const blockquote = styled.blockquote`
  border-left: 4px solid ${() => useColor('text', undefined, 0.7)};
  padding: ${() => useSpacing(0, 4)};
  color: ${() => useColor('text', undefined, 0.7)};
`

export const tableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`

export const table = styled.table`
  max-width: 100%;
  border: 1px ${() => useColor('gray', 400)} solid;
`

export const tbody = styled.tbody`
  tr:nth-child(2n+1) {
    background-color: ${() => useColorMode({ dark: useColor('gray', 100), light: useColor('gray', 200) })};
  }
`

export const tr = styled.tr`
  th + th,
  td + td {
    border-left: 1px ${() => useColor('gray', 400)} solid;
  }
`

export const th = styled.th`
  padding: ${() => useSpacing(3)};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-bottom: 1px ${() => useColor('gray', 400)} solid;
`

export const td = styled.td`
  padding: ${() => useSpacing(3)};
  text-align: left;
`

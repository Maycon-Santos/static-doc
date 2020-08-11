import React from 'react'
import { useHeadings } from '../../hooks'
import {
  Wrapper,
  Title,
  List,
  Item,
  ItemLink
} from './table-of-contents.styled'

export default function TableOfContents () {
  const { items } = useHeadings()

  if (items.length === 0) {
    return null
  }

  return (
    <Wrapper>
      <Title>Table of contents</Title>
      <List>
        {items.map(item => {
          return (
            <Item className={`level-${item.level}`} key={item.id}>
              <ItemLink href={`#${item.id}`}>● {item.text}</ItemLink>
            </Item>
          )
        })}
      </List>
    </Wrapper>
  )
}

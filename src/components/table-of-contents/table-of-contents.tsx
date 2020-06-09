import React from 'react'
import Link from 'next/link'
import { useHeadings } from 'hooks/use-headings'
import { Wrapper, Title, List, Item, ItemLink } from './table-of-contents.styled'

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
              <Link href={`#${item.id}`}>
                <ItemLink>
                  ● {item.text}
                </ItemLink>
              </Link>
            </Item>
          )
        })}
      </List>
    </Wrapper>
  )
}

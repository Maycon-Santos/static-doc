import React from 'react'
import Link from 'next/link'
import { useColorMode, useMenu, useCurrentPageData } from '../../hooks'
import getAsset from '../../utils/get-asset'
import { Wrapper, NavGroup, NavName, List, Item, Icon } from './menu.styled'

export default function Menu () {
  const currentPage = useCurrentPageData()
  const menuTree = useMenu()

  return (
    <Wrapper>
      {Object.keys(menuTree).map(menu => {
        const pages = menuTree[menu]

        return (
          <NavGroup key={menu}>
            {menu && <NavName>{menu}</NavName>}
            <List>
              {pages.map(page => {
                const iconSrc = useColorMode({
                  light: page?.icon?.light,
                  dark: page?.icon?.dark
                }) as string

                return (
                  <Item key={page.route}>
                    {page.isExternalLink ? (
                      <a href={page.route} target='_blank' rel='noreferrer'>
                        {iconSrc && <Icon src={getAsset(iconSrc)} alt='' />}
                        {page.data.name}
                        &nbsp;
                        <svg
                          stroke='currentColor'
                          fill='none'
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                          <polyline points='15 3 21 3 21 9' />
                          <line x1='10' y1='14' x2='21' y2='3' />
                        </svg>
                      </a>
                    ) : (
                      <Link href={page.route}>
                        <a className={page === currentPage ? 'active' : ''}>
                          {iconSrc && <Icon src={getAsset(iconSrc)} alt='' />}
                          {page.data.name}
                        </a>
                      </Link>
                    )}
                  </Item>
                )
              })}
            </List>
          </NavGroup>
        )
      })}
    </Wrapper>
  )
}

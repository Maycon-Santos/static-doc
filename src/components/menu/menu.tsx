import React from 'react'
import Link from 'next/link'
import { useColorMode } from 'hooks/use-color-mode'
import { useMenu } from 'hooks/use-menu'
import ExternalLinkIcon from 'assets/external-link-icon.svg'
import { useCurrentPageData } from 'hooks/use-current-page-data'
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
            {menu && (
              <NavName>{menu}</NavName>
            )}
            <List>
              {pages.map(page => {
                const iconSrc = useColorMode({
                  light: page?.icon?.light,
                  dark: page?.icon?.dark
                }) as string

                return (
                  <Item key={page.route}>
                    {page.isExternalLink ? (
                      <a href={page.route} target="_blank" rel="noreferrer">
                        {iconSrc && <Icon src={iconSrc} alt="" />}
                        {page.data.name}
                        &nbsp;
                        <ExternalLinkIcon />
                      </a>
                    ) : (
                      <Link href={page.route}>
                        <a className={page === currentPage ? 'active' : ''}>
                          {iconSrc && <Icon src={iconSrc} alt="" />}
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

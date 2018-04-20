import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ScreenReaderOnly } from 'components/a11y/ScreenReaderOnly'
import SkipToMain from 'components/a11y/SkipToMain'
import { H1, H2 } from 'components/base/Heading'
import Link from 'components/base/Link'
import { LayoutContainerFull, LayoutContainerMain } from 'components/layout/LayoutContainer'

const Header = LayoutContainerFull.withComponent('header').extend`
  background-color: ${props => props.theme.colors.invertedBackground};
  color: ${props => props.theme.colors.invertedForeground};
`
const HeaderWrapper = LayoutContainerMain.withComponent('div').extend`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`
const HeaderMain = styled.div``
const HeaderNav = styled.nav``
const HeaderNavList = styled.ul`
  list-style: none;
  margin: 0 -0.5rem;
  padding: 0;
`
const HeaderNavListItem = styled.li`
  display: inline-block;
  padding: 0 0.5rem;
`
const HeaderTitle = H1.extend`
  font-size: ${props => props.theme.scales.base}rem;
  font-weight: normal;
  margin: 0;
`
const HeaderSubtitle = H2.extend`
  font-size: ${props => props.theme.scales.base}rem;
  font-weight: normal;
`
const HeaderLink = styled.a`
  color: ${props => props.theme.colors.invertedLink};
  display: inline-block;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.1s ease-in-out;

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.invertedLinkHover};
  }
`

const LayoutHeaderComponent = ({ siteTitle, siteDescription }) => (
  <Header role="banner">
    <HeaderWrapper>
      <HeaderMain>
        <SkipToMain />
        <HeaderTitle>
          <Link href="/">
            <HeaderLink>{siteTitle}</HeaderLink>
          </Link>
        </HeaderTitle>
        <ScreenReaderOnly>
          <HeaderSubtitle>{siteDescription}</HeaderSubtitle>
        </ScreenReaderOnly>
      </HeaderMain>
      <HeaderNav>
        <HeaderNavList>
          <HeaderNavListItem>
            <Link href="/blog/">
              <HeaderLink>Blog</HeaderLink>
            </Link>
          </HeaderNavListItem>
          <HeaderNavListItem>
            <Link href="/games/">
              <HeaderLink>Games</HeaderLink>
            </Link>
          </HeaderNavListItem>
          <HeaderNavListItem>
            <Link href="/about/">
              <HeaderLink>About</HeaderLink>
            </Link>
          </HeaderNavListItem>
        </HeaderNavList>
      </HeaderNav>
    </HeaderWrapper>
  </Header>
)

LayoutHeaderComponent.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}

export default LayoutHeaderComponent

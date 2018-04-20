import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'components/base/Link'
import { LayoutContainerFull, LayoutContainerMain } from 'components/layout/LayoutContainer'

const Footer = LayoutContainerFull.withComponent('footer').extend`
  background-color: ${props => props.theme.colors.invertedBackground};
  background-image:
    linear-gradient(135deg, ${props => props.theme.colors.background} 50%, transparent 50%),
    linear-gradient(225deg, ${props => props.theme.colors.background} 50%, transparent 50%);
  background-position: top;
  background-repeat: repeat-x;
  background-size: 1rem 1rem;
  color: ${props => props.theme.colors.invertedForeground};
  padding-top: 1rem;
`
const FooterWrapper = LayoutContainerMain.withComponent('p').extend`
  text-align: center;
`
const FooterLink = styled.a`
  color: ${props => props.theme.colors.invertedLink};
  transition: color 0.1s ease-in-out;

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.invertedLinkHover};
  }
`

const LayoutFooterComponent = ({ authorName }) => (
  <Footer role="contentinfo">
    <FooterWrapper>
      All content by{' '}
      <Link href="/about/style-guide/">
        <FooterLink>{authorName}</FooterLink>
      </Link>{' '}
      unless otherwise noted.{' '}
      <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
        <FooterLink>Some rights reserved</FooterLink>
      </Link>.
    </FooterWrapper>
  </Footer>
)

LayoutFooterComponent.propTypes = {
  authorName: PropTypes.string.isRequired,
}

export default LayoutFooterComponent

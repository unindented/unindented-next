import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer } from 'components/layout/LayoutContainer'
import LayoutHeader from 'components/layout/LayoutHeader'
import LayoutFooter from 'components/layout/LayoutFooter'
import { siteTitle, siteDescription, authorName } from 'site-metadata'

const Layout = LayoutContainer.extend`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.foreground};
  font-family: ${props => props.theme.fonts.body};
  grid-template-rows: min-content auto min-content;
  min-height: 100vh;
`

const LayoutComponent = ({ children }) => (
  <Layout>
    <LayoutHeader siteTitle={siteTitle} siteDescription={siteDescription} />
    {children}
    <LayoutFooter authorName={authorName} />
  </Layout>
)

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent

import React from 'react'
import PropTypes from 'prop-types'
import { H1 } from 'components/base/Heading'
import { LayoutContainerFull, LayoutContainerMain } from 'components/layout/LayoutContainer'

const Banner = LayoutContainerFull.withComponent('header').extend`
  background-color: ${props => props.theme.colors.accentBackground};
  background-image:
    linear-gradient(135deg, ${props => props.theme.colors.invertedBackground} 50%, transparent 50%),
    linear-gradient(225deg, ${props => props.theme.colors.invertedBackground} 50%, transparent 50%),
    linear-gradient(45deg, ${props => props.theme.colors.background} 50%, transparent 50%),
    linear-gradient(-45deg, ${props => props.theme.colors.background} 50%, transparent 50%);
  background-position: top, top, bottom, bottom;
  background-repeat: repeat-x;
  background-size: 1rem 1rem;
  color: ${props => props.theme.colors.invertedForeground};
  padding: 1rem 0;
`

const BannerTitle = LayoutContainerMain.withComponent(H1).extend`
  && {
    margin: 2rem 0;
  }
`

const BannerComponent = ({ children }) => (
  <Banner>
    <BannerTitle>{children}</BannerTitle>
  </Banner>
)

BannerComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BannerComponent

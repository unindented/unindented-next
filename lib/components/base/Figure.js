import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LayoutContainerFull } from 'components/layout/LayoutContainer'

const FigureFull = LayoutContainerFull.extend`
  background-color: ${props => props.theme.colors.subtleBackground};
  grid-template-columns: none;
  overflow-x: auto;

  && > * {
    border: 0;
    width: 100%;
  }
`

const Figure = styled.figure`
  border: 0.125rem solid ${props => props.theme.colors.border};
  border-radius: 0.25rem;
  display: block;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  overflow: hidden;
`

const FigureComponent = ({ className, children, ...props }) => {
  switch (className) {
    case 'fullwidth':
      return <FigureFull>{children}</FigureFull>
    default:
      return (
        <Figure {...props} className={className}>
          {children}
        </Figure>
      )
  }
}

FigureComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default FigureComponent

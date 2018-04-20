import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainerFull, LayoutContainerMain } from 'components/layout/LayoutContainer'
import VisibilityObserver from 'components/observer/VisibilityObserver'

const DivRoot = LayoutContainerFull.extend`
  margin: 2rem 0;

  & > * {
    grid-column: main;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  & > *:first-child {
    margin-top: 0;
  }
`

const DivFull = LayoutContainerFull.extend`
  background-color: ${props => props.theme.colors.subtleBackground};
  overflow-x: auto;
`
const DivMath = LayoutContainerMain.withComponent('div')
const DivMermaid = LayoutContainerMain.withComponent('div').extend`
  margin: 1rem 0;

  & > svg {
    font-family: inherit !important;
    max-width: 100% !important;
  }
`

const DivComponent = ({ className, children, ...props }) => {
  switch (className) {
    case 'root':
      return <DivRoot>{children}</DivRoot>
    case 'math':
      return (
        <DivFull>
          <VisibilityObserver>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.9.0/dist/katex.min.css"
              integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei"
              crossOrigin="anonymous"
            />
          </VisibilityObserver>
          <DivMath>{children}</DivMath>
        </DivFull>
      )
    case 'mermaid':
      return (
        <DivFull>
          <DivMermaid>{children}</DivMermaid>
        </DivFull>
      )
    default:
      return (
        <div {...props} className={className}>
          {children}
        </div>
      )
  }
}

DivComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default DivComponent

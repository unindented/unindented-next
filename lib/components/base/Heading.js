import styled from 'styled-components'

const Heading = styled.span`
  && {
    margin: 1.5rem 0 0.5rem;
  }

  .hash {
    margin: 0 0.5rem;
    opacity: 0;
    text-decoration: none;
    will-change: opacity;
  }

  & > .hash:focus,
  &:hover > .hash {
    opacity: 1;
  }
`

export const H1 = Heading.withComponent('h1').extend`
  font-size: ${props => props.theme.scales.h1}rem;
`

export const H2 = Heading.withComponent('h2').extend`
  font-size: ${props => props.theme.scales.h2}rem;
`

export const H3 = Heading.withComponent('h3').extend`
  font-size: ${props => props.theme.scales.h3}rem;
`

export const H4 = Heading.withComponent('h4').extend`
  font-size: ${props => props.theme.scales.h4}rem;
`

export const H5 = Heading.withComponent('h5').extend`
  font-size: ${props => props.theme.scales.h5}rem;
`

export const H6 = Heading.withComponent('h6').extend`
  font-size: ${props => props.theme.scales.h6}rem;
`

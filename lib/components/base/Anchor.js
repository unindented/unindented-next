import styled from 'styled-components'

const Anchor = styled.a`
  color: ${props => props.theme.colors.link};
  transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out;

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.linkHover};
  }
`

export default Anchor

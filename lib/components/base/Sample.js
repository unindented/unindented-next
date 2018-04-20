import styled from 'styled-components'

const Sample = styled.samp`
  background-color: ${props => props.theme.colors.subtleBackground};
  border-radius: 0.25rem;
  display: inline-block;
  font-family: ${props => props.theme.fonts.code};
  padding: 0 0.5rem;
`

export default Sample

import styled from 'styled-components'

const Code = styled.code`
  background-color: ${props => props.theme.colors.subtleBackground};
  border-radius: 0.25rem;
  display: inline-block;
  font-family: ${props => props.theme.fonts.code};
  padding: 0 0.25rem;
`

export default Code

import styled from 'styled-components'

const Keyboard = styled.kbd`
  background-color: ${props => props.theme.colors.subtleBackground};
  border-radius: 0.25rem;
  box-shadow: 0 0 1px ${props => props.theme.colors.foreground},
    0 0 0 2px ${props => props.theme.colors.background} inset;
  display: inline-block;
  font-family: ${props => props.theme.fonts.code};
  padding: 0 0.5rem;
  white-space: nowrap;
`

export default Keyboard

import styled from 'styled-components'

const Mark = styled.mark`
  background-color: ${props => props.theme.colors.accentBackground};
  color: ${props => props.theme.colors.accentForeground};
`

export default Mark

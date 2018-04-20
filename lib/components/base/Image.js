import styled from 'styled-components'

const Image = styled.img`
  border: 0.125rem solid ${props => props.theme.colors.border};
  border-radius: 0.25rem;
  display: block;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  overflow: hidden;
`

export default Image

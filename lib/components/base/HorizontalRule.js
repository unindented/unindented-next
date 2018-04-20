import styled from 'styled-components'

const HorizontalRule = styled.hr`
  border: 0;
  color: ${props => props.theme.colors.border};
  height: 1.5rem;
  text-align: center;

  &:after {
    content: '***';
    letter-spacing: 1rem;
    vertical-align: middle;
  }
`

export default HorizontalRule

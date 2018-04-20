import styled from 'styled-components'

const Blockquote = styled.blockquote`
  border-left: 0.25rem solid ${props => props.theme.colors.border};
  border-right: 0;
  font-style: italic;
  margin-left: 0;
  margin-right: 0;
  padding-left: 1.25rem;
  padding-right: 0;

  html[dir='rtl'] & {
    border-left: 0;
    border-right: 0.25rem solid ${props => props.theme.colors.border};
    padding-left: 0;
    padding-right: 1.25rem;
  }

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`

export default Blockquote

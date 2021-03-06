import styled from 'styled-components'

const ListUnordered = styled.ul`
  padding-left: 1.5rem;
  padding-right: 0;

  html[dir='rtl'] & {
    padding-left: 0;
    padding-right: 1.5rem;
  }

  li > * {
    margin-bottom: 0;
    margin-top: 0;
  }
`

export default ListUnordered

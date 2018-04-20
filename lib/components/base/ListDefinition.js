import styled from 'styled-components'

const ListDefinition = styled.dl`
  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 1.5rem;
    margin-right: 0;
  }

  html[dir='rtl'] dd {
    margin-left: 0;
    margin-right: 1.5rem;
  }
`

export default ListDefinition

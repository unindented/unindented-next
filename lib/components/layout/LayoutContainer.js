import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    [main-start] minmax(0, 40em) [main-end]
    minmax(1em, 1fr) [full-end];
`

export const LayoutContainerMain = styled.div`
  grid-column: main;
`

export const LayoutContainerFull = styled.div`
  display: inherit;
  grid-column: full;
  grid-template-columns: inherit;
`

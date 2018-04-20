import React from 'react'
import styled from 'styled-components'

const TableWrapper = styled.div`
  border: 0.125rem solid ${props => props.theme.colors.border};
  border-radius: 0.25rem;
  overflow-x: auto;
`

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  td,
  th {
    font-weight: normal;
    padding: 0 0.5rem;
    text-align: center;
    white-space: nowrap;
  }

  thead {
    border-bottom: 0.125rem solid ${props => props.theme.colors.border};
  }

  tfoot {
    border-top: 0.125rem solid ${props => props.theme.colors.border};
  }

  thead th,
  tfoot td {
    font-weight: bold;
    line-height: 2.25rem;
  }

  tbody tr:nth-child(2n + 1) {
    background-color: ${props => props.theme.colors.subtleBackground};
  }
`

const TableComponent = props => (
  <TableWrapper>
    <Table {...props} />
  </TableWrapper>
)

export default TableComponent

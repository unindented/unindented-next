import styled from 'styled-components'

export const ScreenReaderOnly = styled.div`
  border: 0;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const ScreenReaderOnlyFocusable = ScreenReaderOnly.extend`
  &:active,
  &:focus {
    clip: auto;
    clip-path: none;
    height: auto;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`

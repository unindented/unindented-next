import React from 'react'
import styled from 'styled-components'

const ScreenReaderOnlyFocusableLink = styled.a`
  background: ${props => props.theme.colors.accentBackground};
  border-bottom: 1px solid ${props => props.theme.colors.accentForeground};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0.25rem;
  border-left: 0;
  border-right: 1px solid ${props => props.theme.colors.accentForeground};
  color: ${props => props.theme.colors.accentForeground};
  left: 0;
  padding: 0.25rem 0.5rem;
  position: absolute;
  right: auto;
  top: -2.5rem;
  transition: top 1s ease-out;
  z-index: 100;

  &:active,
  &:focus {
    position: absolute;
    top: 0;
    transition: top 0.1s ease-in;
  }

  html[dir='rtl'] & {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0;
    border-left: 1px solid ${props => props.theme.colors.accentForeground};
    border-right: 0;
    left: auto;
    right: 0;
  }
`

const SkipToMain = () => (
  <ScreenReaderOnlyFocusableLink href="#main">Skip to main content</ScreenReaderOnlyFocusableLink>
)

export default SkipToMain

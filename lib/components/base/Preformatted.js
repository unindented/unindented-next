import React from 'react'
import { LayoutContainerFull, LayoutContainerMain } from 'components/layout/LayoutContainer'

const PreWrapper = LayoutContainerFull.extend`
  background-color: ${props => props.theme.colors.subtleBackground};
  overflow-x: auto;
`
const Pre = LayoutContainerMain.withComponent('pre').extend`
  font-family: ${props => props.theme.fonts.code};

  & > code {
    background-color: transparent;
    display: block;
    padding: 0;
  }

  .hljs-comment,
  .hljs-quote {
    color: ${props => props.theme.colors.codeComment};
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: ${props => props.theme.colors.codeKeyword};
    font-weight: bold;
  }

  .hljs-number,
  .hljs-literal,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag .hljs-attr {
    color: ${props => props.theme.colors.codeNumber};
  }

  .hljs-string,
  .hljs-doctag {
    color: ${props => props.theme.colors.codeString};
  }

  .hljs-title,
  .hljs-section,
  .hljs-selector-id {
    color: ${props => props.theme.colors.codeTitle};
    font-weight: bold;
  }

  .hljs-subst {
    font-weight: normal;
  }

  .hljs-type,
  .hljs-class .hljs-title {
    color: ${props => props.theme.colors.codeType};
    font-weight: bold;
  }

  .hljs-tag,
  .hljs-name,
  .hljs-attribute {
    color: ${props => props.theme.colors.codeTag};
    font-weight: normal;
  }

  .hljs-regexp,
  .hljs-link {
    color: ${props => props.theme.colors.codeRegexp};
  }

  .hljs-symbol,
  .hljs-bullet {
    color: ${props => props.theme.colors.codeSymbol};
  }

  .hljs-built_in,
  .hljs-builtin-name {
    color: ${props => props.theme.colors.codeBuiltIn};
  }

  .hljs-meta {
    color: ${props => props.theme.colors.codeMeta};
    font-weight: bold;
  }

  .hljs-addition {
    background: ${props => props.theme.colors.codeAddition};
  }

  .hljs-deletion {
    background: ${props => props.theme.colors.codeDeletion};
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
`

const PreComponent = props => (
  <PreWrapper>
    <Pre {...props} />
  </PreWrapper>
)

export default PreComponent

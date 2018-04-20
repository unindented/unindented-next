import unified from 'unified'
import json2rehype from 'json-to-rehype'
import rehype2react from 'rehype-react'
import React from 'react'
import PropTypes from 'prop-types'
import { H1, H2, H3, H4, H5, H6 } from 'components/base/Heading'
import Blockquote from 'components/base/Blockquote'
import Canvas from 'components/base/Canvas'
import Code from 'components/base/Code'
import Div from 'components/base/Div'
import Figure from 'components/base/Figure'
import HorizontalRule from 'components/base/HorizontalRule'
import Iframe from 'components/base/Iframe'
import Image from 'components/base/Image'
import Keyboard from 'components/base/Keyboard'
import LinkWithAnchor from 'components/base/LinkWithAnchor'
import ListDefinition from 'components/base/ListDefinition'
import ListOrdered from 'components/base/ListOrdered'
import ListUnordered from 'components/base/ListUnordered'
import Mark from 'components/base/Mark'
import Preformatted from 'components/base/Preformatted'
import Sample from 'components/base/Sample'
import Script from 'components/base/Script'
import Table from 'components/base/Table'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  blockquote: Blockquote,
  canvas: Canvas,
  code: Code,
  div: Div,
  figure: Figure,
  hr: HorizontalRule,
  iframe: Iframe,
  img: Image,
  kbd: Keyboard,
  a: LinkWithAnchor,
  dl: ListDefinition,
  ol: ListOrdered,
  ul: ListUnordered,
  mark: Mark,
  pre: Preformatted,
  samp: Sample,
  script: Script,
  table: Table,
}

const processor = unified()
  .use(json2rehype)
  .use(rehype2react, {
    createElement: React.createElement,
    components,
  })

const MarkdownRenderer = ({ content }) => processor.processSync(content).contents

MarkdownRenderer.propTypes = {
  content: PropTypes.string.isRequired,
}

export default MarkdownRenderer

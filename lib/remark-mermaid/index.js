const visit = require('unist-util-visit')

const { render } = require('./mermaid')

const visitor = (node, index, parent) => {
  const { lang, value } = node

  if (lang !== 'mermaid') {
    return node
  }

  try {
    const svg = render(value)
    const newNode = { type: 'html', value: `<div class="mermaid">${svg}</div>` }
    parent.children.splice(index, 1, newNode)
  } catch (err) {
    console.error(err)
  }

  return node
}

/**
 * Processes `mermaid` code blocks and turns them into SVG diagrams.
 */
const mermaid = () => {
  return tree => {
    visit(tree, 'code', visitor)
  }
}

module.exports = mermaid

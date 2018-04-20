const visit = require('unist-util-visit')

const getRootNode = node => {
  if (node.type === 'root') {
    if (node.children.length === 1 && node.children[0].type === 'element') {
      return node.children[0]
    }
    return {
      type: 'element',
      tagName: 'div',
      properties: { className: 'root' },
      children: node.children,
    }
  }
}

const removePositionFromNode = node => {
  delete node.position
}

/**
 * Serialize a `rehype` tree to JSON, so that we can pass it as a prop to our React pages.
 */
function rehype2json() {
  this.Compiler = node => {
    const rootNode = getRootNode(node)
    visit(rootNode, removePositionFromNode)
    return JSON.stringify(rootNode)
  }
}

module.exports = rehype2json

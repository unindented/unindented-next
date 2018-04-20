const { resolve } = require('path')

const glob = require('fast-glob')
const { copy } = require('fs-extra')

const copyFiles = ({ types, dist }) => {
  Object.keys(types).forEach(async key => {
    const type = types[key]
    const srcFiles = await glob(type.glob)

    srcFiles.forEach(async srcFile => {
      try {
        const distPath = resolve(dist, type.path(srcFile))
        await copy(srcFile, distPath)
      } catch (err) {
        console.error(err)
      }
    })
  })
}

module.exports = {
  copyFiles,
}

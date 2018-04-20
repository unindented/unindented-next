const { resolve } = require('path')

const chalk = require('chalk')
const glob = require('fast-glob')
const { ensureFile, readFile, writeFile } = require('fs-extra')
const frontmatter = require('front-matter')
const { template } = require('lodash')
const report = require('vfile-reporter')

const markdownProcessor = require('./process-markdown')

const processFile = async file => {
  const contents = await readFile(file)

  return new Promise((resolve, reject) => {
    const metadata = frontmatter(contents.toString())

    markdownProcessor.process(metadata.body, (err, contents) => {
      console.log('\n' + chalk.blue(file))
      console.log(report(err || contents))

      if (err) {
        reject(err)
      } else {
        resolve({ attributes: metadata.attributes, body: contents.contents })
      }
    })
  })
}

const processFilesForType = async ({ types, key, dist }) => {
  const type = types[key]
  const srcFiles = await glob(type.glob)

  return Promise.all(
    srcFiles.map(async srcFile => {
      const { attributes, body } = await processFile(srcFile)
      const moreAttributes = type.attributes(srcFile)
      const distFile = resolve(dist, type.path(srcFile))

      return {
        type: key,
        body,
        attributes: { ...attributes, ...moreAttributes },
        path: distFile,
      }
    })
  )
}

const processFilesForTypes = async ({ types, dist }) => {
  const allProcessedFiles = await Object.keys(types).reduce(async (acc, key) => {
    const processedFiles = processFilesForType({ types, key, dist })

    return [...(await acc), ...(await processedFiles)]
  }, [])

  allProcessedFiles.forEach(async processedFile => {
    try {
      const { type, body, attributes, path } = processedFile
      const { template: tmpl, filter = files => files } = types[type]
      const contents = template(tmpl)({ body, attributes, files: filter(allProcessedFiles) })

      await ensureFile(path)
      await writeFile(path, contents)
    } catch (err) {
      console.error(err)
    }
  })
}

module.exports = {
  processFiles: processFilesForTypes,
}

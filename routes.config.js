const glob = require('fast-glob')

const pageRegex = /^pages(\/(?:.+\/)*)index.js$/
const trailingSlashRegex = /(?!^)\/$/

const srcFiles = glob.sync(['pages/**/*.js'], { ignore: ['pages/_*.js'] })
const routes = srcFiles.reduce((acc, srcFile) => {
  const routeWithTrailingSlash = srcFile.replace(pageRegex, '$1')
  const routeWithoutTrailingSlash = routeWithTrailingSlash.replace(trailingSlashRegex, '')
  acc[routeWithTrailingSlash] = { page: routeWithoutTrailingSlash }
  return acc
}, {})

module.exports = routes

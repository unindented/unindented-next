const { resolve } = require('path')

const { screenshotUrls } = require('./screenshot')

const [, , ...urls] = process.argv

screenshotUrls({
  urls,
  src: resolve(__dirname, '../../out'),
  dist: resolve(__dirname, '../../docs'),
})

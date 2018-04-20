const { resolve } = require('path')

const { copyFiles } = require('./copy')

const blogRegex = /^contents\/(.+\/)(\d{4}-\d{2}-\d{2})-(.*\/)([^/]+)$/
const pageRegex = /^contents\/(.+\/)([^/]+)$/

const types = {
  blog: {
    glob: ['contents/blog/**/*', '!contents/blog/**/*.md'],
    path: file => file.replace(blogRegex, '$1$3$4'),
  },
  page: {
    glob: ['contents/about/**/*', '!contents/about/**/*.md'],
    path: file => file.replace(pageRegex, '$1$2'),
  },
}

copyFiles({ types, dist: resolve(__dirname, '../../out') })

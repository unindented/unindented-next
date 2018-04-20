const { resolve } = require('path')

const { readFileSync } = require('fs-extra')

const { processFiles } = require('./process')

const templateDir = resolve(__dirname, 'templates')
const dateRegex = /^contents\/(.+\/)(\d{4}-\d{2}-\d{2})-(.*\/)index\.md$/
const pageRegex = /^contents\/(.+\/)index\.md$/

const types = {
  index: {
    glob: ['contents/index.md'],
    template: readFileSync(resolve(templateDir, 'index.ejs')),
    attributes: () => {
      const slug = '/'
      const date = null
      return { slug, date }
    },
    filter: files => {
      const filteredFiles = files.filter(file => file.type === 'blog')
      filteredFiles.sort((a, b) => {
        const dateA = a.attributes.date
        const dateB = b.attributes.date
        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
      })
      return filteredFiles
    },
    path: () => 'index.js',
  },
  blog: {
    glob: ['contents/blog/*/*.md'],
    template: readFileSync(resolve(templateDir, 'blog.ejs')),
    attributes: file => {
      const slug = file.replace(dateRegex, '/$1$3')
      const date = file.replace(dateRegex, '$2')
      return { slug, date }
    },
    path: file => file.replace(dateRegex, '$1$3index.js'),
  },
  'blog-index': {
    glob: ['contents/blog/index.md'],
    template: readFileSync(resolve(templateDir, 'blog-index.ejs')),
    attributes: () => {
      const slug = '/blog/'
      const date = null
      return { slug, date }
    },
    filter: files => {
      const filteredFiles = files.filter(file => file.type === 'blog')
      filteredFiles.sort((a, b) => {
        const dateA = a.attributes.date
        const dateB = b.attributes.date
        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
      })
      return filteredFiles
    },
    path: () => 'blog/index.js',
  },
  game: {
    glob: ['contents/games/*/*.md'],
    template: readFileSync(resolve(templateDir, 'game.ejs')),
    attributes: file => {
      const slug = file.replace(dateRegex, '/$1$3')
      const date = file.replace(dateRegex, '$2')
      return { slug, date }
    },
    path: file => file.replace(dateRegex, '$1$3index.js'),
  },
  'game-index': {
    glob: ['contents/games/index.md'],
    template: readFileSync(resolve(templateDir, 'game-index.ejs')),
    attributes: () => {
      const slug = '/games/'
      const date = null
      return { slug, date }
    },
    filter: files => {
      const filteredFiles = files.filter(file => file.type === 'game')
      filteredFiles.sort((a, b) => {
        const dateA = a.attributes.date
        const dateB = b.attributes.date
        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
      })
      return filteredFiles
    },
    path: () => 'games/index.js',
  },
  page: {
    glob: ['contents/about/**/*.md'],
    template: readFileSync(resolve(templateDir, 'page.ejs')),
    attributes: file => {
      const slug = file.replace(pageRegex, '/$1')
      const date = null
      return { slug, date }
    },
    path: file => file.replace(pageRegex, '$1index.js'),
  },
}

processFiles({ types, dist: resolve(__dirname, '../../pages') })

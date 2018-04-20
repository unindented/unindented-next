const { resolve } = require('path')

const { GenerateSW } = require('workbox-webpack-plugin')

const { InlineManifest } = require('./lib/custom-workbox-webpack-plugin')
const routes = require('./routes.config')

module.exports = {
  webpack: (config, { buildId, dev }) => {
    allowAbsoluteImports(config)

    if (!dev) {
      enableSourceMaps(config)
      generateServiceWorker(config, buildId)
    }

    return config
  },

  exportPathMap: () => routes,
}

const allowAbsoluteImports = config => {
  config.resolve.modules.unshift(resolve(__dirname, 'lib'))
}

const enableSourceMaps = config => {
  config.devtool = 'source-map'

  for (const plugin of config.plugins) {
    if (plugin.constructor.name === 'UglifyJsPlugin') {
      plugin.options.sourceMap = true
      break
    }
  }
}

const generateServiceWorker = (config, buildId) => {
  config.plugins.push(
    new GenerateSW({
      skipWaiting: true,
      clientsClaim: true,
      exclude: [/\.map$/, /manifest\.json$/, /\/blog\//, /\/style-guide\//],
    }),
    new InlineManifest({
      mapping: {
        '^(static/.*)$': '/_next/$1',
        '^(chunks/.*)$': '/_next/webpack/$1',
        '^bundles/pages/(.*)$': `/_next/${buildId}/page/$1`,
      },
      additionalUrls: ['/', '/about/'],
    })
  )
}

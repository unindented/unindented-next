const fixManifest = require('./fix-manifest')

class InlineManifest {
  constructor(config = {}) {
    this.config = Object.assign({ swDest: 'service-worker.js', additionalUrls: [] }, config)
  }

  apply(compiler) {
    if ('hooks' in compiler) {
      // We're in webpack 4+.
      compiler.hooks.emit.tapPromise(this.constructor.name, compilation => this.handleEmit(compilation))
    } else {
      // We're in webpack 2 or 3.
      compiler.plugin('emit', (compilation, callback) => {
        this.handleEmit(compilation)
          .then(callback)
          .catch(callback)
      })
    }
  }

  async handleEmit(compilation) {
    const manifest = this.findManifest(compilation)
    this.fixManifest(manifest)

    const serviceWorker = this.findServiceWorker(compilation)
    this.inlineServiceWorkerManifest(serviceWorker, manifest)
  }

  findManifest(compilation) {
    const assetNames = Object.keys(compilation.assets)
    const manifestName = assetNames.find(name => /precache-manifest.*\.js$/.test(name))
    return compilation.assets[manifestName]
  }

  fixManifest(manifest) {
    const newManifestSource = fixManifest(manifest.source(), this.config.mapping, this.config.additionalUrls)

    manifest.source = () => newManifestSource
    manifest.size = () => manifest.source().length
  }

  findServiceWorker(compilation) {
    return compilation.assets[this.config.swDest]
  }

  inlineServiceWorkerManifest(serviceWorker, manifest) {
    const newServiceWorkerSource = serviceWorker
      .source()
      .replace(/importScripts\(\s+"precache-manifest.*\.js"\s+\);/g, manifest.source())

    serviceWorker.source = () => newServiceWorkerSource
    serviceWorker.size = () => serviceWorker.source().length
  }
}

module.exports = InlineManifest

const vm = require('vm')

const fixManifest = (manifest, mapping, additionalUrls) => {
  const manifestEntries = evalManifest(manifest)
  const newManifestEntries = manifestEntries
    .map(entry => fixManifestEntry(entry, mapping))
    .concat(additionalManifestEntries(additionalUrls))
  return `self.__precacheManifest = ${JSON.stringify(newManifestEntries, null, 2)}`
}

const evalManifest = manifest => {
  const sandbox = { self: {} }
  vm.createContext(sandbox)
  vm.runInContext(manifest, sandbox)
  return sandbox.self.__precacheManifest
}

const fixManifestEntry = (manifestEntry, mapping) => ({
  ...manifestEntry,
  url: fixManifestEntryUrl(manifestEntry.url, mapping),
})

const fixManifestEntryUrl = (url, mapping) =>
  Object.keys(mapping).reduce((acc, regexp) => acc.replace(new RegExp(regexp), mapping[regexp]), url)

const additionalManifestEntries = additionalUrls => {
  const revision = Date.now()
  return additionalUrls.map(url => ({ revision: `${revision}`, url: url }))
}

module.exports = fixManifest

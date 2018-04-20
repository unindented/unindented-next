module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['inline-import', { extensions: ['.css'] }],
    ['styled-components', { displayName: true, preprocess: false, ssr: true }],
    ['transform-define', require('./env.config.js')],
  ],
}

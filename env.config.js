const pkg = require('./package.json')

module.exports = {
  'process.env.SITE_TITLE': pkg.productName,
  'process.env.SITE_DESCRIPTION': pkg.description,
  'process.env.SITE_URL': pkg.homepage,
  'process.env.BACKGROUND_COLOR': pkg.backgroundColor,
  'process.env.THEME_COLOR': pkg.themeColor,
  'process.env.AUTHOR_NAME': pkg.author.name,
  'process.env.AUTHOR_EMAIL': pkg.author.email,
  'process.env.AUTHOR_GITHUB': pkg.author.github,
  'process.env.AUTHOR_TWITTER': pkg.author.twitter,
}

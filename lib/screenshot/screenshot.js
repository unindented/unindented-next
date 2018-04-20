const { resolve } = require('path')
const { parse } = require('url')

const chalk = require('chalk')
const { ensureFile } = require('fs-extra')
const puppeteer = require('puppeteer')
const pushstate = require('pushstate-server')

const port = 3000

const screenshotUrl = async ({ page, url, dist }) => {
  console.log(chalk.blue(`Screenshotting "${url}"`))

  const name = parse(url).pathname.replace(/^.*?\/([^/]*?)\/?$/, '$1') || 'index'
  const file = resolve(dist, `${name}.png`)

  try {
    await page.goto(`http://localhost:${port}${url}`, { waitUntil: 'networkidle0' })

    await ensureFile(file)
    await page.screenshot({ path: file, type: 'png', fullPage: true })
  } catch (err) {
    console.error(err)
  }
}

const screenshotUrls = async ({ urls, src, dist }) => {
  const server = pushstate.start({ port, directory: src })

  const browser = await puppeteer.launch()

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 })

    for (const url of urls) {
      await screenshotUrl({ page, url, dist })
    }
  } finally {
    server.close()
    await browser.close()
  }
}

module.exports = {
  screenshotUrls,
}

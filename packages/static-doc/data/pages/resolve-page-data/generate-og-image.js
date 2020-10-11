const { writeFileSync, mkdirSync, readFileSync } = require('fs')
const { join } = require('path')
const puppeteer = require('puppeteer')
const Mustache = require('mustache')
const { GENERATED_FILES_DIR, DOCS_PUBLIC_ORIGIN_PATH } = require('../../../constants')
const { ogImageTemplate } = require('../../user-config')

const template = readFileSync(ogImageTemplate, { encoding: 'utf8' })

async function generateOgImage () {
  const page = JSON.parse(process.env.PAGE)
  const userConfig = JSON.parse(process.env.USER_CONFIG)
  const dirToSave = `${GENERATED_FILES_DIR}/og-images`
  const imageUrl = join(dirToSave, `${Buffer.from(page.path).toString('base64')}.jpg`)

  const browser = await puppeteer.launch()
  const browserPage = await browser.newPage()
  await browserPage.setViewport({ width: 2048, height: 1170 })
  await browserPage.setContent(Mustache.render(template, { page, userConfig }))

  const imageFile = await browserPage.screenshot({ type: 'jpeg' })

  mkdirSync(join(DOCS_PUBLIC_ORIGIN_PATH, dirToSave), { recursive: true })

  writeFileSync(join(DOCS_PUBLIC_ORIGIN_PATH, imageUrl), imageFile)

  await browser.close()

  process.stdout.write('/' + imageUrl)
}

generateOgImage()

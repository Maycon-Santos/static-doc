const { join } = require('path')
const { execSync } = require('child_process')
const userConfig = require('../../user-config')
const urlJoin = require('../../../utils/url-join')

const { ogImageTemplate } = userConfig

module.exports = function resolveOgImage (pages) {
  return pages.map(page => {
    const { data, image } = page

    if (image || !ogImageTemplate) return page

    try {
      process.stdout.write('\r Generating OG image for ' + page.route)

      const imageFilename = execSync(
        `node ${join(__dirname, './generate-og-image')}`,
        {
          env: {
            ...process.env,
            PAGE: JSON.stringify(page),
            USER_CONFIG: JSON.stringify(userConfig)
          }
        }
      ).toString().trim()

      process.stdout.clearLine()
      process.stdout.cursorTo(0)

      return Object.assign(page, { data: { ...data, image: urlJoin(userConfig.baseUrl, imageFilename) } })
    } catch (e) {
      return page
    }
  })
}

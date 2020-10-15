module.exports = function resolveTitle (pages) {
  return pages.map(page => {
    const { path, isExternalLink, data } = page

    if (data.title || isExternalLink) return page

    const title = path.replace(/-/g, ' ').replace(/\//g, ' - ').replace(/.mdx?$/, '')

    return Object.assign(page, { data: { ...data, title } })
  })
}

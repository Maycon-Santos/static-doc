module.exports = function resolveName (pages) {
  return pages.map(page => {
    const { path, isExternalLink, data } = page

    if (isExternalLink) {
      const domainRegex = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/?\n]+)/
      const name = path.match(domainRegex)[1]

      return Object.assign(page, { data: { ...data, name } })
    }

    if (data.name) return page

    const name = path.replace(/^.*\//, '').replace(/-/g, ' ').replace(/.mdx?$/, '')

    return Object.assign(page, { data: { ...data, name } })
  })
}

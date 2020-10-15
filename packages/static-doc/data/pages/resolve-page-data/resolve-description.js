module.exports = function resolveDescription (pages) {
  return pages.map(page => {
    const { data } = page

    if (typeof data.description === 'number' || typeof data.description === 'string') return page

    return Object.assign(page, { data: { ...data, description: '' } })
  })
}

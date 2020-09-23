module.exports = function resolveDescription (pages) {
  return pages.map(page => {
    const { data } = page

    if (data.description) return page

    return {
      ...page,
      data: {
        ...data,
        description: ''
      }
    }
  })
}

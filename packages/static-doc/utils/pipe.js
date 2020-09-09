module.exports = function pipe (...fns) {
  return initialParam => {
    return fns
      .filter(Boolean)
      .reduce((param, func) => func(param), initialParam)
  }
}

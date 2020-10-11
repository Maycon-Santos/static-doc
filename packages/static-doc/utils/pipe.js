module.exports = function pipe (...fns) {
  return param => {
    return fns
      .filter(Boolean)
      .reduce((result, next) => next(result), param)
  }
}

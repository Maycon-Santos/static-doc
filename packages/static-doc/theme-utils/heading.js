const React = require('react')
const { EssentialsContext } = require('./essentials')

function useHeading () {
  const { headings } = React.useContext(EssentialsContext)
  return headings
}

module.exports = {
  useHeading
}

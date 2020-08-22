const React = require('react')
const { EssentialsContext } = require('./essentials')

function useAsset (assetKey) {
  const { getAsset } = React.useContext(EssentialsContext)
  return getAsset(assetKey)
}

module.exports = {
  useAsset
}

const React = require('react')

const EssentialsContext = React.createContext({})
const EssentialsProvider = EssentialsContext.Provider

module.exports = {
  EssentialsContext,
  EssentialsProvider
}

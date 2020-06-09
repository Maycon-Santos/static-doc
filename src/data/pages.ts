// @ts-ignore
import preval from 'babel-plugin-preval/macro'

export default preval`module.exports = require('./get-pages')` as Array<{
  path: string
  route: string
  category: string
  isExternalLink: boolean
  data: {
    title: string
    name: string
  }
}>

// @ts-ignore
import preval from 'babel-plugin-preval/macro'

export type Page = {
  path: string
  route: string
  category: string
  isExternalLink: boolean
  data: {
    title: string
    name: string
  }
}

export default preval`module.exports = require('./build-time/get-pages')` as Page[]

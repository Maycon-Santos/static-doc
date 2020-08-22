const React = require('react')
const Head = require('next/head').default

const defaultFontFamily = 'Montserrat'

// TODO: Implementar possibilidade de sobrescrever isso pelo .config

/**
 * @param {{
 *  body: {
 *    family: string[]
 *    weight: number
 *  }
 *  googleFonts: Array<{
 *    family: string
 *    weights: number[]
 *  }>
 * }} props
 */
function Fonts (props) {
  const {
    body = {
      family: [defaultFontFamily, 'sans-serif'],
      weight: 500
    },
    googleFonts = [{
      family: defaultFontFamily,
      weights: [500]
    }],
    children
  } = props

  const googleFontsTags = googleFonts.map(font => {
    const { family, weights } = font
    const formattedFamily = family.replace(/ /g, '+')
    const formattedWeight = weights.join(';')

    return React.createElement('link', {
      key: formattedFamily,
      href: `https://fonts.googleapis.com/css2?family=${formattedFamily}:wght@${formattedWeight}&display=swap`,
      rel: 'stylesheet'
    })
  })

  const bodyFontFamily = React.createElement('style', {}, `
    body {
      font-family: ${body.family.join(',')};
      font-weight: ${body.weight};
    }
  `)

  return React.createElement(
    React.Fragment,
    {},
    React.createElement(
      Head, {},
      ...googleFontsTags,
      bodyFontFamily
    ),
    children
  )
}

module.exports = {
  Fonts
}

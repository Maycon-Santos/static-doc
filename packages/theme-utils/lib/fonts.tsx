import React from 'react'
import Head from 'next/head'

const defaultFontFamily = 'Montserrat'

// TODO: Implementar possibilidade de sobrescrever isso pelo .config

type FontsProps = {
  body: {
    family: string[]
    weight: number
  },
  googleFonts: Array<{
    family: string,
    weights: number[]
  }>
}

export const Fonts: React.FC<FontsProps> = props => {
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

    return (
      <link
        key={formattedFamily}
        href={`https://fonts.googleapis.com/css2?family=${formattedFamily}:wght@${formattedWeight}&display=swap`}
        rel="stylesheet"
      />
    )
  })

  return (
    <>
      <Head>
        {googleFontsTags}
        <style>{`
          body {
            font-family: ${body.family.join(',')};
            font-weight: ${body.weight};
          }
        `}</style>
      </Head>
      {children}
    </>
  )
}

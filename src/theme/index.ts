import { Theme } from './type'

const theme: Theme = {
  colorMode: 'dark',
  spacing: [0, 2, 4, 8, 16, 32, 48, 64, 80, 100],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    semiBold: 600,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  radii: {
    square: 0,
    radius: 4,
    rounded: 10
  },
  googleFonts: [
    {
      name: 'Open Sans',
      weights: [400, 600, 700]
    }
  ],
  fontFamilies: {
    primary: ['Open Sans', 'sans-serif'],
    menu: ['Open Sans', 'sans-serif'],
    logo: ['Open Sans', 'sans-serif']
  },
  colors: {
    light: {
      body: {
        background: 'white'
      },
      text: {
        light: '#13161F',
        dark: 'white'
      },
      primary: {
        100: '#E1F5FE',
        200: '#81D4FA',
        300: '#29B6F6',
        400: '#29B6F6',
        500: '#03A9F4',
        600: '#039BE5',
        700: '#0288D1',
        800: '#0277BD',
        900: '#01579B'
      },
      gray: {
        100: '#fdfdfd',
        200: '#FAFAFA',
        300: '#edecec',
        400: '#dadde2',
        500: '#ececee',
        600: '#cfd5e0',
        700: '#616161'
      },
      dark: '#282A36',
      light: '#f8f8f2',
      negative: '#EB4D4B',
      link: {
        light: '#1a5ad2',
        dark: '',
        background: '#4a79d6'
      },
      syntaxHighlight: {
        plain: {
          text: '#f8f8f2',
          background: '#282A36'
        },
        highlight: [
          {
            types: ['function', 'attr-name'],
            text: '#50fa7b'
          },
          {
            types: ['class-name', 'property', 'atrule'],
            text: '#8be9fd'
          },
          {
            types: ['number', 'boolean', 'prolog', 'constant', 'builtin'],
            text: '#bd93f9'
          },
          {
            types: ['inserted'],
            text: '#50fa7b'
          },
          {
            types: ['deleted'],
            text: '#50fa7b'
          },
          {
            types: ['changed'],
            text: '#ffb86c'
          },
          {
            types: ['punctuation', 'symbol'],
            text: '#f8f8f2'
          },
          {
            types: ['string', 'attr-value'],
            text: '#f1fa8c'
          },
          {
            types: ['char', 'tag', 'selector'],
            text: '#ff79c6'
          },
          {
            types: ['script'],
            text: '#f8f8f2'
          },
          {
            types: ['keyword', 'variable', 'operator'],
            text: '#ff79c6'
          },
          {
            types: ['comment'],
            text: '#6272a4'
          }
        ]
      }
    },
    dark: {
      body: {
        background: '#211F3B'
      },
      text: {
        light: '#FFFEFF',
        dark: '#282A36'
      },
      primary: {
        100: '#E1F5FE',
        200: '#81D4FA',
        300: '#29B6F6',
        400: '#29B6F6',
        500: '#03A9F4',
        600: '#039BE5',
        700: '#0288D1',
        800: '#0277BD',
        900: '#01579B'
      },
      gray: {
        100: '#26233f',
        200: '#2E2B4C',
        300: '#272541',
        400: '#2E2B4C',
        500: '#25233F',
        600: '#211F3B',
        700: '#1f1d33'
      },
      dark: 'white',
      light: '#282A36',
      negative: '#EB4D4B',
      link: {
        light: '#1BA9EA',
        dark: 'white',
        background: '#1356CB'
      },
      syntaxHighlight: {
        plain: {
          background: '#25233F'
        }
      }
    }
  }
}

export default theme

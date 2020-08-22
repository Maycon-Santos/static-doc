const syntaxHighlighting = {
  light: {
    plain: {
      color: '#07070d',
      backgroundColor: '#f9f9f9'
    },
    styles: [
      {
        types: ['function', 'attr-name'],
        style: {
          color: '#af0584'
        }
      },
      {
        types: ['class-name', 'property', 'atrule'],
        style: {
          color: '#ce3e1f'
        }
      },
      {
        types: ['number', 'boolean', 'prolog', 'constant', 'builtin'],
        style: {
          color: '#426c06'
        }
      },
      {
        types: ['inserted'],
        style: {
          color: '#af0584'
        }
      },
      {
        types: ['deleted'],
        style: {
          color: '#af0584'
        }
      },
      {
        types: ['changed'],
        style: {
          color: '#004793'
        }
      },
      {
        types: ['punctuation', 'symbol'],
        style: {
          color: '#07070d'
        }
      },
      {
        types: ['string', 'attr-value'],
        style: {
          color: '#0e0573'
        }
      },
      {
        types: ['char', 'tag', 'selector'],
        style: {
          color: '#008639'
        }
      },
      {
        types: ['script'],
        style: {
          color: '#07070d'
        }
      },
      {
        types: ['keyword', 'variable', 'operator'],
        style: {
          color: '#008639'
        }
      },
      {
        types: ['comment'],
        style: {
          color: '#9d8d5b'
        }
      }
    ]
  },
  dark: {
    plain: {
      color: '#f8f8f2',
      backgroundColor: '#161e21'
    },
    styles: [
      {
        types: ['function', 'attr-name'],
        style: {
          color: '#50fa7b'
        }
      },
      {
        types: ['class-name', 'property', 'atrule'],
        style: {
          color: '#8be9fd'
        }
      },
      {
        types: ['number', 'boolean', 'prolog', 'constant', 'builtin'],
        style: {
          color: '#bd93f9'
        }
      },
      {
        types: ['inserted'],
        style: {
          color: '#50fa7b'
        }
      },
      {
        types: ['deleted'],
        style: {
          color: '#50fa7b'
        }
      },
      {
        types: ['changed'],
        style: {
          color: '#ffb86c'
        }
      },
      {
        types: ['punctuation', 'symbol'],
        style: {
          color: '#f8f8f2'
        }
      },
      {
        types: ['string', 'attr-value'],
        style: {
          color: '#f1fa8c'
        }
      },
      {
        types: ['char', 'tag', 'selector'],
        style: {
          color: '#ff79c6'
        }
      },
      {
        types: ['script'],
        style: {
          color: '#f8f8f2'
        }
      },
      {
        types: ['keyword', 'variable', 'operator'],
        style: {
          color: '#ff79c6'
        }
      },
      {
        types: ['comment'],
        style: {
          color: '#6272a4'
        }
      }
    ]
  }
}

export default syntaxHighlighting

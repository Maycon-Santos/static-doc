import React from 'react'

const TextIcon: React.FC<any> = props => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22 7V5H2V7H22ZM16 9V11H2V9H16ZM22 15V13H2V15H22ZM16 19V17H2V19H16Z'
      />
    </svg>
  )
}

export default TextIcon

import React from 'react'

const MenuIcon: React.FC<any> = props => {
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
        d='M22 7V5H2V7H22ZM22 11V13H2V11H22ZM22 17V19H2V17H22Z'
      />
    </svg>
  )
}

export default MenuIcon

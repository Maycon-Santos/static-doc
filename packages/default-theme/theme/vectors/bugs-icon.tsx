import React from 'react'

const BugsIcon: React.FC = (props) => {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00001 7.70711L4.85357 8.85356L4.14646 8.14645L5.29291 7L4.14646 5.85356L4.85357 5.14645L6.00001 6.2929L7.14646 5.14645L7.85357 5.85356L6.70712 7L7.85357 8.14645L7.14646 8.85356L6.00001 7.70711V7.70711ZM10.5 4.5H1.49999V9.5H10.5V4.5ZM10.5 3.49999V2.49999H1.49999V3.49999H10.5ZM1.5 10.5C0.947715 10.5 0.5 10.0523 0.5 9.5V2.5C0.5 1.94772 0.947715 1.5 1.5 1.5H10.5C11.0523 1.5 11.5 1.94772 11.5 2.5V9.5C11.5 10.0523 11.0523 10.5 10.5 10.5H1.5Z"
      />
    </svg>
  )
}

export default BugsIcon

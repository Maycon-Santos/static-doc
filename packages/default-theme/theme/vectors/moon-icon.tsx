import React from 'react'

const MoonIcon: React.FC<any> = props => {
  return (
    <svg
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.5 4.5C6.5 3.51271 6.91023 2.59238 7.6199 1.93382L8.3587 1.24824L7.36584 1.07478C7.08172 1.02514 6.79234 1 6.5 1C3.73858 1 1.5 3.23858 1.5 6C1.5 8.76142 3.73858 11 6.5 11C8.19269 11 9.74214 10.1519 10.6633 8.76978L11.2216 7.93214L10.2168 7.99341C10.1449 7.9978 10.0726 8 10 8C8.067 8 6.5 6.433 6.5 4.5ZM6.5 10C4.29086 10 2.5 8.20916 2.5 6.00002C2.5 3.87397 4.15867 2.13533 6.25257 2.00755C5.76834 2.73426 5.5 3.59594 5.5 4.50002C5.5 6.71952 7.10685 8.56373 9.2207 8.93278C8.49392 9.60769 7.53048 10 6.5 10Z'
      />
    </svg>
  )
}

export default MoonIcon

import React from 'react'
import { useLogo } from 'static-doc/theme-utils'

const Logo: React.FC = () => {
  const { image, text } = useLogo()

  return (
    <div className="wrapper">
      {image ? (
        <img src={image} alt={text} className="image" />
      ) : (
        <span className="text">{text}</span>
      )}
      <style jsx>{`
        .text {
          font-size: var(--font-size-4);
          font-weight: var(--font-weight-bold);
        }

        .image {
          max-width: 100%;
        }

        :global(.light-mode) .text {
          color: var(--color-light-text-500);
        }

        :global(.dark-mode) .text {
          color: var(--color-dark-text-500);
        }
      `}</style>
    </div>
  )
}

export default Logo

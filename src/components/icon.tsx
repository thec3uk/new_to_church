import * as React from 'react'

const Icon = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  )
}

export default Icon

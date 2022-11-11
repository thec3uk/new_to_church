import React, { ReactNode } from 'react'
import Button from './button'

const ButtonSlice = ({
  size = 'md',
  align = 'left',
  children,
  to,
  colourVariation,
}: {
  size?: string
  align?: string
  children: ReactNode
  to: any
  colourVariation?: string
}) => {
  const alignment: Record<string, string> = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    full: 'flex-col align-stretch',
  }

  return (
    <div className="">
      <div className="px-0 mx-auto my-12 max-w-7xl sm:my-16 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto flex ${alignment[align]}`}>
          <Button
            size={size}
            isFull={align === 'full'}
            path={to}
            colourVariation={colourVariation}
          >
            {children}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonSlice

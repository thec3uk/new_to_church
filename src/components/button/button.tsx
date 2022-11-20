import { PrismicLink } from '@prismicio/react'
import * as React from 'react'
import { linkResolver } from '../../utils/linkResolver'

/* This example requires Tailwind CSS v2.0+ */
export default function Button({
  size,
  path,
  isFull = false,
  colourVariation = 'default-slice',
  children,
}: {
  size: string
  path: any
  isFull?: boolean
  colourVariation?: string
  children: React.ReactNode
}) {
  const commonClasses =
    'inline-flex items-center border border-transparent font-medium  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variations: Record<string, string> = {
    'default-slice':
      'bg-gray-900 hover:bg-gray-700  hover:text-white text-gray-50 ',
    redButton: 'bg-red-500 hover:bg-red-400  text-gray-50 ',
    yellowButton: 'bg-yellow-300 hover:bg-yellow-200  text-gray-900 ',
    // tealButton: 'bg-teal-500 hover:bg-teal-400   text-gray-50 ',
    purpleButton: 'bg-purple-900 hover:bg-purple-800   text-gray-50 ',
  }

  const sizes: Record<string, string> = {
    xs: 'px-2.5 py-1.5 text-xs rounded',
    sm: 'px-3 py-2 text-sm leading-4 rounded-md shadow-sm',
    md: 'px-4 py-2 text-sm rounded-md shadow-sm',
    lg: 'px-4 py-2 text-base rounded-md shadow-sm',
    xl: 'px-6 py-3 text-base rounded-md shadow-sm',
  }
  return (
    <>
      <PrismicLink
        className={`${sizes[size]} ${
          variations[colourVariation]
        } ${commonClasses} ${isFull && `justify-center`}`}
        field={path}
        linkResolver={linkResolver}
      >
        {children}
      </PrismicLink>
    </>
  )
}

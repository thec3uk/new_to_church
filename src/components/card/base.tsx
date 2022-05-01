import * as React from 'react'

const BaseCard = ({
  children,
  colour = 'teal',
}: {
  children: React.ReactNode
  colour?: string
}) => {
  const mapping: Record<string, string> = {
    teal: 'bg-teal-500 text-white-50',
    red: 'bg-red-500 text-white-50',
    yellow: 'bg-red-500 text-black',
    transparent: 'bg-transparent',
  }
  return (
    <div
      className={`grid grid-cols-5 p-2 rounded gap-x-4 md:grid-cols-12 h-full md:px-4 md:py-4 lg:py-6 ${mapping[colour]}`}
    >
      {children}
    </div>
  )
}

export default BaseCard

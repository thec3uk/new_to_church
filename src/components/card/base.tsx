import * as React from 'react'

const BaseCard = ({
  children,
  colour = 'white',
  row = '6',
}: {
  children: React.ReactNode
  colour?: string
  row?: string
}) => {
  const mapping: Record<string, string> = {
    // teal: 'bg-teal-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-300 text-black',
    white: 'bg-white text-black',
    black: 'bg-black text-white',
    transparent: 'bg-transparent text-white',
    transparentBlack: 'bg-transparent text-black',
  }
  const rowsMap: Record<string, string> = {
    1: 'grid-rows-1',
    2: 'grid-rows-2',
    3: 'grid-rows-3',
    4: 'grid-rows-4',
    5: 'grid-rows-5',
    6: 'grid-rows-6',
  }
  return (
    <div
      className={`grid grid-cols-5 ${rowsMap[row]} p-2 rounded shadow-md gap-x-4 md:grid-cols-12 h-full md:px-4 md:py-4 lg:py-6 ${mapping[colour]} min-h-min`}
    >
      {children}
    </div>
  )
}

export default BaseCard

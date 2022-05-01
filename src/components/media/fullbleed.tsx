import * as React from 'react'

const FullBleedMedia = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center w-screen py-32 mx-auto grow max-w-screen">
      {children}
    </div>
  )
}

export default FullBleedMedia
export const containerClassNames =
  'object-cover object-center w-screen h-full aspect-video lg:h-screen-90'

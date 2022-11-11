import * as React from 'react'

const FullBleedMedia = ({
  children,
  reducedPadding = false,
}: {
  children: React.ReactNode
  reducedPadding?: boolean
}) => {
  const padding = reducedPadding ? 'py-16' : 'py-32'
  return (
    <div
      className={`flex justify-center w-screen mx-auto grow max-w-screen ${padding}`}
    >
      {children}
    </div>
  )
}

export default FullBleedMedia
export const fullScreenContainerClassNames =
  'object-cover object-center w-screen h-full aspect-video lg:h-screen-90'
export const autoHeightContainerClassNames =
  'object-cover object-center w-screen h-auto aspect-auto'

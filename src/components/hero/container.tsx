import * as React from 'react'

const ContainedHero = ({
  children,
  background,
  alignment,
}: {
  children: React.ReactNode
  background: React.ReactNode
  alignment?: string
}) => {
  const margins = 'mb-32 mt-28 md:mt-40 lg:mb-32 lg:mt-40'

  const alignmentClasses: Record<string, string> = {
    left: 'text-left lg:col-start-2',
    center: 'text-center lg:col-start-5',
    right: 'text-right lg:col-start-8',
  }

  const bgAlignment = ['center', 'right'].includes(alignment as string)
    ? ''
    : 'lg:flex'

  return (
    <>
      <div
        className={`max-w-screen md:max-w-screen-sm md:col-start-2 lg:col-start-2 md:col-span-6 lg:col-span-4 ${margins} ${
          alignmentClasses[alignment as string]
        }`}
      >
        {children}
      </div>
      <div
        className={`hidden lg:col-start-7 lg:col-span-5 justify-center items-center w-full ${margins} ${bgAlignment}`}
      >
        <div className="w-full h-full">{background}</div>
      </div>
    </>
  )
}

export default ContainedHero

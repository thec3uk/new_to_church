import * as React from 'react'

const FullBleedHero = ({
  children,
  background,
  alignment, // this is used in the containerhero component
}: {
  children: React.ReactNode
  background: React.ReactNode
  alignment: string
}) => {
  const margins = 'mb-32 mt-4 lg:mb-28'
  return (
    <div
      className={`lg:relative grid grid-cols-12 col-span-full -ml-2 ${margins}`}
    >
      <div className="hidden object-center w-screen h-screen col-start-1 col-end-12 -mx-2 col-span-full lg:block aspect-video ">
        {background}
      </div>

      <div className="px-4 py-8 my-20 lg:absolute bg-white/60 md:max-w-screen-sm col-span-full md:col-start-2 lg:col-start-2 md:col-span-6 lg:col-span-7 backdrop-blur-sm">
        {children}
      </div>
      {/* <div
        className={`hidden lg:flex lg:col-start-7 lg:col-span-5 justify-center items-center w-full ${margins}`}
      ></div> */}
    </div>
  )
}

export default FullBleedHero

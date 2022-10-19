import * as React from 'react'
import BaseCard from './base'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TitleCard = ({
  children,
  title,
  subtitle,
  colour,
  titleImage,
}: {
  children?: React.ReactNode
  title?: string
  subtitle?: string
  colour?: string
  titleImage?: any
}) => {
  const gImage = getImage(titleImage)
  const rowCount = !!gImage ? '2' : '6'
  return (
    <BaseCard colour={colour ? colour : 'red'} row={rowCount}>
      {!!gImage ? (
        <>
          <div className="flex flex-col justify-between col-span-5 row-span-2 md:col-span-11">
            <div className="relative rounded">
              <GatsbyImage
                image={gImage}
                alt={titleImage.alt || 'An Image needing an alt text'}
                className="object-cover w-full h-full rounded"
              />
              <div className="absolute bottom-0 object-cover w-full h-56 rounded bg-gradient-to-t from-black lg:from-transparent"></div>
              <h2 className="absolute bottom-0 p-2 text-4xl font-extrabold text-white rounded lg:text-5xl lg:text-black">
                <span className="md:hidden">
                  {title}
                  {title && subtitle && `:`}
                  {title && subtitle && <br />}
                </span>
                {subtitle}
              </h2>
            </div>
          </div>
          <div className="flex flex-col col-start-1 row-span-2 mt-4 col-span-full md:col-span-11">
            {children}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-between col-span-5 md:col-span-7">
            <h2 className="text-4xl font-extrabold lg:text-5xl">
              <span className="md:hidden">
                {title}
                {title && subtitle && `:`}
                {title && subtitle && <br />}
              </span>
              {subtitle}
            </h2>
          </div>
          <div className="flex flex-col h-full col-start-1 row-span-5 mt-4 col-span-full md:col-span-11">
            {children}
          </div>
        </>
      )}

      <div className="hidden col-start-12 row-start-1 row-span-full md:flex justify-start items-center [writing-mode:vertical-lr]  group-hover:text-red-500 duration-300 transition-colors">
        <h2 className="font-bold underline md:text-4xl lg:text-5xl whitespace-nowrap">
          {title}
        </h2>
      </div>
    </BaseCard>
  )
}

export default TitleCard

import * as React from 'react'
import BaseCard from './base'

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
  titleImage?: string
}) => {
  return (
    <BaseCard colour={colour ? colour : 'teal'}>
      {!!titleImage ? (
        <div className="flex flex-col justify-between col-span-5 md:col-span-11">
          <div className="relative rounded">
            <img
              src={titleImage}
              className="object-cover w-full h-56 rounded"
            />
            <div className="absolute bottom-0 object-cover w-full h-56 rounded bg-gradient-to-t from-black to-transparent"></div>
            <h2 className="absolute bottom-0 p-2 text-4xl font-extrabold text-gray-100 rounded lg:text-5xl">
              <span className="md:hidden">
                {title}
                {title && subtitle && `:`}
                {title && subtitle && <br />}
              </span>
              {subtitle}
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between col-span-5 md:col-span-7">
          <h2 className="text-4xl font-extrabold text-gray-100 lg:text-5xl">
            <span className="md:hidden">
              {title}
              {title && subtitle && `:`}
              {title && subtitle && <br />}
            </span>
            {subtitle}
          </h2>
        </div>
      )}
      <div className="col-start-1 col-span-full md:col-span-11">{children}</div>
      <div className="hidden col-start-12 row-start-1 row-span-2 md:flex justify-center items-center [writing-mode:vertical-lr]">
        <h2 className="font-bold underline md:text-4xl lg:text-5xl text-gray-50 whitespace-nowrap">
          {title}
        </h2>
      </div>
    </BaseCard>
  )
}

export default TitleCard

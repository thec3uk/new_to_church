import * as React from 'react'
import BaseCard from './base'

const Card = ({
  title,
  subtitle,
  cta,
  children,
}: {
  title: string
  cta: string
  subtitle: string
  children?: React.ReactNode
}) => {
  return (
    <BaseCard colour={'teal'}>
      <div className="flex flex-col justify-between col-span-3 md:col-span-7">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-100 lg:text-5xl">
            <span className="md:hidden">{title}:</span> {subtitle}
          </h2>
          {children && (
            <div className="font-medium leading-snug tracking-wide text-gray-200 line-clamp-3">
              {children}
            </div>
          )}
        </div>
        <button className="w-full px-6 py-1 mt-2 text-xl font-bold bg-black rounded shadow lg:py-3 lg:text-3xl text-gray-50">
          {cta}
        </button>
      </div>
      <div className="h-full col-span-2 md:col-span-4 lg:col-span-4 ">
        <img
          className="object-cover w-full h-full rounded-lg"
          src="/live.jpg"
        />
      </div>
      <div className="hidden col-start-12 md:flex justify-center items-center [writing-mode:vertical-lr]">
        <h2 className="font-bold underline md:text-4xl lg:text-5xl text-gray-50 whitespace-nowrap">
          {title}
        </h2>
      </div>
    </BaseCard>
  )
}

export default Card

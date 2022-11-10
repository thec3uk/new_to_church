import * as React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

const QuickLink = ({
  children,
  to,
}: {
  children: React.ReactNode
  to: any
}) => (
  <PrismicLink
    className="transition duration-300 cursor-pointer text-black/70 hover:text-red-500 hover:underline"
    field={to}
  >
    {children}
  </PrismicLink>
)

const QuickLinks = ({ data }) => {
  return (
    <div className="grid grid-cols-2 px-4 py-2 bg-white bg-center bg-no-repeat bg-cover rounded shadow-lg lg:grid-cols-1 lg:grid-rows-1 lg:px-2 lg:py-4">
      <div className="flex items-center justify-end col-start-2 lg:justify-start lg:col-start-1 lg:mb-6">
        <h2 className="text-4xl font-extrabold underline [writing-mode:vertical-lr] lg:text-3xl lg:[writing-mode:horizontal-tb] xl:text-4xl text-black whitespace-nowrap lg:whitespace-normal 2xl:text-4xl">
          {data.title}
        </h2>
      </div>
      <div className="flex flex-col justify-between col-start-1 row-start-1 space-y-1 text-4xl font-bold lg:row-start-2 md:space-y-4 lg:text-3xl xl:text-4xl 2xl:text-3xl">
        {data.slices.map((slice, idx) => {
          return (
            <QuickLink key={idx} to={slice.primary.url}>
              <PrismicRichText field={slice.primary.title.richText} />
            </QuickLink>
          )
        })}
      </div>
    </div>
  )
}

export default QuickLinks

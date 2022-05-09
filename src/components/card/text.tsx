import { PrismicLink, PrismicRichText } from '@prismicio/react'
import * as React from 'react'
import TitleCard from './title'

const TextCard = ({
  title,
  subtitle,
  text,
  to,
  cta,
  titleImage,
  colour,
}: {
  title: string
  subtitle: string
  text: any
  to?: any
  cta?: string
  titleImage?: string
  colour?: string
}) => {
  return (
    <TitleCard
      title={title}
      subtitle={subtitle}
      titleImage={titleImage}
      colour={colour}
    >
      <div className="mt-4 prose md:columns-2 lg:prose-lg text-gray-50 prose-a:text-gray-100 hover:prose-a:text-teal-900">
        <PrismicRichText field={text} />
      </div>
      {to && cta && (
        <PrismicLink
          field={to}
          className="block w-full px-6 py-1 mt-4 text-xl font-bold text-center bg-black rounded shadow lg:py-3 lg:text-3xl text-gray-50"
        >
          {cta}
        </PrismicLink>
      )}
    </TitleCard>
  )
}

export default TextCard

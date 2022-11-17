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
      <div className="min-w-full prose md:columns-3xs md:gap-x-16 lg:prose-lg hover:prose-a:text-red-500 md:text-justify">
        <PrismicRichText field={text} />
      </div>
      {to && cta && (
        <PrismicLink
          field={to}
          className="block w-full px-6 py-1 mt-4 text-xl font-bold text-center text-white capitalize transition-colors duration-300 bg-black rounded shadow hover:text-red-500 lg:py-3 lg:text-3xl"
        >
          {cta}
        </PrismicLink>
      )}
    </TitleCard>
  )
}

export default TextCard
